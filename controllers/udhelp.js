const db  = require('../models/Store');
var request = require('request');



// @desc  delete a help
// @route GET /api/v1/udhelp
// @access Public
exports.deleteHelp = async (req, res, next) => {
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

// @desc  update a help in database 
// @route POST /api/v1/udhelp
// @access Public
exports.updateHelp = async (req, res, next) => {
  try {
    let docRef = db.collection('helps').doc(req.body.country).collection(req.body.oldcity).doc(req.body.hid);
    console.log(req.body.hid)
    docRef.update({
            title: req.body.title,
            plan: req.body.plan,
            helpType: req.body.helpType,
            who: req.body.who,
            suppDetails : req.body.suppDetails,
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
            isUpdated: 'yes'
      }).then(function() {
          // Update successful.
                  console.error("3");
                  if (req.body.oldcity === req.body.city) {
                    return res.status(201).json({
                      success: true,
                      shortUrl: req.body.shortUrl
                      });
                  } else {
                    let cityRef = db.collection('helps').doc('India').collection(req.body.oldcity).doc(req.body.hid);
                    let getDoc = cityRef.get()
                    .then(doc  => {
                      if (!doc.exists) {
                        console.log('No such document!');
                      } else {

                            var linkdata =JSON.stringify({
                                  hid: req.body.hid,
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
                                  
                                  let readdocRef = db.collection('helps').doc('India').collection(req.body.city).doc(req.body.hid);
                                  var updatedata = doc.data()
                                  updatedata.shortUrl = body.shortLink;
                                  readdocRef.set(updatedata).then(function() {
                                      // Update successful now delete orignal entry.
                                      console.log(updatedata)
                                              let deletedocRef = db.collection('helps').doc('India').collection(req.body.oldcity).doc(req.body.hid).delete().then(function() {
                                                updateCreatehidtoUsers(req.body.hid,req.body.uid,req.body.title,req.body.country,req.body.city)
                                                return res.status(201).json({
                                                  success: true,
                                                  shortUrl: body.shortLink
                                                });
                                                console.log("success");
                                              }).catch(function(er) {
                                                // An error happened.
                                                console.error(er);
                                                return res.status(400).json({ er: 'Database Error' });
                                              });;
                                              
                                  }).catch(function(error) {
                                      // An error happened.
                                      console.error(error);
                                      return res.status(400).json({ error: 'Database Error' });
                                  });;
                                  
                                } else {
                                  res.status(400).json({ error: error.details });
                                }
                            });
                    
                      }
                    })
                    .catch(err => {
                      console.error('Error getting document', err);
                      return res.status(400).json({ err: 'Database Error' });
                    });
                  }
                  
      }).catch(function(error) {
          // An error happened.
            res.status(400).json({ error: error.details });
      });;


  } catch (err) {
    console.error(err);
    if (err.code === 11000) {
      return res.status(400).json({ error: 'Database Error' });
    }
    res.status(500).json({ error: 'Server error' });
  }
};

async function updateCreatehidtoUsers(hid,uid,title,country,city) {
  try {
    let cityRef = await db.collection('users').doc(uid);
    let getDoc = cityRef.get()
    .then(doc => {
      if (!doc.exists) {
        console.log('No such document!');
      } else {
        console.log('Document data:', doc.data().phoneNumber);
        var createdHids = doc.data().createdHids
        createdHids.forEach(function(help) {
          if (help.hid === hid) {
            help.title = title,
            help.city = city
          }
        });
        let docRef = db.collection('users').doc(uid);
        let setAda = docRef.update({
    
          createdHids: createdHids
          
         }).then(function() {
            console.log("Updated the city for changed location!");
         }).catch(function(error) {
            console.error(error);
    
        });;
      }
    })
    .catch(err => {
      console.log('Error getting document', err);
    });
  } catch (err) {
    console.error(err);
  }
}
