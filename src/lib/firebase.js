import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// import the seed file :
// import {seedDatabase} from '../seed'
const config={
    apiKey: "AIzaSyDbpJGvgLr-8OC-XRXnZuaSLZNen5AyOgc",
  authDomain: "instagramclone-8ff61.firebaseapp.com",
  projectId: "instagramclone-8ff61",
  storageBucket: "instagramclone-8ff61.appspot.com",
  messagingSenderId: "741644539835",
  appId: "1:741644539835:web:902d5ec6729492b939569e"
}


const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// call the function once here
// after calling it once-> comment it
// seedDatabase(firebase)


export { firebase, FieldValue };
