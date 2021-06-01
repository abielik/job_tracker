import firebase from './index';
import 'firebase/firestore';

const firestore = firebase.firestore();

export async function addApplication(
  userId,
  title,
  company,
  dateApplied,
  status,
  jobLink,
  cardColor
) {
  try {
    const applicationsCollectionRef = firestore
      .collection('users')
      .doc(userId)
      .collection('applications');

    await applicationsCollectionRef.add({
      title,
      company,
      dateApplied,
      status,
      jobLink,
      cardColor,
    });
  } catch (err) {
    console.log('Origin: addApplication.addApplication(): ', err);
  }
}
