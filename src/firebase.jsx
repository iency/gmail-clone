import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCEyM7Ek92YPRtAzI9g6NxLkS_p05eB7aw",
  authDomain: "clone-3a3ae.firebaseapp.com",
  projectId: "clone-3a3ae",
  storageBucket: "clone-3a3ae.appspot.com",
  messagingSenderId: "75596216701",
  appId: "1:75596216701:web:373603584d79c29af97414"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider }