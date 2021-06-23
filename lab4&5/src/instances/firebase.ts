import firebase from 'firebase';
import firebaseConfig from '../firebaseConfig';

const conf = firebaseConfig;
const firebaseApp = firebase.initializeApp(conf.firebase);
const db = firebaseApp.firestore();

export default db;