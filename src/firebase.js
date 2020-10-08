import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  //amazon-clone-app2
  apiKey: "AIzaSyBTN0qWLs5hRIHpP-IO_Hlj7nxFJFcTmPk",
  authDomain: "multi-project-0.firebaseapp.com",
  databaseURL: "https://multi-project-0.firebaseio.com",
  projectId: "multi-project-0",
  storageBucket: "multi-project-0.appspot.com",
  messagingSenderId: "154677185904",
  appId: "1:154677185904:web:4b69c090db53f3771453b5",
  measurementId: "G-92Z4LNW7ZM",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
