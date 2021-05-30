import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_YYqVRIcKMf7IMWxiXZMlJ1VYdfT6NYY",
  authDomain: "belajar-react-f1fa5.firebaseapp.com",
  databaseURL:
    "https://belajar-react-f1fa5-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "belajar-react-f1fa5",
  storageBucket: "belajar-react-f1fa5.appspot.com",
  messagingSenderId: "623906692914",
  appId: "1:623906692914:web:608dc95aae7eb1f6d9c12b",
  measurementId: "G-7GJ8YWHZ3Z",
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
export const DB = firebase.database();
