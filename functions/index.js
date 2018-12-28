const functions = require('firebase-functions');
const admin = require('firebase-admin');
const sgMail = require('@sendgrid/mail');

admin.initializeApp();

exports.sendMessage = functions.database.ref('/contactForm/{pushId}')
  .onCreate((snapshot) => {
    const msgData = snapshot.val();

    /* set api key here */
    const sgApiKey = 'YOURCONFIGHERE';
    sgMail.setApiKey(sgApiKey);

    /* save message into an object */
    const msg = {
      to: 'thomasnaylor@outlook.com',
      from: msgData.from,
      subject: 'Thomas Naylor | Contact Me',
      text: msgData.text,
      html: '<strong>' + msgData.text + '<strong>'
    };

    return sgMail.send(msg);
});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
