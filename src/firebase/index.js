import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/functions';

const firebaseConfig = {
  apiKey: 'AIzaSyCEeaTNSLM2bvr-mjy8qqD50Xbq3IlIbYk',
  authDomain: 'job-tracker-6f7be.firebaseapp.com',
  projectId: 'job-tracker-6f7be',
  storageBucket: 'job-tracker-6f7be.appspot.com',
  messagingSenderId: '332780863210',
  appId: '1:332780863210:web:94bb4714d3e87a51b8e193',
  measurementId: 'G-9R1RK7GRR4',
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);

  // this is only true in the live website, not localhost
  if (process.env.NODE_ENV !== 'production') {
    firebase.auth().useEmulator('http://localhost:9099');
    firebase.firestore().useEmulator('localhost', 8090);
    firebase.functions().useEmulator('localhost', 5001);
  }
}

console.log('%cFirebase initialized', 'color: blue');

export default firebase;
