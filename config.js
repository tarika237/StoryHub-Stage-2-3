import firebase from 'firebase'
require("@firebase/firestore")

var firebaseConfig = {
    apiKey: "AIzaSyBHaSQDKfJdDG9KeRiNLCXQlXfbpCid1So",
    authDomain: "storyhub-50c9b.firebaseapp.com",
    projectId: "storyhub-50c9b",
    storageBucket: "storyhub-50c9b.appspot.com",
    messagingSenderId: "37489801696",
    appId: "1:37489801696:web:c0fabdc68d0cd742eed385"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default  firebase.firestore()                                   