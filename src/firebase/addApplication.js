import firebase from './index';
import 'firebase/firestore';

const firestore = firebase.firestore();

export async function addApplication(
  userId,
  title,
  company,
  // dateApplied,
  status
) {
  try {
    console.log('hello from addApplication()!!');
    const applicationsCollectionRef = firestore
      .collection('users')
      .doc(userId)
      .collection('Job Applications');

    await applicationsCollectionRef.add({
      title,
      company,
      // dateApplied,
      status,
    });
  } catch (err) {
    console.log('Origin: addApplication.addApplication(): ', err);
  }
}
