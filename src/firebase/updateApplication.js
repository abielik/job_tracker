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
  description,
  location,
  salary
) {
  try {
    const applicationDocRef = firestore
      .collection('users')
      .doc(userId)
      .collection('applications')
      .doc(applicationId);

    return await applicationDocRef.update({
      title,
      company,
      status,
      jobLink,
      description,
      location,
      salary,
    });
  } catch (err) {
    console.log('Origin: updateApplication.updateApplication(): ', err);
  }
}
