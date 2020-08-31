const db  = require('../models/Store');
var request = require('request');
const mailFunctions = require('../models/mailer');



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
  if (req.body.multipleDistrict === 'No') {
    try {
      let docRef = db.collection('helps').doc(req.body.country).collection(req.body.city).doc();
      let FieldValue = require('firebase-admin').firestore.FieldValue;
      console.log(docRef.id);
      var linkdata =JSON.stringify({
            hid: docRef.id,
            city: req.body.city,
            state: req.body.state,
            country: req.body.country,
            shortUrl: ''
      });
      var myJSONObject = {
        "longDynamicLink": "https://sevabhav.page.link/?link=https://sevabhava.in/?urlData="+encodeURIComponent(linkdata)
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
                    email: req.body.email,
                    photoURL: req.body.photoURL
                  }],
                  updates: [],
                  isVerified: req.body.isVerified,
                  email: req.body.email
            }).then(function() {
                // Update successful.
                        console.error("3");
                        mailFunctions.sendCreateHelpMail(req.body.name,req.body.email,body.shortLink)
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
    
  } else {


    setTimeout(function () {
      var count = 1;
      req.body.districts.forEach( async function(district) {

        await request({
            url: "https://maps.googleapis.com/maps/api/geocode/json?address="+encodeURIComponent(district)+"&key=AIzaSyA8xgkTfmx0rHJART7VXcP35QJMvklO4f4",
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


              try {
                let docRef = db.collection('helps').doc(country).collection(city).doc();
                let FieldValue = require('firebase-admin').firestore.FieldValue;
                console.log(docRef.id);
                var linkdata =JSON.stringify({
                      hid: docRef.id,
                      city: city,
                      state: state,
                      country: country,
                      shortUrl: ''
                });
                var myJSONObject = {
                  "longDynamicLink": "https://sevabhav.page.link/?link=https://sevabhava.in/?urlData="+encodeURIComponent(linkdata)
                };
                request({
                    url: "https://firebasedynamiclinks.googleapis.com/v1/shortLinks?key=AIzaSyDO6uS22dFOm7tlrtaWEPkIibmGzH7bVTo",
                    method: "POST",
                    json: true,   // <--Very important!!!
                    body: myJSONObject
                }, async function (error, response, body){
                    if (response.statusCode === 200) {
                      await docRef.set({
                            hid: docRef.id,
                            uid : req.body.uid,
                            title: req.body.title+' '+district,
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
                            place_id: 'na',
                            geometry: geometry, 
                            city: city,
                            state: state,
                            country: country,
                            zipCode: zipCode,
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
                              email: req.body.email,
                              photoURL: req.body.photoURL
                            }],
                            updates: [],
                            isVerified: req.body.isVerified,
                            email: req.body.email
                      }).then(function() {
                          // Update successful.
                                  console.error("3");
                                  mailFunctions.sendCreateHelpMail(req.body.name,req.body.email,body.shortLink)
                                  let date=Math.round(new Date() / 1000);
                                  req.body.createdHids.push({
                                    hid : docRef.id,
                                    title: req.body.title+' '+district,
                                    creationDate: date,
                                    country: country,
                                    city: city
                                  });
                                  console.log(count+' '+req.body.districts.length)
                                  if (count === req.body.districts.length) {
                                    addMultipleCreatehidtoUsers(docRef.id,req.body.uid,req.body.title+' '+district,req.body.createdHids,country,city)
                                  }
                                  if (count === 1) {
                                    console.log('In here')
                                    count = count +1;
                                    return res.status(201).json({
                                      success: true,
                                      shortUrl: body.shortLink
                                      });
                                  }
                                  count = count +1;
                                  return
                                  
                      }).catch(function(error) {
                          // An error happened.
                            //res.status(400).json({ error: error.details });
                            if (count === 1) {
                              res.status(400).json({ error: error.details });
                            } else {
                              
                            }
                      });;
                      
                    } else {
                      //res.status(400).json({ error: error.details });
                      if (count === 1) {
                        return res.status(400).json({ error: error.details });
                      } else {
                        
                      }
                    }
                });
            
            
              } catch (err) {
                console.error(err);
                if (count === 1) {
                  if (err.code === 11000) {
                    return res.status(400).json({ error: 'Database Error' });
                  }
                  res.status(500).json({ error: 'Server error' });
                } else {
                  if (err.code === 11000) {
                    console.error(err)
                  }
                  console.error(err)
                  return
                }
                
              }
    
    
    
    
            } else {
              return res.status(400).json({ error: 'Database Error' });
              console.log(e)
            }
        });

        
      });
    }, 5000);



    
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

function addMultipleCreatehidtoUsers(hid,uid,title,createdHids,country,city) {
  try {
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

