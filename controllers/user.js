const db  = require('../models/Store');
const mailFunctions = require('../models/mailer');




// @desc  Get all users
// @route GET /api/v1/users
// @access Public
exports.getUser = async (req, res, next) => {
  try {
    let cityRef = await db.collection('users').doc(req.query.uid);
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
// @route POST /api/v1/users
// @access Public
exports.updateUser = async (req, res, next) => {
  try {
    let docRef = db.collection('users').doc(req.body.uid);
    let setAda = docRef.update({
       userBio: req.body.userBio,
       phoneNumber: req.body.phoneNumber,
       accountType: req.body.accountType,
       photoURL: req.body.photoURL,
       fprofileUrl: req.body.fprofileUrl
     }).then(function() {
        console.error("1");
        return res.status(201).json({
          success: true
        });
     }).catch(function(error) {
        console.error("2");
        if (error.code === 5) {
          docRef.set({
            userBio: req.body.userBio,
            phoneNumber: req.body.phoneNumber,
            accountType: req.body.accountType,
            photoURL: req.body.photoURL,
            fprofileUrl: req.body.fprofileUrl,
            createdHids:[],
            joinedHids:[],
            isVerified: 'pending',
            name: req.body.name,
            email: req.body.email,
            uid : req.body.uid
          }).then(function() {
              // Update successful.
                console.error("3");
                mailFunctions.sendWelcomeEmail(req.body.name,req.body.email);
                return res.status(201).json({
                success: true
                });
          }).catch(function(error) {
              // An error happened.
                res.status(400).json({ error: error.details });
          });;
        }
    });;
  } catch (err) {
    console.error(err);
    if (err.code === 11000) {
      return res.status(400).json({ error: 'This user already exists' });
    }
    res.status(500).json({ error: 'Server error' });
  }
};
