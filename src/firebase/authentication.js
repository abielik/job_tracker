import firebase from './index';
import 'firebase/auth';

const auth = firebase.auth();

function signInWithGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth
    .signInWithPopup(provider)

    .catch((err) => {
      console.warn('Google sign in error: ', err);
    });
}

//add redirect
function signOut() {
  auth
    .signOut()
    .then(() => {
      console.log('signed out');
    })
    .catch((error) => {
      window.alert(error.message);
    });
}

export { signInWithGoogle, signOut };
