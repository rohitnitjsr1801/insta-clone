import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4IgSv495aRW2e-Thvd9ktu59iZgD5_7k",
  authDomain: "reelify-c9dab.firebaseapp.com",
  projectId: "reelify-c9dab",
  storageBucket: "reelify-c9dab.appspot.com",
  messagingSenderId: "362941312455",
  appId: "1:362941312455:web:f72000bfbf605cac713de2"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const firestore = firebase.firestore();
export const database = {
    users : firestore.collection('users'),
    posts : firestore.collection('posts'),
    comments : firestore.collection('comments'),
    getTimeStamp : firebase.firestore.FieldValue.serverTimestamp,
}

export const storage = firebase.storage()