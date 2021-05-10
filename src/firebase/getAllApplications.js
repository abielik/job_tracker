import firebase from './index';
import 'firebase/firestore';

const firestore = firebase.firestore();
// TODO: fix naming conventions
export async function getAllApplications(userId) {
  try {
    const applicationsRef = firestore
      .collection('users')
      .doc(userId)
      .collection('Job Applications');

    // wait for firestore to finish loading
    const snapshot = await applicationsRef.get();
    // then, run the code below
    console.log('snapshot: ', snapshot);

    return snapshot.docs.map((doc) => {
      return doc.data();
    });
  } catch (err) {
    console.log('Origin: getApplications.getApplications(): ', err);
  }
}
