const db  = require('../models/Store');
const mailFunctions = require('../models/mailer');


// @desc  Get all users
// @route GET /api/v1/jusers
// @access Public
exports.getjUsers = async (req, res, next) => {
  try {
    let cityRef = await db.collection('helps').doc(req.query.country).collection(req.query.city).doc(req.query.hid);
    let getDoc = cityRef.get()
    .then(doc => {
      if (!doc.exists) {
        console.log('No such document!');
        res.status(403).json({ error: 'No Data' });
      } else {
        console.log('Document data:', doc.data().phoneNumber);
        return res.status(200).json(doc.data());
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

// @desc  Create a user
// @route POST /api/v1/jusers
// @access Public
exports.updatejUsers = async (req, res, next) => {
  try {
    let docRef = db.collection('helps').doc(req.body.country).collection(req.body.city).doc(req.body.hid);
    let setAda = docRef.update({
      joinedUsers: req.body.joinedUsers
     }).then(function() {
        console.log("1");
        mailFunctions.sendJoinedMail(req.body.name,req.body.email,req.body.shortUrl);
        if (req.body.joinedUsers.length === 2) {
          var message = 'Your very first Volunteer has joined your initiative'
          mailFunctions.sendOwnerJoinedMail(req.body.owneremail,req.body.shortUrl,message,req.body.title)
        }
        if (req.body.joinedUsers.length === 5) {
          var message = 'Congrats! Total 5 Volunteers have joined your initiative'
          mailFunctions.sendOwnerJoinedMail(req.body.owneremail,req.body.shortUrl,message,req.body.title)
        }
        if (req.body.joinedUsers.length === 10) {
          var message = 'Congrats! Total 10 Volunteers have joined your initiative'
          mailFunctions.sendOwnerJoinedMail(req.body.owneremail,req.body.shortUrl,message,req.body.title)
        }
        if (req.body.joinedUsers.length === 25) {
          var message = 'Congrats! Total 25 Volunteers have joined your initiative'
          mailFunctions.sendOwnerJoinedMail(req.body.owneremail,req.body.shortUrl,message,req.body.title)
        }
        if (req.body.joinedUsers.length === 50) {
          var message = 'Congrats! Total 50 Volunteers have joined your initiative'
          mailFunctions.sendOwnerJoinedMail(req.body.owneremail,req.body.shortUrl,message,req.body.title)
        }
        if (req.body.joinedUsers.length === 75) {
          var message = 'Congrats! Total 75 Volunteers have joined your initiative'
          mailFunctions.sendOwnerJoinedMail(req.body.owneremail,req.body.shortUrl,message,req.body.title)
        }
        if (req.body.joinedUsers.length === 100) {
          var message = 'Congrats! Total 100 Volunteers have joined your initiative'
          mailFunctions.sendOwnerJoinedMail(req.body.owneremail,req.body.shortUrl,message,req.body.title)
        }
        if (req.body.joinedUsers.length === 200) {
          var message = 'Congrats! Total 200 Volunteers have joined your initiative'
          mailFunctions.sendOwnerJoinedMail(req.body.owneremail,req.body.shortUrl,message,req.body.title)
        }
        if (req.body.joinedUsers.length === 500) {
          var message = 'Congrats! Total 500 Volunteers have joined your initiative'
          mailFunctions.sendOwnerJoinedMail(req.body.owneremail,req.body.shortUrl,message,req.body.title)
        }
        if (req.body.joinedUsers.length === 1000) {
          var message = 'Congrats! Total 1000 Volunteers have joined your initiative'
          mailFunctions.sendOwnerJoinedMail(req.body.owneremail,req.body.shortUrl,message,req.body.title)
        }
        addJoinedhidtoUsers(req.body.hid,req.body.title,req.body.owneremail,req.body.uid,req.body.title,req.body.joinedHids,req.body.country,req.body.city)
        return res.status(201).json({
          success: true
        });
     }).catch(function(error) {
        console.error(error);
        res.status(400).json({ error: error.details });

    });;
  } catch (err) {
    console.error(err);
    if (err.code === 11000) {
      return res.status(400).json({ error: 'This user already exists' });
    }
    res.status(500).json({ error: 'Server error' });
  }
};

function addJoinedhidtoUsers(hid,hname,hemail,uid,title,joinedHids,country,city) {
  try {
    let FieldValue = Math.round(new Date() / 1000);
    joinedHids.push({
      hid : hid,
      hname: hname,
      hemail: hemail, 
      title: title,
      joininDate: FieldValue,
      country: country,
      city: city
    });
    let docRef = db.collection('users').doc(uid);
    let setAda = docRef.update({
      joinedHids: joinedHids
      
     }).then(function() {
        console.log("1");
     }).catch(function(error) {
        console.error(error);

    });;
  } catch (err) {
    console.error(err);
  }
}