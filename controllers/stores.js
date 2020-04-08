const db  = require('../models/store');



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
    let docRef = db.collection('helps').doc(req.body.country).collection(req.body.zipCode).doc();
    console.log(docRef.id);
    docRef.set({
          hid: docRef.id,
          uid : req.body.uid,
          title: req.body.title,
          desc: req.body.desc,
          phone: req.body.phone,
          url: req.body.url,
          formatted_address: req.body.formatted_address,
          place_id: req.body.place_id,
          geometry: req.body.geometry,
          city: req.body.city,
          state: req.body.state,
          country: req.body.country,
          zipCode: req.body.zipCode,
          status: "active"
    }).then(function() {
        // Update successful.
          console.error("3");
          return res.status(201).json({
          success: true
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
