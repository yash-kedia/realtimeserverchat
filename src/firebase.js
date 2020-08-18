import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    
        apiKey: "AIzaSyAt9u8jBjTCF6Xk4_16arEuJ-Y7LSi7lVI",
        authDomain: "freindly-chat-dae8e.firebaseapp.com",
        databaseURL: "https://freindly-chat-dae8e.firebaseio.com",
        projectId: "freindly-chat-dae8e",
        storageBucket: "freindly-chat-dae8e.appspot.com",
        messagingSenderId: "888957787787",
        appId: "1:888957787787:web:e1378230ff4a5cfa9efe8e"
    

});

const db = firebaseApp.firestore();

export default db;
