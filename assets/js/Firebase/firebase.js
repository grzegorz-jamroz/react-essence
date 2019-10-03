import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
  apiKey: "apiKey",
  authDomain: "authDomain",
  databaseURL: "databaseURL",
  projectId: "projectId",
  storageBucket: "storageBucket",
  messagingSenderId: "messagingSenderId",
  appId: "appId",
  measurementId: "measurementId"
};

firebase.initializeApp(config);

export const firestore = firebase.firestore();
export default firebase;
