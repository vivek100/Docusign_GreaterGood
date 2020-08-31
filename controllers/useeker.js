const db  = require('../models/Store');
var request = require('request');
const mailFunctions = require('../models/mailer');



// @desc  when a volunteer updates a helpseeker
// @route GET /api/v1/useeker
// @access Public
exports.updateSeeker = async (req, res, next) => {
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

// @desc  assign a volunteer to a helpseeker
// @route POST /api/v1/useeker
// @access Public
exports.assignSeeker = async (req, res, next) => {
  try {
      let docRef = db.collection('seekers').doc(req.body.seekCountry).collection(req.body.seekCity).doc(req.body.sid);
      console.log(req.body.hid)
      if (req.body.status === 'Assigned') {
        docRef.update({
          hid : req.body.hid,
          huid : req.body.huid,
          hname : req.body.hname,
          status : 'Assigned'
        }).then(function() {
          var message = 'Helpseeker has been assigned by a NGO!'
          mailFunctions.sendOwnerJoinedMail(req.body.seekCreatorEmail,"http://sevabhava.in",message,req.body.hname+' is going to get in touch with '+req.body.seekName+'. We will let you know as we get more updates.')
          var message = 'Helpseeker has been assigned to you!'
          mailFunctions.sendOwnerJoinedMail(req.body.hemail,"http://sevabhava.in",message,'Please go to My Helps section to find more data on the helpseeker!')
          
          addAssignedsidtoUser(req.body.huid,req.body.sid,req.body.hid,req.body.seekCity,req.body.seekCountry,req.body.seekName,req.body.seekNumber,req.body.seektype,req.body.seekAdd,req.body.seekDetails,req.body.seekCreatorEmail)
          console.log(req.body)
          return res.status(201).json({
            success: true,
            });
        }).catch(function(error) {
            // An error happened.
              res.status(400).json({ error: error.details });
        });;
      } else if (req.body.status === 'UnAssigned') {
        docRef.update({
          hid : 'na',
          huid : 'na',
          hname : 'na',
          status : 'UnAssigned'
        }).then(function() {
          removeAssignedsidtoUser(req.body.huid,req.body.sid,req.body.assignedSids)
          console.log(req.body)
          return res.status(201).json({
            success: true,
            });
        }).catch(function(error) {
            // An error happened.
              res.status(400).json({ error: error.details });
        });;
      } else if (req.body.status === 'InProgress') {
        docRef.update({
          status : 'InProgress'
        }).then(function() {
          updateAssignedsidtoUser(req.body.huid,req.body.sid,req.body.assignedSids,'InProgress')
          console.log(req.body)
          return res.status(201).json({
            success: true,
            });
        }).catch(function(error) {
            // An error happened.
              res.status(400).json({ error: error.details });
        });;
      } else if (req.body.status === 'Complete') {
        docRef.update({
          hid : 'na',
          huid : 'na',
          hname : 'na',
          status : 'Complete'
        }).then(function() {
          var message = 'Helpseeker has been contacted and successfuly helped by a NGO!'
          mailFunctions.sendOwnerJoinedMail(req.body.seekCreatorEmail,"http://sevabhava.in",'We are happy to infrom you that the helpseeker registered by you was successfully contacted and helped.')
          
          removeAssignedsidtoUser(req.body.huid,req.body.sid,req.body.assignedSids)
          console.log(req.body)
          return res.status(201).json({
            success: true,
            });
        }).catch(function(error) {
            // An error happened.
              res.status(400).json({ error: error.details });
        });;
      }
    } catch (err) {
    console.error(err);
    if (err.code === 11000) {
      return res.status(400).json({ error: 'Database Error' });
    }
    res.status(500).json({ error: 'Server error' });
  }
};

async function updateAssignedsidtoUser(uid,sid,assignedSids,status) {
  try {
    assignedSids.forEach(function(seeker, index, object) {
      if (sid === seeker.sid) {
        seeker.status = status
      }
    console.log(JSON.stringify(assignedSids));
    });
    let docRef = db.collection('users').doc(uid);
    let setAda = docRef.update({

      assignedSids: assignedSids
      
     }).then(function() {
        console.log("Updated the status of seeker in the user account!");
     }).catch(function(error) {
        console.error(error);

    });;
    
  } catch (err) {
    console.error(err);
  }
  
}

async function removeAssignedsidtoUser(uid,sid,assignedSids) {
  try {
    assignedSids.forEach(function(seeker, index, object) {
      if (sid === seeker.sid) {
        object.splice(index, 1);
      }
    console.log(JSON.stringify(assignedSids));
    });
    let docRef = db.collection('users').doc(uid);
    let setAda = docRef.update({

      assignedSids: assignedSids
      
     }).then(function() {
        console.log("Removed the seeker from the volunteer!");
     }).catch(function(error) {
        console.error(error);

    });;
    
  } catch (err) {
    console.error(err);
  }
  
}

async function addAssignedsidtoUser(uid,sid,hid,seekCity,seekCountry,seekName,seekNumber,seektype,seekAdd,seekDetails,seekCreatorEmail) {
  try {
    let cityRef = await db.collection('users').doc(uid);
    let getDoc = cityRef.get()
    .then(doc => {
      if (!doc.exists) {
        console.log('No such document!');
      } else {
        console.log('Document data:', doc.data().phoneNumber);
        var assignedSids;
        if (doc.data().assignedSids) {
          //full
          assignedSids = doc.data().assignedSids;
          assignedSids.push({
            seekName: seekName,
            seekType: seektype,
            seekNumber: seekNumber,
            seekCity: seekCity,
            seekCountry: seekCountry,
            seekAdd: seekAdd,
            seekDetails: seekDetails,
            seekCreatorEmail: seekCreatorEmail,
            sid : sid,
            hid : hid,
            status : 'Assigned',
          });
        } else {
          //empty
          assignedSids = [{
            seekName: seekName,
            seektype: seektype,
            seekNumber: seekNumber,
            seekCity: seekCity,
            seekCountry: seekCountry,
            seekAdd: seekAdd,
            seekDetails: seekDetails,
            seekCreatorEmail: seekCreatorEmail,
            sid : sid,
            hid : hid,
            status : 'Assigned',
          }];
        }
        //var createdHids = doc.data().createdHids
        
        let docRef = db.collection('users').doc(uid);
        let setAda = docRef.update({
    
          assignedSids: assignedSids
          
         }).then(function() {
            console.log("Updated the sid for the user who it was assigned to!");
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