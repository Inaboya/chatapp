// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBnmadRLu4ofjEkHwJ6zcDsh8p31cs44NQ',
  authDomain: 'free-chat-app-d73d6.firebaseapp.com',
  projectId: 'free-chat-app-d73d6',
  storageBucket: 'free-chat-app-d73d6.appspot.com',
  messagingSenderId: '484396019304',
  appId: '1:484396019304:web:6928c88d34f07a189b95dd',
  measurementId: 'G-P2CBYXK4Q3',
  databaseURL: 'https://free-chat-app-d73d6-default-rtdb.firebaseio.com/',
};

const db = firebase.firestore();

window.db = db;

db.settings({
  timestampsInSnapshots: true,
});

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);

export default firebase;
