import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyCgaqi0o-WW3ABE7yFuIJkRWqZhwM6Ig18",
  authDomain: "clothing-db-c3eec.firebaseapp.com",
  projectId: "clothing-db-c3eec",
  storageBucket: "clothing-db-c3eec.appspot.com",
  messagingSenderId: "221401598653",
  appId: "1:221401598653:web:d7c634ded3245d9f0885d4"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;