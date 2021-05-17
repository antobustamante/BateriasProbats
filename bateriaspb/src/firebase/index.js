import firebase from 'firebase/app';
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBwplFYHzF0hveFwtXL-XEFtxGyw-yZfh4",
    authDomain: "bateriaspb-6ab5b.firebaseapp.com",
    projectId: "bateriaspb-6ab5b",
    storageBucket: "bateriaspb-6ab5b.appspot.com",
    messagingSenderId: "512159776023",
    appId: "1:512159776023:web:f645441bb4603438bf0b52",
    measurementId: "G-QLK73LXF7S"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  export default db;