import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyCN01-1Gi4vHf0wPwNCBGwwktENkbiW9sU",
    authDomain: "webgram-c0ec4.firebaseapp.com",
    databaseURL: "https://webgram-c0ec4.firebaseio.com",
    projectId: "webgram-c0ec4",
    storageBucket: "webgram-c0ec4.appspot.com",
    messagingSenderId: "870244595610",
    appId: "1:870244595610:web:ddbe8c22221e849dfe2c23"
  };
  
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { projectStorage, projectFirestore, timestamp };