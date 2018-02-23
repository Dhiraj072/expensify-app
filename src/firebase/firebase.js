import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// database.ref('expenses').push(expenses[0]);
// database.ref('expenses').push(expenses[1]);
// database.ref('expenses').push(expenses[2]);

// database.ref('expenses')
//     .on('value', (snapshot) => {
//         const expenses = [];
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val(),
//             })
//         });
//         console.log(expenses);
//     });

// database.ref().set({
//     name: 'Dhiraj',
//     age: 26,
//     isSingle: false,
//     location: {
//         city: 'Singapore',
//         country: 'Singapore',
//     },
// }).then(() => {
//     console.log('Data is saved');
// }).catch((e) => {
//     console.log('Failed.' + e);
// });

// database.ref().once('value')
//     .then((snapshot) => {
//         console.log(snapshot.val());
//     });

// database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// });

// setTimeout(() => {
//     database.ref().off();
// }, 3000);

// setTimeout(() => {
//     database.ref('name').set('Bhatt');
// }, 6000);

// firebase.database().ref().set({
//     name: 'Dhiraj',
//     age: 26,
//     isSingle: false,
//     location: {
//         city: 'Singapore',
//         country: 'Singapore',
//     },
// }).then(() => {
//     console.log('Data is saved');
// }).catch((e) => {
//     console.log('Failed.' + e);
// });

// firebase.database().ref('attributes').set({
//     sex: 'Male',
// });

// firebase.database().ref('attributes/sex').set('Female').then(() => {
//     console.log('Sex updated successfully');
// }).catch((error) => {
//     console.log('Error.' + e);
// });

// firebase.database().ref().update({
//     age: 24,
//     job: 'Software developer',
//     isSingle: null,
//     'location/city': 'SG',
// });

// firebase.database().ref('location/country').remove()
//     .then(() => {
//         console.log('country removed');
//     })
//     .catch((e) => {
//         console.log(`Failed.${  e}`);
//     });
