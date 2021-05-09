import firebase from './index';
import 'firebase/firestore';

const firestore = firebase.firestore();
// TODO: fix naming conventions
export async function getApplied(userId) {
  try {
    const applicationsRef = firestore
      .collection('users')
      .doc(userId)
      .collection('Job Applications');

    const appliedApplicationsOnlyQuery = applicationsRef.where(
      'status',
      '==',
      'applied'
    );

    // wait for firestore to finish loading
    const snapshot = await appliedApplicationsOnlyQuery.get();
    // then, run the code below
    console.log('snapshot: ', snapshot);

    // add collection of "applied" status to firestore
    snapshot.docs.forEach((doc) => {
      firestore
        .collection('users')
        .doc(userId)
        .collection('statusIsApplied')
        .add({
          title: doc.title,
          company: doc.company,
          status: doc.status,
          dateApplied: doc.timeStamp,
        });
    });

    return snapshot.docs.map((doc) => {
      return doc.data();
    });
  } catch (err) {
    console.log('Origin: getApplications.getApplications(): ', err);
  }
}
