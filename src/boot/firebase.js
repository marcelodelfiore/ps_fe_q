import * as firebase from "firebase/app"

import "firebase/auth"
import "firebase/database"

// Porksmith project configuration @ Firebase
var firebaseConfig = {
  apiKey: "AIzaSyC9VUQ4tli4PZDO04RWP-CGpeo9FY25F5g",
  authDomain: "porksmith-f7a9a.firebaseapp.com",
  databaseURL: "https://porksmith-f7a9a.firebaseio.com",
  projectId: "porksmith-f7a9a",
  storageBucket: "porksmith-f7a9a.appspot.com",
  messagingSenderId: "526031615392",
  appId: "1:526031615392:web:92d73e274db113046a20c5",
  measurementId: "G-PDWSJJ0VK7"
};

// Initialize Firebase
let firebaseAPP = firebase.initializeApp(firebaseConfig)

let firebaseAuth = firebase.auth()
let firebaseDataBase = firebase.database()

export { firebaseAuth, firebaseDataBase }
