import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAK0cmUR3DZTmoCyHLeTQKLy4_-VRpl-bw",
    authDomain: "clone-554c6.firebaseapp.com",
    projectId: "clone-554c6",
    storageBucket: "clone-554c6.appspot.com",
    messagingSenderId: "236621322909",
    appId: "1:236621322909:web:d2b42aebab1cd56de0d274",
    measurementId: "G-LK6QY4GG73"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db= firebaseApp.firestore();
  const auth=firebase.auth();
  const provider =new firebase.auth.GoogleAuthProvider();

  export {db,auth,provider};