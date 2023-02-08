import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

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

firebase.initializeApp(firebaseConfig);

firebase.firestore().settings({ timestampsInSnapshots: true });

window.db = firebase.firestore();

firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);

export default firebase;
