import firebase from './index';
import 'firebase/firestore';

export function deleteApplication(userId, applicationId) {
  try {
    firebase
      .firestore()
      .collection('users')
      .doc(userId)
      .collection('applications')
      .doc(applicationId)
      .delete();
  } catch (err) {
    console.log('Origin: deleteApplication.deleteApplication(): ', err);
  }
}
