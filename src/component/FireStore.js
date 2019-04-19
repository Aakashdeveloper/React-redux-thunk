import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDdHwSKDg7-yC-kDxPLMAP2JjjMlq2xUfk",
    authDomain: "vuejs-stock-trader-52707.firebaseapp.com",
    databaseURL: "https://vuejs-stock-trader-52707.firebaseio.com",
    projectId: "vuejs-stock-trader-52707",
    storageBucket: "vuejs-stock-trader-52707.appspot.com",
    messagingSenderId: "999465151023"
};
firebase.initializeApp(config);

export default firebase;

