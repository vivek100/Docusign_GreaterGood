const db  = require('../models/Store');
const mailFunctions = require('../models/mailer');

// @desc  Get helps by zip code
// @route GET /api/v1/updates
// @access Public
exports.getUsers = async (req, res, next) => {
  try {
    let cityRef = await db.collection('users');
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
// @desc  Create a user
// @route POST /api/v1/updates
// @access Public
exports.updates = async (req, res, next) => {
  try {
    let docRef = db.collection('helps').doc(req.body.country).collection(req.body.city).doc(req.body.hid);
    let setAda = docRef.update({
      updates: req.body.updates
     }).then(function() {
        console.log("1");
        sendEmailtoEveryone(req.body.hid,req.body.city,req.body.country,req.body.message,req.body.by);
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

async function sendEmailtoEveryone(hid,city,country,message,by) {

  let cityRef = await db.collection('helps').doc(country).collection(city).doc(hid);
  let getDoc = cityRef.get()
  .then(doc => {
    if (!doc.exists) {
      console.log('No such document!, Could not send update email');
    } else {
      console.log('Document data:', doc.data().phoneNumber);
      var bccEmail, count=1,email=doc.data().email,shortUrl=doc.data().shortUrl,title=doc.data().title;
      doc.data().joinedUsers.forEach(function (user) {
        if (count === 1) {
          bccEmail = user.email
        } else {
          bccEmail = bccEmail +','+user.email
        }
        count++;
      });   
      console.log(bccEmail+"this who it is going in bcc to")
      mailFunctions.sendUpdatesMail(email,shortUrl,bccEmail,message,by,title)    
    }
  })
  .catch(err => {
    console.log('Error getting document, could not send update email', err);
  });
}
