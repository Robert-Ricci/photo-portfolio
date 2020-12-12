import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA6RiUCVyETEzEh9EE9EkXs5Z9Bn-TpIqQ",
    authDomain: "rr-photo-portfolio.firebaseapp.com",
    projectId: "rr-photo-portfolio",
    storageBucket: "rr-photo-portfolio.appspot.com",
    messagingSenderId: "174838489959",
    appId: "1:174838489959:web:12251c7e34ff401345c5c2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { projectStorage, projectFirestore, timestamp };