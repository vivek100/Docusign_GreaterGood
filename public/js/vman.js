//Sending new helpseeker data to database
$(function () {
  $('#seekerdata').on('submit', async function (e) {
    $('#loader').show();
    e.preventDefault();
    const seekName = $("#seek1");
    const seektype = $('#seektype');
    const seekNumber = $('#seek2');
    const seekCity = $('#seek3');
    const seekAdd = $('#seek4');
    const seekDetails = $('#seek5');
    const seekCreatorEmail = $('#seek6');
    console.log('seekDetails')
    var uid='na',uname='na';
    if (firebase.auth().currentUser) {
       uid = firebase.auth().currentUser.uid;
       uname = firebase.auth().currentUser.displayName;
    } else {
       uid = "na";
       uname = "na";
    }

    const sendBody = {
      uid : uid,
      uname : uname,
      seekName : seekName.val(),
      seektype: seektype.val(),
      seekNumber: seekNumber.val(),
      seekCity : seekCity.val(),
      seekCountry : 'India',
      seekAdd : seekAdd.val(),
      seekDetails : seekDetails.val(),
      seekCreatorEmail: seekCreatorEmail.val()
    };

    console.log(sendBody)
    try {
      const res = await fetch('/api/v1/seeker', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(sendBody)
      });
  
      if (res.status === 400) {
        $('#loader').hide();
        showError('Database error. Please try again!');
        return;
      }
      if (res.status === 500) {
        $('#loader').hide();
        showError('Server Error!');
        return;
      }
      if (res.status === 201) {
        var datar = await res.json();
        $('#loader').hide();
          console.log( datar.shortUrl);
          var messageString = "If you know someone who needs help add their data on Sevabhava.in";
          var message = "Data succesfully registered!"
          showHelpMessage(message,messageString," http://sevabhava.in","Help on Sevabhava.in");
          return;

        
        return;
      }
      
    } catch (err) {
      $('#loader').hide();
      showError(err);
      return;
    }

   });
});

//getdata of help seekers in a district

async function getSeekerData(city){

  try {
    const res2 = await fetch('/api/v1/seeker'+'?city='+city)
    window.sdata = await res2.json();
    if (res2.status === 200) {
      console.log("Got Map data"+sdata)
      $('#Searchtype').show();
      // Create markers.
      var count = 0;
      window.refdata = new Array(sdata.length);
      $('#loader').hide();
      console.log(sdata)
      return sdata;
    }
    if (res2.status === 403) {
      $('#loader').hide();
      showError('No Help Seekers registered in this District yet, be the first one to do it.');
      return;

    }
    if (res2.status === 400) {
      $('#loader').hide();
      showError('Database Error');
      return;
    }
    if (res2.status === 500) {
      $('#loader').hide();
      showError('Server Error!');
      return;
    }
  } catch (err) {
    $('#loader').hide();
    showError(err);
    return;
  }

}