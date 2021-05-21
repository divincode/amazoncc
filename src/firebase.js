import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyDhzOtPfp_wW_v5FEXcUYRpfQ5vEq5xJPA",
    authDomain: "clone-8b451.firebaseapp.com",
    projectId: "clone-8b451",
    storageBucket: "clone-8b451.appspot.com",
    messagingSenderId: "358781598264",
    appId: "1:358781598264:web:c001453f8a73d0cd9584cd"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };