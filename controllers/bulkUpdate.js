const db  = require('../models/Store');
var request = require('request');

if(typeof require !== 'undefined') XLSX = require('xlsx');
var workbook = XLSX.readFile('book1.xlsx');
var sheet_name_list = workbook.SheetNames;
//console.log(XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]],{defval: ""}))
var input = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]],{defval: ""});



  setTimeout(function () {
    input.forEach( function(inputs) {
      addBulkData(inputs)
    });
  }, 5000);


    ngoids.forEach(function(id) {
      setTimeout(function () {
          $.post("https://ngodarpan.gov.in/index.php/ajaxcontroller/show_ngo_info", {
          id: id,
          csrf_test_name:get_csrf_token()
          },
          function (data, status) {
          var obj = JSON.parse(data);
          console.log('email:'+obj.infor[0].Email+' Major_Activities1:'+obj.infor[0].Major_Activities1+
          ' Mobile:'+obj.infor[0].Mobile+
          ' Off_phone1:'+obj.infor[0].Off_phone1+
          ' Major_Activities1:'+obj.infor[0].Major_Activities1+
          ' ngo_name:'+obj.infor[0].ngo_name+
          ' ngo_url:'+obj.infor[0].ngo_url+
          ' issues_working_db:'+obj.infor.issues_working_db+
          ' StateName:'+obj.registeration_info[0].StateName+
          ' nr_add:'+obj.registeration_info[0].nr_add+
          ' nr_city:'+obj.registeration_info[0].Major_Activities1)

          });
      }, 5000);
    });




async function addBulkData(inputs) {
  console.log(inputs.address.length)
  if (inputs.address.length < 5) {
      await  request({
          url: "https://maps.googleapis.com/maps/api/geocode/json?address="+encodeURIComponent(inputs.district)+"&key=AIzaSyA8xgkTfmx0rHJART7VXcP35QJMvklO4f4",
          method: "POST",
          json: true,   // <--Very important!!!
      }, function (e, r, b){
          if (r.statusCode === 200) {
            console.log(b)
            var city='na',state='na',country='na',zipCode='na',shortUrl='na';
            b.results[0].address_components.forEach( function(add) {
              if (add.types[0] === "administrative_area_level_2") {
                city = add.long_name;
              } else if (add.types[0] === "administrative_area_level_1") {
                state = add.long_name;
              } else if (add.types[0] === "country") {
                country = add.long_name;
              } else if (add.types[0] === "postal_code") {
                zipCode = add.long_name;
              } else {
                
              }
            
            });
            var geometry = b.results[0].geometry.location;

            registerhelp(inputs,city,state,country,zipCode,geometry,b.results[0].formatted_address)
          } else {
            console.log(e)
          }
      });
  } else {

    await request({
        url: "https://maps.googleapis.com/maps/api/geocode/json?address="+encodeURIComponent(inputs.address)+"&key=AIzaSyA8xgkTfmx0rHJART7VXcP35QJMvklO4f4",
        method: "POST",
        json: true,   // <--Very important!!!
    }, function (e, r, b){
        if (r.statusCode === 200) {
          console.log(b)
          var city='na',state='na',country='na',zipCode='na',shortUrl='na';
          b.results[0].address_components.forEach( function(add) {
            if (add.types[0] === "administrative_area_level_2") {
              city = add.long_name;
            } else if (add.types[0] === "administrative_area_level_1") {
              state = add.long_name;
            } else if (add.types[0] === "country") {
              country = add.long_name;
            } else if (add.types[0] === "postal_code") {
              zipCode = add.long_name;
            } else {
              
            }
          
          });
          var geometry = b.results[0].geometry.location;

          registerhelp(inputs,city,state,country,zipCode,geometry,b.results[0].formatted_address)
        } else {
          console.log(e)
        }
    });
  }
}



// @desc  Get helps by zip code
// @route GET /api/v1/help
// @access Public
exports.getHelp = async (req, res, next) => {
  try {
    let cityRef = await db.collection('helps').doc('India').collection(req.query.zipcode);
    let getDoc = cityRef.get()
    .then(snapshot  => {
      console.log(snapshot.docs.length)
      if (snapshot.docs.length === 0) {
        console.log('No such document!');
        res.status(403).json({ error: 'No Data' });
      } else {
        console.log('Document data:', snapshot.docs.map(doc => doc.data()));
        return res.status(200).json(snapshot.docs.map(doc => doc.data()));
      }
    })
    .catch(err => {
      console.log('Error getting document', err);
      res.status(400).json({ error: 'Server error' });
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

// @desc  Add a help in database 
// @route POST /api/v1/help
// @access Public
exports.addHelp = async (req, res, next) => {
  try {
    let docRef = db.collection('helps').doc(req.body.country).collection(req.body.city).doc();
    let FieldValue = require('firebase-admin').firestore.FieldValue;
    console.log(docRef.id);
    var linkdata =JSON.stringify({
          hid: docRef.id,
          uid : req.body.uid,
          title: req.body.title,
          name: req.body.name,
          plan: req.body.plan,
          helpType: req.body.helpType,
          who: req.body.who,
          supp: req.body.supp,
          donation: req.body.donation,
          WhatsApp: req.body.WhatsApp,
          fb: req.body.fb,
          days: req.body.days,
          phone: req.body.phone,
          url: req.body.url,
          formatted_address: req.body.formatted_address,
          place_id: req.body.place_id,
          geometry: req.body.geometry,
          city: req.body.city,
          state: req.body.state,
          country: req.body.country,
          zipCode: req.body.zipCode,
          shortUrl: req.body.shortUrl,
          status: "active",
          creationDate:{
            _seconds: Math.round(new Date() / 1000)
          },
          suppDetails: req.body.suppDetails,
          usrAccountType: req.body.usrAccountType,
          photoURL: req.body.photoURL,
          fprofileUrl:req.body.fprofileUrl
    });
    var myJSONObject = {
      "longDynamicLink": "https://sevabhav.page.link/?link=http://sevabhava.in/?urlData="+encodeURIComponent(linkdata)
    };
    request({
        url: "https://firebasedynamiclinks.googleapis.com/v1/shortLinks?key=AIzaSyDO6uS22dFOm7tlrtaWEPkIibmGzH7bVTo",
        method: "POST",
        json: true,   // <--Very important!!!
        body: myJSONObject
    }, function (error, response, body){
        if (response.statusCode === 200) {
          docRef.set({
                hid: docRef.id,
                uid : req.body.uid,
                title: req.body.title,
                name: req.body.name,
                plan: req.body.plan,
                helpType: req.body.helpType,
                who: req.body.who,
                supp: req.body.supp,
                donation: req.body.donation,
                WhatsApp: req.body.WhatsApp,
                fb: req.body.fb,
                days: req.body.days,
                phone: req.body.phone,
                url: req.body.url,
                formatted_address: req.body.formatted_address,
                place_id: req.body.place_id,
                geometry: req.body.geometry, 
                city: req.body.city,
                state: req.body.state,
                country: req.body.country,
                zipCode: req.body.zipCode,
                shortUrl: body.shortLink,
                status: "active",
                creationDate: FieldValue.serverTimestamp(),
                suppDetails: req.body.suppDetails,
                usrAccountType: req.body.usrAccountType,
                photoURL: req.body.photoURL,
                fprofileUrl:req.body.fprofileUrl,
                joinedUsers: [{
                  uid : req.body.uid,
                  name: req.body.name,
                  phone: req.body.phone,
                  photoURL: req.body.photoURL
                }],
                updates: [],
                isVerified: req.body.isVerified
          }).then(function() {
              // Update successful.
                      console.error("3");
                      addCreatehidtoUsers(docRef.id,req.body.uid,req.body.title,req.body.createdHids,req.body.country,req.body.city)
                      return res.status(201).json({
                      success: true,
                      shortUrl: body.shortLink
                      });
          }).catch(function(error) {
              // An error happened.
                res.status(400).json({ error: error.details });
          });;
          
        } else {
          res.status(400).json({ error: error.details });
        }
    });


  } catch (err) {
    console.error(err);
    if (err.code === 11000) {
      return res.status(400).json({ error: 'Database Error' });
    }
    res.status(500).json({ error: 'Server error' });
  }
};

function addCreatehidtoUsers(hid,uid,title,createdHids,country,city) {
  try {
    let date=Math.round(new Date() / 1000);
    createdHids.push({
      hid : hid,
      title: title,
      creationDate: date,
      country: country,
      city: city
    });
    let docRef = db.collection('users').doc(uid);
    let setAda = docRef.update({

      createdHids: createdHids
      
     }).then(function() {
        console.log("1");
     }).catch(function(error) {
        console.error(error);

    });;
  } catch (err) {
    console.error(err);
  }
}

async function registerhelp(data,city,state,country,zipCode,geometry,formatted_address) {
  try {
    let docRef = db.collection('helps').doc(country).collection(city).doc();
    let FieldValue = require('firebase-admin').firestore.FieldValue;
    console.log(docRef.id);
    var linkdata =JSON.stringify({
          hid: docRef.id,
          uid : "eifgOVSgWGVZapw4o6FjMq330Kg2",
          title: data.title,
          name: "Source Nagrika.org",
          plan: data.plan,
          helpType: data.helpType,
          who: data.who,
          supp: [true,true,true],
          donation: data.donation,
          donationDetails: data.donationDetails,
          WhatsApp: data.WhatsApp,
          fb: data.fb,
          days: 30,
          phone: data.phone,
          url: data.url,
          formatted_address: formatted_address,
          geometry: geometry,
          city: city,
          state: state,
          country: country,
          zipCode: zipCode,
          shortUrl: "",
          status: "active",
          creationDate:{
            _seconds: Math.round(new Date() / 1000)
          },
          suppDetails: data.suppDetails,
          usrAccountType: 'crowd',
          photoURL: "",
          fprofileUrl: "http://www.nagrika.org/",
          email: data.email
    });
    var myJSONObject = {
      "longDynamicLink": "https://sevabhav.page.link/?link=http://sevabhava.in/?urlData="+encodeURIComponent(linkdata)
    };
    request({
        url: "https://firebasedynamiclinks.googleapis.com/v1/shortLinks?key=AIzaSyDO6uS22dFOm7tlrtaWEPkIibmGzH7bVTo",
        method: "POST",
        json: true,   // <--Very important!!!
        body: myJSONObject
    }, function (error, response, body){
        if (response.statusCode === 200) {
          docRef.set({
                hid: docRef.id,
                uid : "eifgOVSgWGVZapw4o6FjMq330Kg2",
                title: data.title,
                name: "Source Nagrika.org",
                plan: data.plan,
                helpType: data.helpType,
                who: data.who,
                supp: [true,true,true],
                donation: data.donation,
                donationDetails: data.donationDetails,
                WhatsApp: data.WhatsApp,
                fb: data.fb,
                days: 30,
                phone: data.phone,
                url: data.url,
                formatted_address: formatted_address,
                geometry: geometry,
                city: city,
                state: state,
                country: country,
                zipCode: zipCode,
                shortUrl: body.shortLink,
                status: "active",
                creationDate:FieldValue.serverTimestamp(),
                suppDetails: data.suppDetails,
                usrAccountType: 'crowd',
                photoURL: "",
                fprofileUrl: "http://www.nagrika.org/",
                email: data.email,
                joinedUsers: [{
                  uid : "eifgOVSgWGVZapw4o6FjMq330Kg2",
                  name: "Source Nagrika.org",
                  phone: "data.phone",
                  photoURL: ""
                }],
                updates: [],
                isVerified: "verified"
          }).then(function() {
              // Update successful.
                      console.log("hid:"+docRef.id+" city:"+city+" title: "+data.title+" shortUrl:"+body.shortLink+" email:"+data.email);
                      return;
          }).catch(function(error) {
              // An error happened.
                console.log(error)
                return;
          });;
          
        } else {
          console.log(error);
          return;
        }
    });


  } catch (err) {
    console.error(err);
    if (err.code === 11000) {
      console.log(err);
      return err
    }
    console.log(error);
    return error
  }
}