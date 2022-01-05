// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArvOGmrTUFQCn1JMfDzjSHETxZq1lvS-I",
  authDomain: "recovery-eb8a1.firebaseapp.com",
  projectId: "recovery-eb8a1",
  storageBucket: "recovery-eb8a1.appspot.com",
  messagingSenderId: "621440163705",
  appId: "1:621440163705:web:16868c5a565afc935959a8"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
// @ts-ignore
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {timestamp};

// @ts-ignore
export default firebaseApp.firestore();