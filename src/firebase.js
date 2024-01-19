import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDe_Rb0FH6AhVAeS7DhjBCLAfApWMqMCsg",
  authDomain: "artistly-web.firebaseapp.com",
  databaseURL: "https://artistly-web-default-rtdb.firebaseio.com",
  projectId: "artistly-web",
  storageBucket: "artistly-web.appspot.com",
  messagingSenderId: "284439325412",
  appId: "1:284439325412:web:d65b8732ff7c39cafd1af1",
  measurementId: "G-40SEZ5Y7R0",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage, firebaseApp };
