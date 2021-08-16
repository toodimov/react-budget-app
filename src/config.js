import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

console.log("process env vars", process.env.REACT_APP_API_KEY);

const firebaseConfig = {
  apiKey: "AIzaSyDrFj8hxay_JaH1nVt1JxyctmyqlTey7IE",
  authDomain: "budget-app-2f9ab.firebaseapp.com",
  projectId: "budget-app-2f9ab",
  storageBucket: "budget-app-2f9ab.appspot.com",
  messagingSenderId: "615409673233",
  appId: "1:615409673233:web:6c274e4eef6f6c4272fdb0",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const Timestamp = firebase.firestore.Timestamp;

export const db = firebase.firestore();
export const auth = firebase.auth();

export const GoogleAuthProvider = firebase.auth.GoogleAuthProvider;
