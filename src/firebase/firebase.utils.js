import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'; 

const config = {
  apiKey: "AIzaSyD5GFsyU35EcpNa9A99bnyfLOPTkGFG64M",
  authDomain: "crown-db-67cad.firebaseapp.com",
  databaseURL: "https://crown-db-67cad.firebaseio.com",
  projectId: "crown-db-67cad",
  storageBucket: "crown-db-67cad.appspot.com",
  messagingSenderId: "936070498156",
  appId: "1:936070498156:web:14bd05915bb4ad86145549",
  measurementId: "G-PDX3XMBKC6"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account'
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;