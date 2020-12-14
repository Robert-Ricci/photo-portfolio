import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCvrxxs1vDIvG_dxdn3AyPm9N7B_LxmtfE",
    authDomain: "rr-photo-portfolio-251f3.firebaseapp.com",
    projectId: "rr-photo-portfolio-251f3",
    storageBucket: "rr-photo-portfolio-251f3.appspot.com",
    messagingSenderId: "189669662341",
    appId: "1:189669662341:web:1d217026e77915c74d13ec"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { projectStorage, projectFirestore, timestamp };