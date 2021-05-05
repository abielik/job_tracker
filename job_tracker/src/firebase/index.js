import firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyCEeaTNSLM2bvr-mjy8qqD50Xbq3IlIbYk',
  authDomain: 'job-tracker-6f7be.firebaseapp.com',
  projectId: 'job-tracker-6f7be',
  storageBucket: 'job-tracker-6f7be.appspot.com',
  messagingSenderId: '332780863210',
  appId: '1:332780863210:web:94bb4714d3e87a51b8e193',
  measurementId: 'G-9R1RK7GRR4',
};

firebase.initializeApp(firebaseConfig);

console.log('%cFirebase initialized', 'color: blue');

export default firebase;
