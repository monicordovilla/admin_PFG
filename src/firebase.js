// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAQP0Mlk0CFhxGV0IxsrgQU12UfuTCeGNk",
    authDomain: "actividades-vale.firebaseapp.com",
    projectId: "actividades-vale",
    storageBucket: "actividades-vale.appspot.com",
    messagingSenderId: "32273505683",
    appId: "1:32273505683:web:2b7570f344af38e654dc66",
    measurementId: "G-6K4JYEF3J6"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();