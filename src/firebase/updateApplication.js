import firebase from './index';
import 'firebase/firestore';

const firestore = firebase.firestore();

export async function updateApplication(
  userId,
  applicationId,
  title,
  company,
  status,
  jobLink,
  description
) {
  try {
    const applicationDocRef = firestore
      .collection('users')
      .doc(userId)
      .collection('applications')
      .doc(applicationId);

    return applicationDocRef.update({
      title,
      company,
      status,
      jobLink,
      description,
    });
  } catch (err) {
    console.log('Origin: updateApplication.updateApplication(): ', err);
  }
}
