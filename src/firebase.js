import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDm2JP75TbOu-nCQ604baDwS2SGhfDXDAY',
  authDomain: 'slack-clone-39efb.firebaseapp.com',
  projectId: 'slack-clone-39efb',
  storageBucket: 'slack-clone-39efb.appspot.com',
  messagingSenderId: '748721262334',
  appId: '1:748721262334:web:cc001afcd3b2e6b619dfaf',
  measurementId: 'G-0N5WLLGHVX',
};

// conecta com o back-end
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
