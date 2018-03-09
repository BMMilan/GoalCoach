import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyC2PgxTaQqqRv31PnbAAmPe0goyUyKj1Cg",
    authDomain: "goalcoach-3f0c0.firebaseapp.com",
    databaseURL: "https://goalcoach-3f0c0.firebaseio.com",
    projectId: "goalcoach-3f0c0",
    storageBucket: "goalcoach-3f0c0.appspot.com",
    messagingSenderId: "575463377830"
};

export const firebaseApp = firebase.initializeApp(config);