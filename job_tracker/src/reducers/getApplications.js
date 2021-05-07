import firebase from '../firebase/index';

const firestore = firebase.firestore();

const GOT_APPLICATIONS = 'GOT_APPLICATIONS';

const gotApplications = (applications) => ({
  type: GOT_APPLICATIONS,
  applications,
});

export const fetchApplications = (userId) => {
  return async (dispatch) => {
    try {
      const applicationRef = firestore
        .collection('users')
        .doc(userId)
        .collection('Job Applications');

      const applicationsSnapshot = await applicationRef.get();

      const application = await Promise.all(
        applicationsSnapshot.docs.map((doc) => {
          return doc.data();
        })
      );

      dispatch(gotApplications(application));
    } catch (err) {
      console.log('Origin: getApplications.getApplication(): ', err);
    }
  };
};

const initialState = { data: [] };

const applications = (state = initialState, action) => {
  switch (action.type) {
    case GOT_APPLICATIONS:
      return { ...state, data: action.applications };
    default:
      return state;
  }
};

export default applications;
