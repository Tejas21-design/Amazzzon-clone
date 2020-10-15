import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyDFf3-w2H7TM5iFQKo8oJX_tXn3bYr0uXc",
    authDomain: "rich-access-284517.firebaseapp.com",
    databaseURL: "https://rich-access-284517.firebaseio.com",
    projectId: "rich-access-284517",
    storageBucket: "rich-access-284517.appspot.com",
    messagingSenderId: "184902662304",
    appId: "1:184902662304:web:8d6c1dfc31512fce2131c5",
    measurementId: "G-BVFCRKLW0X"
  };

  const firebaseapp = firebase.initializeApp(firebaseConfig);

  const db = firebaseapp.firestore();
  const auth = firebase.auth();


  export {db, auth};