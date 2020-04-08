/*
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the
 * License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing permissions and
 * limitations under the License.
 */

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
    $('#signout').css("display", "block");
    $('.mobile-nav,.-d-lg-none').children('ul').children(".get-started").children('#signout').css("display", "block");
    $('#profile').css("display", "block");
    $('.mobile-nav,.-d-lg-none').children('ul').children(".get-started").children('#profile').css("display", "block");
    $('#profile').text(user.displayName+"'s Profile");
    $('.mobile-nav,.-d-lg-none').children('ul').children(".get-started").children('#profile').text(user.displayName+"'s Profile");
    $('#form104').val(user.displayName.toUpperCase());
    $('.close').click();
    $('#signin').css("display", "none");
    $('.mobile-nav,.-d-lg-none').children('ul').children(".get-started").children('#signin').css("display", "none");
    $('#gallery').css("display", "block");
    if(user.emailVerified){
      $('#verify').css("color", "green");
      $('#userdata').css("display", "block");
      $('#saveuser').removeClass('disabled');
      $('#errorVerify').css("display", "none");
      getData();
    }else{
      $('#verify').css("color", "red");
      $('#verify').text("Email Not Verified!");
      $('#verifyButton').removeClass('disabled');
      $('#saveuser').addClass('disabled');
      $('#verifyButton').removeClass('btn-grey');
      $('#verifyButton').addClass('btn-green');
      
    }
    if(user.photoURL === ""){
      console.log(user.photoURL);
      console.log("Not worked");
    }else{
    $("#profilepic").attr("src",user.photoURL);
    $("#form12").val(user.photoURL);
    console.log("worked");
    }
    if(user.phoneNumber === null){
      
    }else{
    $("#form13").val(user.phoneNumber);
    }

  });

  async function getData(){

    console.log("Get data called.")
    try {
      const res2 = await fetch('/api/v1/user'+'?uid='+firebase.auth().currentUser.uid)
      const data = await res2.json();
      if (res2.status === 200) {
        console.log(data)
        $('#dataVerify').css("display", "none");
        $('#bioLabel').css("transform", "translateY(-14px) scale(0.8)");
        $('#userdata').css("display", "block");
        $('#form10').val(data.userBio);
        $('#form13').val(data.phoneNumber);
      }
      if (res2.status === 403) {
        $('#userdata').css("display", "none");

      }
      if (res2.status === 400) {
        throw Error('Database Error');
      }
      if (res2.status === 500) {
        throw Error('Server Error!');
      }
    } catch (err) {
      alert(err);
      return;
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
          alert('Please sign in again to delete your account.');
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
        alert('Email Verification Sent! Please verify from your email');
        window.location.href = '/index.html';
        // [END_EXCLUDE]
      });
      // [END sendemailverification]
    }

//Sending new help data to database
$(function () {
  $('#userdata').on('submit', async function (e) {
    e.preventDefault();
    const title = $("#form1");
    const desc = $('#form2');
    const phone = $('#form3');
    const url = $('#form4');
    const endDate = $('#prefill');
    const formatted_address = $('#place-address');
        if (formatted_address.text() === '') {
          alert('Please select a valid address');
          return;
        }
        const sendBody = {
          uid : firebase.auth().currentUser.uid,
          title: title.val(),
          desc: desc.val(),
          phone: phone.val(),
          url: url.val(),
          formatted_address: formatted_address.text(),
          place_id: place.place_id,
          geometry: addressData.geometry.location,
          city: addressData.address_components[1].long_name,
          state: addressData.address_components[2].long_name,
          country: addressData.address_components[3].long_name,
          zipCode: addressData.address_components[4].long_name
        };
    
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
            throw Error('Store already exists!');
          }
          if (res.status === 500) {
            throw Error('Server Error!');
          }
      
          alert('Help Registered go Share and check it out on the map!');
          window.location.href = '/index.html';
        } catch (err) {
          alert(err);
          return;
        }
   });
});


//Sending user profile data to database
$(function () {
  $('#mydata').on('submit',function (e) {
    e.preventDefault();
    var user = firebase.auth().currentUser;

    if (user.phoneNumber != $("#form13").val()) {
      if (user.photoURL != $("#form12").val()) {
              user.updateProfile({
                photoURL: $("#form12").val()
              }).then(function() {
                AddPhoneNumberandBio();
                console.log("url,number and bio  updated");
              }).catch(function(error) {
                // An error happened.
                console.log("error at url and number updated");
              });
      } else {
          // Update number and bio in database.
              console.log("bio and number updated");
              AddPhoneNumberandBio();
      }
    } else {
      if (user.photoURL != $("#form12").val()) {
                user.updateProfile({
                  photoURL: $("#form12").val()
                }).then(function() {
                  AddPhoneNumberandBio();
                  console.log(" url updated");
                }).catch(function(error) {
                  // An error happened.
                  console.log("error  url updated");
                });
        } else {
                AddPhoneNumberandBio();
                console.log("just updated bio");
        }
    }
      });
});
const userBio = $("#form10");
const phoneNumber = $('#form13');
// Send POST to API to update user
async function AddPhoneNumberandBio() {


  if (userBio.val() === '' || phoneNumber.val() === '') {
    alert('Please fill in fields');
  }

  const sendBody = {
    uid : firebase.auth().currentUser.uid,
    userBio: userBio.val(),
    phoneNumber: phoneNumber.val()
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
      throw Error('Store already exists!');
    }
    if (res.status === 500) {
      throw Error('Server Error!');
    }

    alert('Bio Updated!');
    window.location.href = '/index.html';
  } catch (err) {
    alert(err);
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
    }, function(error) {
      console.error('Sign Out Error', error);
    });
  });

};

window.addEventListener('load', initApp);
