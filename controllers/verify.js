const db  = require('../models/Store');
const mailFunctions = require('../models/mailer');




// @desc  Verify a user
// @route POST /api/v1/verify
// @access Public
exports.verify = async (req, res, next) => {
  try {
    let docRef = db.collection('users').doc(req.body.uid);
    let setAda = docRef.update({
        isVerified: 'verified'
     }).then( async function() {
        console.error("1");
        let cityRef = await db.collection('users').doc(req.body.uid);
        let getDoc = cityRef.get()
        .then(doc => {
          if (!doc.exists) {
            console.log('No such document!');
            res.status(403).json({ error: 'No Data' });
          } else {
            console.log('Document data:', doc.data().phoneNumber);
            //return res.status(200).json(doc.data());
            if (doc.data().createdHids.length === 0) {
              //add success code on response and send email *********************
              mailFunctions.sendVerifyMail(doc.data().name,doc.data().email)
              return res.status(201).json({
                success: true
              });
            } else {
              doc.data().createdHids.forEach(async function (help) {
                let helpRef = db.collection('helps').doc(help.country).collection(help.city).doc(help.hid);
                let setVeri = await helpRef.update({
                  isVerified: 'verified'
                }).then(function(){
                  console.log(help.hid+' is verified')
                })
                .catch(err => {
                  console.log('Error getting document', err);
                  res.status(400).json({ error: 'Server error' });
                });
              }); 
              //send this in final
              console.log('Sending Success Email for verification');
              mailFunctions.sendVerifyMail(doc.data().name,doc.data().email)
              return res.status(201).json({
                success: true
              });
            }
          }
        })
        .catch(err => {
          console.log('Error getting document', err);
          res.status(400).json({ error: 'Server error' });
        });

     }).catch(function(error) {
        console.error("2");
        res.status(400).json({ error: 'Server error' });
    });;
  } catch (err) {
    console.error(err);
    if (err.code === 11000) {
      return res.status(400).json({ error: 'This user already exists' });
    }
    res.status(500).json({ error: 'Server error' });
  }
};
