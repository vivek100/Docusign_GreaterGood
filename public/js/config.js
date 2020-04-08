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

var config = {
  apiKey: "AIzaSyDO6uS22dFOm7tlrtaWEPkIibmGzH7bVTo",
  authDomain: "helpnearme.firebaseapp.com",
  databaseURL: "https://helpnearme.firebaseio.com",
  projectId: "helpnearme",
  storageBucket: "helpnearme.appspot.com",
  messagingSenderId: "354683853934",
  appId: "1:354683853934:web:df5356b7b283a43cf41a7f",
  measurementId: "G-PCG6HNL1MJ"
};
firebase.initializeApp(config);

// Google OAuth Client ID, needed to support One-tap sign-up.
// Set to null if One-tap sign-up is not supported.
var CLIENT_ID = "1:354683853934:web:df5356b7b283a43cf41a7f";