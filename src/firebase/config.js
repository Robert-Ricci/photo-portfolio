import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyANfaQQ1nloWm7tJ6eQ-CUUOOOdpaHbsjk",
    authDomain: "rr-photo-app.firebaseapp.com",
    databaseURL: "https://rr-photo-app.firebaseio.com",
    projectId: "rr-photo-app",
    storageBucket: "rr-photo-app.appspot.com",
    messagingSenderId: "496974175629",
    appId: "1:496974175629:web:a968710d610611494171c4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { projectStorage, projectFirestore, timestamp };