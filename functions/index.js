const admin = require('firebase-admin');
const functions = require('firebase-functions');
admin.initializeApp();
const firestore = admin.firestore();

if (process.env.NODE_ENV !== 'production') {
  firestore.settings({
    host: 'localhost',
    port: 8090,
  });
}

// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

exports.onUserCreateTrigger = functions.auth.user().onCreate(async (user) => {
  await firestore
    .collection('users')
    .doc(user.uid)
    .set({
      email: user.email,
      name: user.displayName,
      emailVerified: user.emailVerified ? 'true' : 'false',
      uid: user.uid,
    });
});
