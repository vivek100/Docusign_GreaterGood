const db  = require('../models/Store');
var request = require('request');
const mailFunctions = require('../models/mailer');



// @desc  Get seekers by city
// @route GET /api/v1/seeker
// @access Public
exports.getSeeker = async (req, res, next) => {
  try {
    let cityRef = await db.collection('seekers').doc('India').collection(req.query.city);
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

// @desc  Add a seeker in database 
// @route POST /api/v1/ssker
// @access Public
exports.addSeeker = async (req, res, next) => {
  try {
    let docRef = db.collection('seekers').doc(req.body.seekCountry).collection(req.body.seekCity).doc();
    let FieldValue = require('firebase-admin').firestore.FieldValue;
    console.log(docRef.id);
    docRef.set({
          sid: docRef.id,
          cuid : req.body.uid, //uid of person who added
          cname: req.body.uname,
          seekName: req.body.seekName,
          seektype: req.body.seektype,
          seekNumber: req.body.seekNumber,
          seekCity: req.body.seekCity,
          seekCountry: req.body.seekCountry,
          seekAdd: req.body.seekAdd,
          seekDetails: req.body.seekDetails,
          seekCreatorEmail: req.body.seekCreatorEmail,
          creationDate: FieldValue.serverTimestamp(),
          status : 'UnAssigned',
          hid : 'na',
          huid : 'na' , //uid of volunteer who the seeker is assigned to
          hname : 'na' , //name of volunteer
          history : []
    }).then(function() {
        // Update successful.
                console.error("3");
                var message = 'Helpseeker Data Successfully Saved!'
                mailFunctions.sendOwnerJoinedMail(req.body.seekCreatorEmail,"http://sevabhava.in",message,"We will notify our partner NGOs and get back to you ASAP!")
                //mailFunctions.sendCreateHelpMail(req.body.name,req.body.email,body.shortLink)
                if (req.body.uid === "na") {
                  
                } else {
                  addCreatesidtoUsers(req.body.uid,docRef.id,req.body.seekCity,req.body.seekCountry,req.body.seekName,'unassigned')
                }
                
                return res.status(201).json({
                success: true,
                });
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

async function addCreatesidtoUsers(uid,sid,city,country,name,status) {
  try {
    let cityRef = await db.collection('users').doc(uid);
    let getDoc = cityRef.get()
    .then(doc => {
      if (!doc.exists) {
        console.log('No such document!');
      } else {
        console.log('Document data:', doc.data().phoneNumber);
        var addedSids;
        if (doc.data().addedSids) {
          //full
          addedSids = doc.data().addedSids;
          addedSids.push({
            sid : sid,
            city : city,
            country : country,
            name : name,
            status : status,
            history : [{status : 'HelpSeeker data added to database'}]
          });
        } else {
          //empty
          addedSids = [{
            sid : sid,
            city : city,
            country : country,
            name : name,
            status : status,
            history : [{status : 'HelpSeeker data added to database'}]
          }];
        }
        //var createdHids = doc.data().createdHids
        
        let docRef = db.collection('users').doc(uid);
        let setAda = docRef.update({
    
          addedSids: addedSids
          
         }).then(function() {
            console.log("Updated the sid for the user who created it!");
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

