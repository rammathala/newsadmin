// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage'

const firebaseConfig = {
  apiKey: "AIzaSyD5tU7exmebuWE7lRiJj7i50u9xmSfmII4",
  authDomain: "newsapp-35459.firebaseapp.com",
  projectId: "newsapp-35459",
  storageBucket: "newsapp-35459.appspot.com",
  messagingSenderId: "231303268568",
  appId: "1:231303268568:web:d1491de0689787a3026fad"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export default db;
 const storage = firebase.storage()
export { auth, provider,storage };