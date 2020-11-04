import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAEssv-_fyNIBVl1x3wCktGbGIHyWtuHCE",
    authDomain: "faceclone-427ff.firebaseapp.com",
    databaseURL: "https://faceclone-427ff.firebaseio.com",
    projectId: "faceclone-427ff",
    storageBucket: "faceclone-427ff.appspot.com",
    messagingSenderId: "56119616570",
    appId: "1:56119616570:web:060c60ab13a1391816c103",
    measurementId: "G-W13C1YLMQB"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;