import firebase from '../firebase/index';
import 'firebase/auth';

const auth = firebase.auth();

export default function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };
}
