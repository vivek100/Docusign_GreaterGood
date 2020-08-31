
/**
 * FirebaseUI initialization to be used in a Single Page application context.
 */

/**
 * @return {!Object} The FirebaseUI config.
 */
function getUiConfig() {
  return {
    'callbacks': {
      // Called when the user has been successfully signed in.
      'signInSuccessWithAuthResult': function(authResult, redirectUrl) {
        if (authResult.user) {
          handleSignedInUser(authResult.user);
        }
        if (authResult.additionalUserInfo) {
          //document.getElementById('is-new-user').textContent =
          //    authResult.additionalUserInfo.isNewUser ?
          //    'New User' : 'Existing User';
        }
        // Do not redirect.
        return false;
      }
    },
    // Opens IDP Providers sign-in flow in a popup.
    'signInFlow': 'popup',
    'signInOptions': [
      // TODO(developer): Remove the providers you don't need for your app.
      {
        provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        // Required to enable this provider in One-Tap Sign-up.
        authMethod: 'https://accounts.google.com',
        // Required to enable ID token credentials for this provider.
        clientId: CLIENT_ID
      },
      {
        provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
        // Whether the display name should be displayed in Sign Up page.
        requireDisplayName: true,
      }
    ],
    // Terms of service url.
    'tosUrl': 'https://www.google.com',
    // Privacy policy url.
    'privacyPolicyUrl': 'https://www.google.com',
    'credentialHelper': CLIENT_ID && CLIENT_ID != 'YOUR_OAUTH_CLIENT_ID' ?
        firebaseui.auth.CredentialHelper.GOOGLE_YOLO :
        firebaseui.auth.CredentialHelper.ACCOUNT_CHOOSER_COM
  };
}

// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());
// Disable auto-sign in.
ui.disableAutoSignIn();


/**
 * @return {string} The URL of the FirebaseUI standalone widget.
 */
function getWidgetUrl() {
  return '/widget#recaptcha=' + getRecaptchaMode() + '&emailSignInMethod=' +
      getEmailSignInMethod();
}


/**
 * Redirects to the FirebaseUI widget.
 */
var signInWithRedirect = function() {
  window.location.assign(getWidgetUrl());
};


/**
 * Open a popup with the FirebaseUI widget.
 */
var signInWithPopup = function() {
  window.open(getWidgetUrl(), 'Sign In', 'width=985,height=735');
};


/**
 * Displays the UI for a signed in user.
 * @param {!firebase.User} user
 */
var handleSignedInUser = function(user) {
  $(document).ready(function() {
    $('#loader').show();
    $('#welcomeClose').click();
    $('#signout').css("display", "block");
    $('.mobile-nav,.-d-lg-none').children('ul').children(".get-started").children('#signout').css("display", "block");
    $('#profile').css("display", "block");
    $('.mobile-nav,.-d-lg-none').children('ul').children(".get-started").children('#profile').css("display", "block");
    $('#profile').text(user.displayName+"'s Profile");
    $('.mobile-nav,.-d-lg-none').children('ul').children(".get-started").children('#profile').text(user.displayName+"'s Profile");
    $('#form104').val(user.displayName.toUpperCase());
    $('#loginClose').click();
    $('#signin').css("display", "none");
    $('.mobile-nav,.-d-lg-none').children('ul').children(".get-started").children('#signin').css("display", "none");
    $('#gallery').css("display", "block");
    $('#testimonials').css("display", "block");
    $('#helps').css("display", "block");
    $('.mobile-nav,.-d-lg-none').children('ul').children(".something").children('#helps').css("display", "block");
    
    $('#seek6').val(user.email);
    if(user.emailVerified){
      $('#verify').css("color", "green");
      $('#userdata').css("display", "block");
      $('#saveuser').removeClass('disabled');

      $('#errorVerify').css("display", "none");
      if (user.photoURL === null) {
        $('#form12').attr("required", false);
        $('#imageFile').css("display", "block");
        $('#imageURL').css("display", "none");
        console.log('did it run?')
      }
      getData();
    }else{
      $('#verify').css("color", "red");
      $('#verify').text("Email Not Verified!");
      $('#verifyButton').removeClass('disabled');
      $('#saveuser').addClass('disabled');
      $('#verifyButton').removeClass('btn-grey');
      $('#verifyButton').addClass('btn-green');
      if (user.photoURL === null) {
        $('#form12').attr("required", false);
        $('#imageFile').css("display", "block");
        $('#imageURL').css("display", "none");
        
        console.log('did it run?')
      }
      $('#loader').hide();
      sendEmailVerification();
      
    }
    if(user.photoURL){

      $("#profilepic").attr("src",user.photoURL);
      $("#form12").val(user.photoURL);
      $('#form12').attr("required", true);
      $('#customFile').attr("required", false);
      console.log(user.photoURL);
      console.log("worked");
    }else{
      console.log(user.photoURL);
      console.log("Not worked");
    }
    if(user.phoneNumber === null){
      
    }else{
    $("#form13").val(user.phoneNumber);
    }

  });
  
  $('#loader').hide();
  if (window.location.search.substring(1).split('=')[0] === "event"){
    if (window.location.search.substring(1).split('=')[1] === "signing_complete") {

      shownormalSuccess('Digital signed certificate successfully mailed to the volunteer!');
      
    }
  }

  //if (user.photoURL) {
  //  var photoURL = user.photoURL;
    // Append size to the photo URL for Google hosted images to avoid requesting
    // the image with its original resolution (using more bandwidth than needed)
    // when it is going to be presented in smaller size.
  //  if ((photoURL.indexOf('googleusercontent.com') != -1) ||
  //      (photoURL.indexOf('ggpht.com') != -1)) {
  //    photoURL = photoURL + '?sz=' +
  //        document.getElementById('photo').clientHeight;
  //  }
  //  document.getElementById('photo').src = photoURL;
  //  document.getElementById('photo').style.display = 'block';
  //} else {
  //  document.getElementById('photo').style.display = 'none';
  //}
};

$('#customFile').change(function() {
  $('#loader').show();
  $('.custom-file-label').text($('#customFile').val());
  var file =document.getElementById('customFile').files[0];
  console.log(file);
  var storageRef = firebase.storage().ref();
  var profileImagesRef = storageRef.child('images/'+firebase.auth().currentUser.uid+'.'+$('#customFile').val().replace(/^.*\./, ''));
  profileImagesRef.put(file).then(function(snapshot) {
    console.log('Uploaded a blob or file!');
    storageRef.child('images/'+firebase.auth().currentUser.uid+'.jpg').getDownloadURL().then(function(url) {
      // `url` is the download URL for 'images/stars.jpg'
    
      // This can be downloaded directly:
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'blob';
      xhr.onload = function(event) {
        var blob = xhr.response;
      };
      xhr.open('GET', url);
      xhr.send();
    
      // Or inserted into an <img> element:
      $("#profilepic").attr("src",url);
      firebase.auth().currentUser.updateProfile({
        photoURL: url
      }).then(function() {
        console.log(" url updated by file upload");
      }).catch(function(error) {
        // An error happened.
        console.log("error url updated");
      });
    }).catch(function(error) {
      // Handle any errors
      console.log(error)
    });
  });
  $('#loader').hide();
});
//  add user to the joined user list of a help
async function postJusers(){

  if (firebase.auth().currentUser) {

    if (typeof joinedHids == 'undefined') {
      showError('Please update your Bio and Phone number, before this action');
      $('.modal').modal('hide');
      return;
    }
    $('#loader').show();
    var State = $("#mJoin").data('jstate');
    var Country = $("#mJoin").data('jcountry');
    var City = $("#mJoin").data('jcity');
    var hid = $("#mJoin").data('jhid');
    var phone = $("#mJoin").data('jphone');
    var title = $("#mJoin").data('jtitle');
    var url = $("#mJoin").data('jshorturl');
    var owneremail = $("#mJoin").data('jowneremail');
    var joinedUsers = JSON.parse($("#mJoin").data('jjoinedusers').replace(/'/g,"\""));
    var currentUid = firebase.auth().currentUser.uid;
    var isJoined = false;
    joinedUsers.forEach(function(value) {
      if (value.uid === currentUid) {
        $("#mJoin").addClass("disabled");
        $("#mJoin").text("Already Joined");
        isJoined = true;
        return;
      } else {
        
      }
    });
    if (isJoined === true) {
      return;
    }
    joinedUsers.push({
      uid : firebase.auth().currentUser.uid,
      name: firebase.auth().currentUser.displayName,
      email: firebase.auth().currentUser.email,
      phone: phone,
      photoURL: firebase.auth().currentUser.photoURL
    });
    console.log("Join user called.");
    var sendBody = {
      country : Country,
      city : City,
      hid : hid,
      title: title,
      uid : firebase.auth().currentUser.uid,
      joinedUsers : joinedUsers,
      joinedHids : joinedHids,
      shortUrl : url,
      name: firebase.auth().currentUser.displayName,
      email: firebase.auth().currentUser.email,
      owneremail: owneremail
    }
    try {
      const res = await fetch('/api/v1/jusers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(sendBody)
      });
      if (res.status === 201) {
        var message = "Successfully joined the initiative!";
        var messageString = "I have joined the initiative  to:\n"+title+".\nPlease support me by clicking the link below to find more information.\n";
        $('#loader').hide();
        showHelpMessage(message,messageString,url,title);
        return;
        
      }

      if (res.status === 400) {
        $('#loader').hide();
        showError('Database error. Please try again!');
      }
      if (res.status === 500) {
        $('#loader').hide();
        showError('Server Error!');
      }
      $('#loader').hide();
      showSuccess('Profile Updated!');
    } catch (err) {
      $('#loader').hide();
      showError(err);
      return;
    }
    
  } else {
    
    $("#elegantModalForm").modal('show');
  }

}

//  get data of all the joined users of a particular help
async function getJusers(Country,City,hid){
  console.log("Get data called.")
  try {
    const res2 = await fetch('/api/v1/jusers'+'?country='+Country+'&city='+City+'&hid='+hid)
    const data = await res2.json();
    if (res2.status === 200) {
      console.log("Get call for jsuers"+data);
      return data;
      
    }
    if (res2.status === 403) {
      showError('Database Error');

    }
    if (res2.status === 400) {
      showError('Database Error');
      return;
    }
    if (res2.status === 500) {
      showError('Server Error!');
      return;
    }
  } catch (err) {
    showError(err);
    return;
  }
}

async function getData(){

  console.log("Get data called.")
  try {
    const res2 = await fetch('/api/v1/user'+'?uid='+firebase.auth().currentUser.uid)
    const data = await res2.json();
    if (res2.status === 200) {
      console.log(data)
      $('#dataVerify').css("display", "none");
      $('#bioLabel').css("transform", "translateY(-14px) scale(0.8)");
      $('#fbProfileLabel').css("transform", "translateY(-14px) scale(0.8)");
      $('#userdata').css("display", "block");
      $('#form10').val(data.userBio);
      $('#form13').val(data.phoneNumber);
      $('#accountType').val(data.accountType);
      $('#mJoin').attr("data-jphone",data.phoneNumber);
      $('#form16').val(data.fprofileUrl);
      accountType = data.accountType;
      createdHids = data.createdHids;
      joinedHids = data.joinedHids;
      isVerified = data.isVerified
      createMyHelpSection(createdHids,joinedHids,data.assignedSids);
      if (data.accountType === "personal") {
        $('#forform104').text("Your Name*");
        $('#bioLabel').text("Your Bio*");
        $('#form104').attr("readonly", true);
      } else {
        $('#forform104').text("Your Org Name*");
        $('#bioLabel').text("Org Overview*");
        $('#form104').attr("readonly", false);
      }
      $('#loader').hide();
    }
    if (res2.status === 403) {
      $('#userdata').css("display", "none");
      $('#loader').hide();
      showError('Please update your Bio and Phone number');

    }
    if (res2.status === 400) {
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

/**
 * Update my help section with data
 */
function createMyHelpSection(chelps,jhelps,assignedSids) {
  $('#caccordionEx').empty();
  $('#jaccordionEx').empty();
  var counts = 1;
  var counts2 = 1;
  chelps.forEach(function(help) {
    
      var dataString = '<div class="card">'+
      '<div class="card-header" role="tab" id="headingOne'+counts+'">'+
        '<a data-toggle="collapse" data-parent="#caccordionEx" href="#ccollapseOne'+counts+'" aria-expanded="false"'+
         ' aria-controls="ccollapseOne'+counts+'">'+
          '<h6 class="mb-0">'+
            '#'+counts+' '+help.title+'<i class="fas fa-angle-down rotate-icon ml-2"></i>'+
          '</h6>'+
        '</a>'+
      '</div>'+
      '<div id="ccollapseOne'+counts+'" class="collapse"  data-count="'+counts+'" data-read="false" data-hid="'+help.hid+'" data-city="'+help.city+'" data-country="'+help.country+'" role="tabpanel" aria-labelledby="headingOne'+counts+'" data-parent="#caccordionEx">'+
        '<div class="card-body">'+
        '<div class="row">'+
        '<div class="col-lg-12 d-lg-flex flex-lg-column content-center align-items-stretch">'+
        '<h5 class="font-weight-bold">Contact info of interested users:</h5>'+
        '<div class="card">'+
        '<div class="card-body">'+
        '<table id="dtjoinedUser'+counts+'" class="table table-responsive table-striped table-bordered" cellspacing="0" width="100%">'+
          '<thead>'+
            '<tr>'+
              '<th class="th-sm">Name'+
              '</th>'+
              '<th class="th-sm">Email'+
              '</th>'+
              '<th class="th-sm">Phone'+
              '</th>'+
              '<th class="th-sm">Registration Form'+
              '</th>'+
              '<th class="th-sm">Volunteer Certificate'+
              '</th>'+
            '</tr>'+
          '</thead>'+
          '<tbody id="dtjoinedUserBody'+counts+'">'+
          '</tbody>'+
        '</table>'+  
        '</div>'+
        '</div>'+
        '</div>'+

        '</div>'+
        '<div class="row">'+

        '<div class="col-lg-12 d-lg-flex mt-4 flex-lg-column content-center align-items-stretch">'+

        '<h5 class="font-weight-bold">Updates sent by you:</h5>'+
        '<div class="card">'+
          '<div class="card-body" id="updatebody'+counts+'" style="padding: .7rem .7rem;">'+
          '</div>'+
          '<div class="card-footer" style="padding: .5rem .5rem;">'+
            '<div class="form-group mt-0 mb-0">'+
              '<textarea class="form-control" id="quickReplyFormComment'+counts+'" rows="2"></textarea>'+
              '<div class="text-center my-0">'+
                '<button class="btn btn-info btn-sm send" id="sendUpdates'+counts+'" type="submit">Send updates</button>'+
              '</div>'+
            '</div>'+
            '</div>'+
         '</div>'+
        '</div>'+
        '</div>'+
        '<hr>'+
        '<div class="row mt-2">'+
        '<div class="col-lg-3 d-lg-flex flex-lg-column content-center align-items-stretch">'+
          '<a  class="btn btn-primary disabled update" type="button"  id="updateButton'+counts+'" >Edit Initiative</a>'+
        '</div>'+
        '</div>'+
        '<hr>'+
        '<div class="row">'+
          '<div class="col-lg-12 d-lg-flex flex-lg-column content-center align-items-stretch">'+
            '<h5 class="font-weight-bold mt-2">People who need help in your area:</h5>'+
            '<table id="dtseekers'+counts+'" class="table table-responsive table-striped table-bordered" cellspacing="0" width="100%">'+
              '<thead>'+
                '<tr>'+
                  '<th class="th-sm">Name'+
                  '</th>'+
                  '<th class="th-sm">Phone'+
                  '</th>'+
                  '<th class="th-sm">Help Type'+
                  '</th>'+
                  '<th class="th-sm">Address'+
                  '</th>'+
                  '<th class="th-sm">Help details'+
                  '</th>'+
                  '<th class="th-sm">Looked By'+
                  '</th>'+
                  '<th class="th-sm">Status'+
                  '</th>'+
                  '<th class="th-sm" style="min-width: 12rem;">Assigned to'+
                  '</th>'+
                  '<th class="th-sm">Update'+
                  '</th>'+
                '</tr>'+
              '</thead>'+
              '<tbody id="dtseekersBody'+counts+'">'+
              '</tbody>'+
            '</table>'+  
          '<div>'+
        '<div>'+
        '</div>'+
      '</div>'+
      '</div>';
    $("#caccordionEx").append(dataString);
    counts++;
  });

  jhelps.forEach(function(help) {
      

      var dataString = '<div class="card">'+
      '<div class="card-header" role="tab" id="headingOne'+counts2+'">'+
        '<a data-toggle="collapse" data-parent="#jaccordionEx" href="#collapseOne'+counts2+'" aria-expanded="false"'+
         ' aria-controls="collapseOne'+counts2+'">'+
          '<h6 class="mb-0">'+
            '#'+counts2+' '+help.title+'<i class="fas fa-angle-down rotate-icon"></i>'+
          '</h6>'+
        '</a>'+
      '</div>'+
      '<div id="collapseOne'+counts2+'" class="collapse" data-count="'+counts2+'" data-read="false" data-hid="'+help.hid+'" data-city="'+help.city+'" data-country="'+help.country+'" role="tabpanel" aria-labelledby="headingOne'+counts2+'" data-parent="#jaccordionEx">'+
        '<div class="card-body" id="addAssignedSeekers'+counts2+'">'+
        '<h5 class="font-weight-bold">Updates on the initiative:</h5>'+
        '<div class="card">'+
          '<div class="card-body" id="jupdatebody'+counts2+'" style="padding: .7rem .7rem;">'+
          '</div>'+
         '</div>'+
        '</div>'+
      '</div>'+
      '</div>';
    
    $("#jaccordionEx").append(dataString);
    var assginedSeekersString = ""
      if (assignedSids) {
        console.log('adding assigned ids');
        assginedSeekersString = '<div class="row">'+
              '<div class="col-lg-12 d-lg-flex flex-lg-column content-center align-items-stretch">'+
                '<h5 class="font-weight-bold mt-3">People who need help in your area:</h5>'+
                '<table id="Assignedseekers'+counts2+'" class="table table-responsive table-striped table-bordered" cellspacing="0" width="100%">'+
                  '<thead>'+
                    '<tr>'+
                      '<th class="th-sm">Name'+
                      '</th>'+
                      '<th class="th-sm">Phone'+
                      '</th>'+
                      '<th class="th-sm">Help Type'+
                      '</th>'+
                      '<th class="th-sm">Address'+
                      '</th>'+
                      '<th class="th-sm">Help details'+
                      '</th>'+
                      '<th class="th-sm">Current Status'+
                      '</th>'+
                      '<th class="th-sm">New Status'+
                      '</th>'+
                      '<th class="th-sm" style="min-width: 12rem;">Update'+
                      '</th>'+
                    '</tr>'+
                  '</thead>'+
                  '<tbody id="AssignedseekersBody'+counts2+'">'+
                  '</tbody>'+
                '</table>'+  
              '<div>'+
            '<div>';
        $('#addAssignedSeekers'+counts2).append(assginedSeekersString);
        var scount = 1;          
        assignedSids.forEach(function(seeker){
          console.log(seeker.hid+'||'+help);
          var statusString;
          if (help.hid === seeker.hid) {
            if (seeker.status === 'Assigned') {
              statusString = '<td><span class="badge badge-default">'+seeker.status+'</span></td>';
            }
            if (seeker.status === 'InProgress') {
              statusString = '<td><span class="badge badge-warning">'+seeker.status+'</span></td>';
            }
            var tableString = '<tr>'+
            '<td>'+seeker.seekName+'</td>'+
            '<td>'+seeker.seekNumber+'</td>'+
            '<td>'+seeker.seektype+'</td>'+
            '<td>'+seeker.seekAdd+'</td>'+
            '<td>'+seeker.seekDetails+'</td>'+
            statusString+
            '<td><select id="newstatus'+counts2.toString()+scount+'" data-counts="'+counts2.toString()+scount+'" style="margin-bottom: 1em" class="browser-default custom-select">'+
            '<option hidden disabled selected value>Update Status</option>'+
            '<option value="UnAssigned">UnAssigned</option>'+
            '<option value="InProgress">InProgress</option>'+
            '<option value="Complete">Complete</option>'+
            '</select></td>'+
            '<td><a class="btn btn-primary btn-sm disabled assignUpdate" type="button" data-seekNumber="'+seeker.seekNumber+'" data-seekName="'+seeker.seekName+'" data-seekDetails="'+seeker.seekDetails+'" data-seekAdd="'+seeker.seekAdd+'" data-seektype="'+seeker.seekType+'" data-counts="'+counts2.toString()+scount+'" data-hid="'+seeker.hid+'" data-hname="'+help.hname+'" data-hemail="'+help.hemail+'" data-sid="'+seeker.sid+'" data-seekCity="'+seeker.seekCity+'" data-seekCountry="'+seeker.seekCountry+'" data-seekCreatorEmail="'+seeker.seekCreatorEmail+'" id="assignupdateButton'+counts2+scount.toString()+'" >Save</a></td>'+
            '</tr>';
            $('#AssignedseekersBody'+counts2).append(tableString);
            $('#newstatus'+counts2.toString()+scount).on('change', function(e2) {
              console.log("this.value");
              $('#assignupdateButton'+$(e2.target).data('counts')).removeClass('disabled');
              $('#assignupdateButton'+$(e2.target).data('counts')).attr("data-newstatus",this.value);
            });
            $('#assignupdateButton'+counts2.toString()+scount).on('click',async function(e3) {
              console.log($('#assignupdateButton'+$(e3.target).data('counts')).attr("data-hname"));
                $('#loader').show();
                e3.preventDefault();
                const sendBody = {
                  seekCity : $('#assignupdateButton'+$(e3.target).data('counts')).attr("data-seekcity"),
                  seekCountry : $('#assignupdateButton'+$(e3.target).data('counts')).attr("data-seekcountry"),
                  seekCreatorEmail: $('#assignupdateButton'+$(e3.target).data('counts')).attr("data-seekcreatoremail"),
                  sid: $('#assignupdateButton'+$(e3.target).data('counts')).attr("data-sid"),
                  hid: $('#assignupdateButton'+$(e3.target).data('counts')).attr("data-hid"),
                  huid: firebase.auth().currentUser.uid,
                  status: $('#assignupdateButton'+$(e3.target).data('counts')).attr("data-newstatus"),
                  assignedSids: assignedSids
                };
    
                console.log(sendBody)
                try {
                  const res = await fetch('/api/v1/useeker', {
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
                    const sendBody = {
                      ccname : $('#assignupdateButton'+$(e3.target).data('counts')).attr("data-hname"),
                      ccemail : $('#assignupdateButton'+$(e3.target).data('counts')).attr("data-hemail"),
                      name : firebase.auth().currentUser.displayName,
                      email : firebase.auth().currentUser.email,
                      helptype : $('#assignupdateButton'+$(e3.target).data('counts')).attr("data-seektype"),
                      helpdetails: $('#assignupdateButton'+$(e3.target).data('counts')).attr("data-seekDetails"),
                    }
                    console.log(sendBody)
  
  
                      try {
                        const res = await fetch('/api/v1/signwork', {
                          method: 'POST',
                          mode: 'cors',
                          headers: {
                            'Content-Type': 'application/json',
                            'Access-Control-Allow-Origin': '*',
                            'Access-Control-Allow-Headers': 'Content-Type'
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
                          
                            console.log( datar);
                            window.location.assign(datar.url)
                            $('#loader').hide();
                            showSuccess('Email sent for digital singature!');
                            return;
            
                          
                          return;
                        }
                        
                      } catch (err) {
                        $('#loader').hide();
                        console.log(res)
                        showError(err);
                        return;
                      }






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
            scount++;
          }

        });
      } else {
        
      }
    $('#Assignedseekers'+counts).DataTable();
    counts2++;
  });
  
} 

jQuery(document).ready( function( $ ) {

  $('#jaccordionEx').on('shown.bs.collapse', async function(e) {
    console.log(this.id);
    console.log($('#collapseOne'+$(e.target).data('count')).attr('data-read'));
    var country = $(e.target).data('country');
    var city =$(e.target).data('city');
    var hid =$(e.target).data('hid');
    if ($('#collapseOne'+$(e.target).data('count')).attr('data-read') === 'false') {
      $('#collapseOne'+$(e.target).data('count')).attr("data-read",true);
      data = await getJusers(country,city,hid);
      var updateString1= '<h6 style="margin-top:0.2rem;margin-bottom:0" class="card-text">Started on: '+(new Date(data.creationDate._seconds*1000)).toString().substring(4, 15)+'</h6>';
      
      $("#jupdatebody"+$(e.target).data('count')).append(updateString1);
      if (data.updates.length > 0) {
        data.updates.forEach(function(updates){
          var updateString2 = '<hr style="margin-top:0.8rem;margin-bottom:0.4rem">'+
          '<h7 style="color:#5777ba"><span class="font-weight-bold" >#'+($(e.target).data('count')).toString()+' '+updates.name+':</span> <span style="font-size:60%"><i class="fas fa-clock"></i> '+new Date(updates.date).toString().substring(4, 15)+'</span></h7>'+
          '<h6 style="margin-top:0.2rem;margin-bottom:0" class="card-text">'+updates.message+'</h6>';
          
          $("#jupdatebody"+$(e.target).data('count')).append(updateString2);
        });
      }
    }
  });

  $('#caccordionEx').on('shown.bs.collapse', async function(e) {
    console.log(this.id);
    console.log($('#ccollapseOne'+$(e.target).data('count')).attr('data-read'));
    var country = $(e.target).data('country');
    var city =$(e.target).data('city');
    var hid =$(e.target).data('hid');
    if ($('#ccollapseOne'+$(e.target).data('count')).attr('data-read') === 'false') {
      $('#ccollapseOne'+$(e.target).data('count')).attr("data-read",true);
      data = await getJusers(country,city,hid);
      countjuser = 1
      data.joinedUsers.forEach(function(user){
        var tablestring ='<tr>'+
        '<td>'+user.name+'</td>'+
        '<td>'+user.email+'</td>'+
        '<td>'+user.phone+'</td>'+
        '<td><button class="badge badge-pill badge-warning" id="joinedUserRegistration'+countjuser.toString()+'" data-name="'+user.name+'" data-email="'+user.email+'"> Ask volunteer to digitally sign the form !</button></td>'+
        '<td><button class="badge badge-pill badge-success" id="joinedUserCertificate'+countjuser.toString()+'" data-name="'+user.name+'" data-email="'+user.email+'"> Digitally sign the Certificate !</button></td>'+
        '</tr>'
        $("#dtjoinedUserBody"+$(e.target).data('count')).append(tablestring);
        $("#joinedUserRegistration"+countjuser.toString()).on('click',async function(e5) {
          $('#loader').show();
          console.log($(e5.target).id)
          e5.preventDefault();
          const sendBody = {
            name : $(e5.target).data('name'),
            email : $(e5.target).data('email'),
            ccname : firebase.auth().currentUser.displayName,
            ccemail : firebase.auth().currentUser.email
          }
          console.log(sendBody)
          try {
            const res = await fetch('/api/v1/registration', {
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
                console.log( datar);
                showSuccess('Email sent for digital singature!');
                return;

              
              return;
            }
            
          } catch (err) {
            $('#loader').hide();
            showError(err);
            return;
          }
        })
        $("#joinedUserCertificate"+countjuser.toString()).on('click',async function(e5) {
          $('#loader').show();
          console.log($(e5.target).id)
          e5.preventDefault();
          const sendBody = {
            ccname : $(e5.target).data('name'),
            ccemail : $(e5.target).data('email'),
            name : firebase.auth().currentUser.displayName,
            email : firebase.auth().currentUser.email,
            uid : firebase.auth().currentUser.uid
          }
          console.log(sendBody)
          try {
            const res = await fetch('/api/v1/certi', {
              method: 'POST',
              mode: 'cors',
              headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type'
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
              
                console.log( datar);
                window.location.assign(datar.url)
                $('#loader').hide();
                showSuccess('Email sent for digital singature!');
                return;

              
              return;
            }
            
          } catch (err) {
            $('#loader').hide();
            console.log(res)
            showError(err);
            return;
          }
        })
        countjuser = countjuser + 1
      });
      $('#dtjoinedUser'+$(e.target).data('count')).DataTable();
      $('.dataTables_length').addClass('bs-select');
      //add code for showing the seekers list here
      sdata = await getSeekerData(city);
      if (sdata) {
        console.log(sdata);
        
        var scount = 1;
        sdata.forEach(function(seeker){
          var volunteerString = '<option value="" selected disabled hidden>Assign Volunteer</option>';
          data.joinedUsers.forEach(function(user){
            if (user.uid !== firebase.auth().currentUser.uid) {
              volunteerString = volunteerString + '<option value="'+user.uid+','+user.email+'" >'+user.name+'</option>';
            }
            
          });
          volunteerString = volunteerString + '</select>';
          volunteerString = '<select id="volunteer'+$(e.target).data('count')+scount.toString()+'" data-counts="'+$(e.target).data('count')+scount.toString()+'" placeholder="Assign Volunteer">'+volunteerString
          var statusString,lookedbyString;
          if (seeker.hid === 'na') {
            lookedbyString = '<span class="badge badge-danger">No One</span>';
          }else if (seeker.hid === hid) {
            lookedbyString = '<span class="badge badge-success">You</span>';
          }else {
            lookedbyString = '<span class="badge badge-warning">Other</span>';
          }
          if (seeker.status === 'UnAssigned') {
            statusString = '<td><span class="badge badge-danger">'+seeker.status+'</span></td>';
          }
          if (seeker.status === 'Assigned') {
            statusString = '<td><span class="badge badge-default">'+seeker.status+'</span></td>';
            volunteerString =seeker.hname;
          }
          if (seeker.status === 'InProgress') {
            statusString = '<td><span class="badge badge-warning">'+seeker.status+'</span></td>';
            volunteerString =seeker.hname;
          }
          if (seeker.status === 'Complete') {
            statusString = '<td><span class="badge badge-success">'+seeker.status+'</span></td>';
          }
          var tablestring ='<tr>'+
          '<td>'+seeker.seekName+'</td>'+
          '<td>'+seeker.seekNumber+'</td>'+
          '<td>'+seeker.seektype+'</td>'+
          '<td>'+seeker.seekAdd+'</td>'+
          '<td>'+seeker.seekDetails+'</td>'+
          '<td>'+lookedbyString+'</td>'+
          statusString+
          '<td>'+volunteerString+'</td>'+
          '<td><a class="btn btn-primary btn-sm disabled volunteerUpdate" type="button" data-seekNumber="'+seeker.seekNumber+'" data-seekName="'+seeker.seekName+'" data-seekDetails="'+seeker.seekDetails+'" data-seekAdd="'+seeker.seekAdd+'" data-seektype="'+seeker.seektype+'" data-counts="'+$(e.target).data('count')+scount.toString()+'" data-hid="'+hid+'" data-sid="'+seeker.sid+'" data-seekCity="'+seeker.seekCity+'" data-seekCountry="'+seeker.seekCountry+'" data-seekCreatorEmail="'+seeker.seekCreatorEmail+'" id="volunteerupdateButton'+$(e.target).data('count')+scount.toString()+'" >Save</a></td>'+
          '</tr>'
          $("#dtseekersBody"+$(e.target).data('count')).append(tablestring);
          if (seeker.status === 'Assigned') {
            
          } else {
            $('#volunteer'+$(e.target).data('count')+scount.toString()).selectize({
              sortField: 'text'
            });
            $('#volunteer'+$(e.target).data('count')+scount.toString()).on('change', function(e2) {
              $('#volunteerupdateButton'+$(e2.target).data('counts')).removeClass('disabled');
              var volunteerData = this.value.split(',')
              $('#volunteerupdateButton'+$(e2.target).data('counts')).attr("data-huid",volunteerData[0]);
              var hname = $('#volunteer'+$(e2.target).data('counts').toString()+' option:selected').html();
              console.log(volunteerData);
              $('#volunteerupdateButton'+$(e2.target).data('counts')).attr("data-hname",hname);
              $('#volunteerupdateButton'+$(e2.target).data('counts')).attr("data-hemail",volunteerData[1]);
            });
          }
          
          $('#volunteerupdateButton'+$(e.target).data('count')+scount.toString()).on('click',async function(e3) {
            console.log($('#volunteerupdateButton'+$(e3.target).data('counts')).attr("data-hname"));
              $('#loader').show();
              e3.preventDefault();
              const sendBody = {
                hid : $('#volunteerupdateButton'+$(e3.target).data('counts')).attr("data-hid"),
                huid : $('#volunteerupdateButton'+$(e3.target).data('counts')).attr("data-huid"),
                hname : $('#volunteerupdateButton'+$(e3.target).data('counts')).attr("data-hname"),
                seekCity : $('#volunteerupdateButton'+$(e3.target).data('counts')).attr("data-seekcity"),
                seekCountry : $('#volunteerupdateButton'+$(e3.target).data('counts')).attr("data-seekcountry"),
                seekCreatorEmail: $('#volunteerupdateButton'+$(e3.target).data('counts')).attr("data-seekcreatoremail"),
                seekName: $('#volunteerupdateButton'+$(e3.target).data('counts')).attr("data-seekname"),
                seekNumber: $('#volunteerupdateButton'+$(e3.target).data('counts')).attr("data-seeknumber"),
                seektype: $('#volunteerupdateButton'+$(e3.target).data('counts')).attr("data-seektype"),
                seekAdd: $('#volunteerupdateButton'+$(e3.target).data('counts')).attr("data-seekadd"),
                seekDetails: $('#volunteerupdateButton'+$(e3.target).data('counts')).attr("data-seekDetails"),
                sid: $('#volunteerupdateButton'+$(e3.target).data('counts')).attr("data-sid"),
                status: 'Assigned',
                hemail: $('#volunteerupdateButton'+$(e3.target).data('counts')).attr("data-hemail"),
              };
  
              console.log(sendBody)
              try {
                const res = await fetch('/api/v1/useeker', {
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
  
          scount++;
        });
        $('#dtseekers'+$(e.target).data('count')).DataTable();
        $('.dataTables_length').addClass('bs-select');
      }

      console.log(data);
      var updateString1= '<h6 style="margin-top:0.2rem;margin-bottom:0" class="card-text">Started on: '+(new Date(data.creationDate._seconds*1000)).toString().substring(4, 15)+'</h6>';
      
      $("#updatebody"+$(e.target).data('count')).append(updateString1);
      if (data.updates.length > 0) {
        var countforupdates = 1;
        data.updates.forEach(function(updates){
          var updateString2 = '<hr style="margin-top:0.8rem;margin-bottom:0.4rem">'+
          '<h7 style="color:#5777ba"><span class="font-weight-bold" >#'+countforupdates.toString()+' '+updates.name+':</span> <span style="font-size:60%"><i class="fas fa-clock"></i> '+new Date(updates.date).toString().substring(4, 15)+'</span></h7>'+
          '<h6 style="margin-top:0.2rem;margin-bottom:0" class="card-text">'+updates.message+'</h6>';
          
          $("#updatebody"+$(e.target).data('count')).append(updateString2);
          countforupdates++;
        });
      }
      $("#updateButton"+$(e.target).data('count')).attr("data-ehelpType",data.helpType);
      $("#updateButton"+$(e.target).data('count')).attr("data-eform2",data.plan);
      $("#updateButton"+$(e.target).data('count')).attr("data-eform3",data.who);
      $("#updateButton"+$(e.target).data('count')).attr("data-eform15",data.suppDetails);
      $("#updateButton"+$(e.target).data('count')).attr("data-eform4",data.title);
      $("#updateButton"+$(e.target).data('count')).attr("data-eform14",data.donation);
      $("#updateButton"+$(e.target).data('count')).attr("data-eform5",data.WhatsApp);
      $("#updateButton"+$(e.target).data('count')).attr("data-eform6",data.fb);
      $("#updateButton"+$(e.target).data('count')).attr("data-eform7",data.phone);
      $("#updateButton"+$(e.target).data('count')).attr("data-eform8",data.url);
      $("#updateButton"+$(e.target).data('count')).attr("data-eform9",data.days);
      $("#updateButton"+$(e.target).data('count')).attr("data-ecity",data.city);
      $("#updateButton"+$(e.target).data('count')).attr("data-ehid",data.hid);
      $("#updateButton"+$(e.target).data('count')).attr("data-eshorturl",data.shortUrl);

      $("#sendUpdates"+$(e.target).data('count')).attr("data-shid",data.hid);
      $("#sendUpdates"+$(e.target).data('count')).attr("data-scity",data.city);
      $("#sendUpdates"+$(e.target).data('count')).attr("data-scountry",data.country);
      $("#sendUpdates"+$(e.target).data('count')).attr("data-supdates",JSON.stringify(data.updates));
      $("#sendUpdates"+$(e.target).data('count')).attr("data-scount",$(e.target).data('count'));
      

      $("#updateButton"+$(e.target).data('count')).removeClass('disabled');
      $(".update").on('click',async function(e2) {
        console.log($(e2.target).data('eform2'));
        if ($(e2.target).data('ehelptype') === "Register NGO") {
          $('#eforform2').text("What does your NGO do?*");
          $('#eforform3').text("Which field is your NGO in?*");
          $('#eforform4').text("Name of your NGO*");
          $('#efordate').css('display','none');
          $('#eform9').attr("required", false);
        } else {
          $('#eforform2').text("What do you plan to do?*");
          $('#eforform3').text("Who will benefit from this?*");
          $('#eforform4').text("Name for your initiative:*");
          $('#efordate').css('display','block');
          $('#eform9').attr("required", true);
        }
        $('#pricing').css('display','block');
        $('html, body').animate({
            scrollTop: $("#pricing").offset().top - 20
        }, 2000);
        $("#ehelpType").val($(e2.target).data('ehelptype'));
        $("#eform2").val($(e2.target).data('eform2'));
        $("#eform3").val($(e2.target).data('eform3'));
        $("#eform15").val($(e2.target).data('eform15'));
        $("#eform4").val($(e2.target).data('eform4'));
        $("#eform14").val($(e2.target).data('eform14'));
        $("#eform5").val($(e2.target).data('eform5'));
        $("#eform6").val($(e2.target).data('eform6'));
        $("#eform7").val($(e2.target).data('eform7'));
        $("#eform8").val($(e2.target).data('eform8'));
        $("#eform9").val($(e2.target).data('eform9'));
        $("#editNewHelp").attr("data-oldcity",$(e2.target).data('ecity'));
        $("#editNewHelp").attr("data-hid",$(e2.target).data('ehid'));
        $("#editNewHelp").attr("data-shorturl",$(e2.target).data('eshorturl'));
      });
      $(".send").on('click',async function(e3) {
        var updates = $(e3.target).data('supdates');
        var message = $("#quickReplyFormComment"+$(e3.target).data('scount')).val();
        sendUpdates($(e3.target).data('scountry'),$(e3.target).data('scity'),$(e3.target).data('shid'),message,updates);
      });
    } else {
      
    }

  })
});

//  send updates to the database
async function sendUpdates(Country,City,hid,message,updates){
  $('#loader').show();
    updates.push({
      uid : firebase.auth().currentUser.uid,
      name: firebase.auth().currentUser.displayName,
      message: message,
      photoURL: firebase.auth().currentUser.photoURL,
      date : new Date()
    });
    console.log("Join user called.");
    var sendBody = {
      country : Country,
      city : City,
      hid : hid,
      message: message,
      by: firebase.auth().currentUser.displayName,
      updates : updates
    }
    try {
      const res = await fetch('/api/v1/updates', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(sendBody)
      });
      if (res.status === 201) {
        $('#loader').hide();
        showSuccess('Update sent!');
        return;
        
      }

      if (res.status === 400) {
        $('#loader').hide();
        showError('Database error. Please try again!');
      }
      if (res.status === 500) {
        $('#loader').hide();
        showError('Server Error!');
      }
      $('#loader').hide();
      showSuccess('Profile Updated!');
    } catch (err) {
      $('#loader').hide();
      showError(err);
      return;
    }
    


}

/**
 * Displays the UI for a signed out user.
 */
var handleSignedOutUser = function() {
  //document.getElementById('user-signed-in').style.display = 'none';
  //document.getElementById('user-signed-out').style.display = 'block';
  ui.start('#firebaseui-container', getUiConfig());
};

// Listen to change in auth state so it displays the correct UI for when
// the user is signed in or not.
firebase.auth().onAuthStateChanged(function(user) {
  //document.getElementById('loading').style.display = 'none';
 // document.getElementById('loaded').style.display = 'block';
  user ? handleSignedInUser(user) : handleSignedOutUser();
});

/**
 * Deletes the user's account.
 */
var deleteAccount = function() {
  firebase.auth().currentUser.delete().catch(function(error) {
    if (error.code == 'auth/requires-recent-login') {
      // The user's credential is too old. She needs to sign in again.
      firebase.auth().signOut().then(function() {
        // The timeout allows the message to be displayed after the UI has
        // changed to the signed out state.
        setTimeout(function() {
          showError('Please sign in again to delete your account.');
        }, 1);
      });
    }
  });
};


/**
 * Handles when the user changes the reCAPTCHA or email signInMethod config.
 */
function handleConfigChange() {
  var newRecaptchaValue = document.querySelector(
      'input[name="recaptcha"]:checked').value;
  var newEmailSignInMethodValue = document.querySelector(
      'input[name="emailSignInMethod"]:checked').value;
  location.replace(
      location.pathname + '#recaptcha=' + newRecaptchaValue +
      '&emailSignInMethod=' + newEmailSignInMethodValue);

  // Reset the inline widget so the config changes are reflected.
  ui.reset();
  ui.start('#firebaseui-container', getUiConfig());
}
    /**
     * Sends an email verification to the user.
     */
    function sendEmailVerification() {
      console.log("START sendemailverification");
      // [START sendemailverification]
      firebase.auth().currentUser.sendEmailVerification().then(function() {
        // Email Verification sent!
        // [START_EXCLUDE]
        showSuccess('Email Verification Sent! Please verify  your email');
        // [END_EXCLUDE]
      });
      // [END sendemailverification]
    }

//changing field values for help type ngo and account type
$(function () {
  $('#helpType').on('change', function() {
    console.log( this.value );
    if (this.value === "Register NGO") {
      $('#forform2').text("What does your NGO do?*");
      $('#forform3').text("Which field is your NGO in?*");
      $('#forform4').text("Name of your NGO*");
      $('#forform15').text("Extra details on support needed");
      $('#donationLink').css('display','block');
      $('#fordate').css('display','none');
      $('#form9').attr("required", false);
    } else if(this.value === "MV Recruitment") {
      $('#forform2').text("Job Type(Skilled/Unskilled/Semiskilled) and Skill?*");
      $('#forform3').text("Job Details on Qualifications,Experience and Pay *");
      $('#forform4').text("Name of the Recruitment Drive:*");
      $('#forform15').text("Details on Recruiter:*");
      $('#donationLink').css('display','none');
      $('#fordate').css('display','block');
      $('#form9').attr("required", true);
    } else {
      $('#forform2').text("What do you plan to do?*");
      $('#forform3').text("Who will benefit from this?*");
      $('#forform4').text("Name for your initiative:*");
      $('#forform15').text("Extra details on support needed");
      $('#donationLink').css('display','block');
      $('#fordate').css('display','block');
      $('#form9').attr("required", true);
    }
  });
  $('#ehelpType').on('change', function() {
    console.log( this.value );
    if (this.value === "Register NGO") {
      $('#eforform2').text("What does your NGO do?*");
      $('#eforform3').text("Which field is your NGO in?*");
      $('#eforform4').text("Name of your NGO*");
      $('#efordate').css('display','none');
      $('#eform9').attr("required", false);
    } else {
      $('#eforform2').text("What do you plan to do?*");
      $('#eforform3').text("Who will benefit from this?*");
      $('#eforform4').text("Name for your initiative:*");
      $('#efordate').css('display','block');
      $('#eform9').attr("required", true);
    }
  });
  $('#accountType').on('change', function() {
    console.log( this.value );
    if (this.value === "personal") {
      $('#forform104').text("Your Name*");
      $('#bioLabel').text("Your Bio*");
      $('#form104').attr("readonly", true);
    } else {
      $('#forform104').text("Your Org Name*");
      $('#bioLabel').text("Org Overview*");
      $('#form104').attr("readonly", false);
    }

  });
});
$('#parentmultipleDistrict').hide();
$('#NumberOfDistrict').on('change', function(e2) {
  if (this.value === 'Yes') {
    $('#map').hide();
    $('#pac-input').attr("required", false);
    $('#parentForm11').hide();
    $('#form11').attr("required", false);
    $('#parentmultipleDistrict').show();
    $('#multipleDistrict').attr("required", true);
    $('#form11').selectize({
        sortField: 'text'
    });
    $('#multipleDistrict').selectize({
        sortField: 'text'
    });
  } else {
    $('#map').show();
    $('#pac-input').attr("required", true);
    $('#parentForm11').show();
    $('#form11').attr("required", true);
    $('#parentmultipleDistrict').hide();
    $('#multipleDistrict').attr("required", false);
    $('#form11').selectize({
        sortField: 'text'
    });
    $('#multipleDistrict').selectize({
        sortField: 'text'
    });
    
  }
});

var testResopnse;
//Sending new help data to database
$(function () {
  $('#userdata').on('submit', async function (e) {
    $('#loader').show();
    e.preventDefault();
    const helpType = $("#helpType");
    const plan = $('#form2');
    const who = $('#form3');
    const supp = [$('#defaultInline1').is(":checked"),$('#defaultInline2').is(":checked"),$('#defaultInline3').is(":checked")];
    const suppDetails = $('#form15');
    const title = $('#form4');
    const donation = $('#form14');
    const WhatsApp = $('#form5');
    const fb = $('#form6');
    const phone = $('#form7');
    const url = $('#form8');
    const photoURL = $('#form12');
    const days = $('#form9');
    const fprofileUrl = $('#form16');
    var city='na',state='na',country='na',zipCode='na',shortUrl='na';
    var sendBody;

    if ($('#NumberOfDistrict').val() === "No") {
      const formatted_address = $('#place-address');
        if (formatted_address.text() === '') {
          showError('Please select a valid address');
          return;
        }
        addressData.address_components.forEach(function(add) {
          if (add.types[0] === "administrative_area_level_2") {
            city = add.long_name;
          } else if (add.types[0] === "administrative_area_level_1") {
            state = add.long_name;
          } else if (add.types[0] === "country") {
            country = add.long_name;
          } else if (add.types[0] === "postal_code") {
            zipCode = add.long_name;
          } else {
            
          }
        });
        sendBody = {
          uid : firebase.auth().currentUser.uid,
          name : firebase.auth().currentUser.displayName,
          helpType : helpType.val(),
          title: title.val(),
          plan: plan.val(),
          who : who.val(),
          supp : supp,
          suppDetails : suppDetails.val(),
          donation: donation.val(),
          WhatsApp: WhatsApp.val(),
          fb: fb.val(),
          phone: phone.val(),
          url: url.val(),
          days: days.val(),
          formatted_address: formatted_address.text(),
          place_id: place.place_id,
          geometry: addressData.geometry.location,
          city: city,
          state: state,
          country: country,
          zipCode: zipCode,
          shortUrl: shortUrl,
          usrAccountType: accountType,
          photoURL: photoURL.val(),
          fprofileUrl :fprofileUrl.val(),
          createdHids: createdHids,
          isVerified: isVerified,
          email: firebase.auth().currentUser.email,
          multipleDistrict: 'No'
        };
    } else {
      var districts = $('#multipleDistrict').val();
      sendBody = {
        uid : firebase.auth().currentUser.uid,
        name : firebase.auth().currentUser.displayName,
        helpType : helpType.val(),
        title: title.val(),
        plan: plan.val(),
        who : who.val(),
        supp : supp,
        suppDetails : suppDetails.val(),
        donation: donation.val(),
        WhatsApp: WhatsApp.val(),
        fb: fb.val(),
        phone: phone.val(),
        url: url.val(),
        days: days.val(),
        formatted_address: 'na',
        place_id: 'na',
        geometry: 'na',
        city: city,
        state: state,
        country: country,
        zipCode: zipCode,
        shortUrl: shortUrl,
        usrAccountType: accountType,
        photoURL: photoURL.val(),
        fprofileUrl :fprofileUrl.val(),
        createdHids: createdHids,
        isVerified: isVerified,
        email: firebase.auth().currentUser.email,
        multipleDistrict: 'Yes',
        districts: districts
      };
    }
    
        

        
    
        console.log(sendBody)
        try {
          const res = await fetch('/api/v1/helps', {
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
              var messageString = "Please support me on my initiative to:\n"+title.val()+".\nFollow the link below to find more information.\n";
              var message = "Help succesfully registered!"
              showHelpMessage(message,messageString,datar.shortUrl,title.val());
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
//Editing a help data to database
$(function () {
  $('#editdata').on('submit', async function (e) {
    $('#loader').show();
    e.preventDefault();
    const helpType = $("#ehelpType");
    const plan = $('#eform2');
    const who = $('#eform3');
    const suppDetails = $('#eform15');
    const title = $('#eform4');
    const donation = $('#eform14');
    const WhatsApp = $('#eform5');
    const fb = $('#eform6');
    const phone = $('#eform7');
    const url = $('#eform8');
    const days = $('#form9');
    const formatted_address = $('#eplace-address');
    const oldcity = $('#editNewHelp').data('oldcity');
    const shortUrl = $('#editNewHelp').data('shorturl');
    const hid = $('#editNewHelp').data('hid');
        if (formatted_address.text() === '') {
          $('#loader').hide();
          showError('Please select a valid address');
          return;
        }
        var city='na',state='na',country='na',zipCode='na';
        addressData.address_components.forEach(function(add) {
          if (add.types[0] === "administrative_area_level_2") {
            city = add.long_name;
          } else if (add.types[0] === "administrative_area_level_1") {
            state = add.long_name;
          } else if (add.types[0] === "country") {
            country = add.long_name;
          } else if (add.types[0] === "postal_code") {
            zipCode = add.long_name;
          } else {
            
          }
        });
        const sendBody = {
          uid : firebase.auth().currentUser.uid,
          hid: hid,
          helpType : helpType.val(),
          title: title.val(),
          plan: plan.val(),
          who : who.val(),
          suppDetails : suppDetails.val(),
          donation: donation.val(),
          WhatsApp: WhatsApp.val(),
          fb: fb.val(),
          phone: phone.val(),
          url: url.val(),
          days: days.val(),
          formatted_address: formatted_address.text(),
          place_id: place.place_id,
          geometry: addressData.geometry.location,
          city: city,
          state: state,
          country: country,
          zipCode: zipCode,
          oldcity: oldcity,
          shortUrl: shortUrl
        };
    
        console.log(sendBody)
        try {
          const res = await fetch('/api/v1/udhelp', {
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
              console.log( datar.shortUrl);
              $('#loader').hide();
              var messageString = "Please support me on my initiative  to:\n"+title.val()+".\nFollow the link below to find more information.\n";
              var message = "Help succesfully updated!"
              showHelpMessage(message,messageString,datar.shortUrl,title.val());
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


//Sending user profile data to database
$(function () {
  $('#mydata').on('submit',function (e) {
    e.preventDefault();
    $('#loader').show();
    var user = firebase.auth().currentUser;

    if (user.phoneNumber != $("#form13").val()) {
      if (user.photoURL != $("#form12").val() || user.displayName != $("#form104").val()) {
              if ($("#form12").val() != "") {
                user.updateProfile({
                  photoURL: $("#form12").val(),
                  displayName : $("#form104").val()
                }).then(function() {
                  AddPhoneNumberandBio();
                  console.log("url,number and bio  updated");
                }).catch(function(error) {
                  // An error happened.
                  console.log("error at url and number updated");
                });
                
              }else{

                user.updateProfile({
                  displayName : $("#form104").val()
                }).then(function() {
                  AddPhoneNumberandBio();
                  console.log("url,number and bio  updated");
                }).catch(function(error) {
                  // An error happened.
                  console.log("error at url and number updated");
                });
              }

      } else {
          // Update number and bio in database.
              console.log("bio and number updated");
              AddPhoneNumberandBio();
      }
    } else {
      if (user.photoURL != $("#form12").val()) {
                if ($("#form12").val() != "") {
                  user.updateProfile({
                    photoURL: $("#form12").val()
                  }).then(function() {
                    AddPhoneNumberandBio();
                    console.log(" url updated");
                  }).catch(function(error) {
                    // An error happened.
                    console.log("error  url updated");
                  });
                }

        } else {
                AddPhoneNumberandBio();
                console.log("just updated bio");
        }
    }
      });
});
const userBio = $("#form10");
const phoneNumber = $('#form13');
const fprofileUrl = $('#form16');
const accType = $('#accountType')
// Send POST to API to update user
async function AddPhoneNumberandBio() {


  if (userBio.val() === '' || phoneNumber.val() === '') {
    showError('Please update your Bio and Phone number');
  }

  const sendBody = {
    uid : firebase.auth().currentUser.uid,
    userBio: userBio.val(),
    phoneNumber: phoneNumber.val(),
    accountType: accType.val(),
    photoURL: firebase.auth().currentUser.photoURL,
    fprofileUrl: fprofileUrl.val(),
    name: firebase.auth().currentUser.displayName,
    email : firebase.auth().currentUser.email
  };

  try {
    const res = await fetch('/api/v1/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(sendBody)
    });

    if (res.status === 400) {
      $('#loader').hide();
      showError('Database error. Please try again!');
    }
    if (res.status === 500) {
      $('#loader').hide();
      showError('Server Error!');
    }
    $('#loader').hide();
    showSuccess('Profile Updated!');
  } catch (err) {
    showError(err);
    return;
  }
}



/**
 * Initializes the app.
 */
var initApp = function() {
  //document.getElementById('sign-in-with-redirect').addEventListener(
  //    'click', signInWithRedirect);
  //document.getElementById('sign-in-with-popup').addEventListener(
  //    'click', signInWithPopup);
  document.getElementById('signout').addEventListener('click', function() {
    firebase.auth().signOut().then(function() {
      console.log('Signed Out');
      $('#signout').css("display", "none");
      $('.mobile-nav,.-d-lg-none').children('ul').children(".get-started").children('#signout').css("display", "none");
      $('#profile').css("display", "none");
      $('.mobile-nav,.-d-lg-none').children('ul').children(".get-started").children('#profile').css("display", "none");
      $('#signin').css("display", "block");
      $('.mobile-nav,.-d-lg-none').children('ul').children(".get-started").children('#signin').css("display", "block");
      $('#gallery').css("display", "none");
      location.reload();
    }, function(error) {
      console.error('Sign Out Error', error);
    });
  });
  $('.mobile-nav,.-d-lg-none').children('ul').children(".get-started").children('#signout').on("click", function(){
    firebase.auth().signOut().then(function() {
      console.log('Signed Out');
      $('#signout').css("display", "none");
      $('.mobile-nav,.-d-lg-none').children('ul').children(".get-started").children('#signout').css("display", "none");
      $('#profile').css("display", "none");
      $('.mobile-nav,.-d-lg-none').children('ul').children(".get-started").children('#profile').css("display", "none");
      $('#signin').css("display", "block");
      $('.mobile-nav,.-d-lg-none').children('ul').children(".get-started").children('#signin').css("display", "block");
      $('#gallery').css("display", "none");
      location.reload();
    }, function(error) {
      console.error('Sign Out Error', error);
    });
  });

};

window.addEventListener('load', initApp);
