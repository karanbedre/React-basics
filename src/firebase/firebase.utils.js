import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyB9Ta2IthnuBX7MlMIDvoQKs6wBtSJEc7M",
    authDomain: "cart-application-90c04.firebaseapp.com",
    databaseURL: "https://cart-application-90c04.firebaseio.com",
    projectId: "cart-application-90c04",
    storageBucket: "cart-application-90c04.appspot.com",
    messagingSenderId: "236406357045",
    appId: "1:236406357045:web:24ee05e2d8ff47e9b7c57c",
    measurementId: "G-NS7N3N0VG5"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
// var provider = new firebase.auth.GoogleAuthProvider();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);   

export default firebase;