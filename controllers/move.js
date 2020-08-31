const db  = require('../models/Store');
var request = require('request');

try {
  let cityRef = db.collection('helps').doc('India').collection('na').doc('SYoEFnr1ofCvmUo2PQrq');
  let getDoc = cityRef.get()
  .then(doc  => {
    if (!doc.exists) {
      console.log('No such document!');
    } else {
          let docRef = db.collection('helps').doc('India').collection('Kolkata').doc('SYoEFnr1ofCvmUo2PQrq');
          docRef.set(doc.data()).then(function() {
              // Update successful.
                      console.log("success");
          }).catch(function(error) {
              // An error happened.
              console.error(error);
          });;
    }
  })
  .catch(err => {
    console.error('Error getting document', err);
  });
} catch (err) {
  console.error(err);
}

