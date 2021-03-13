import firebase from 'firebase';

const Config = {
    apiKey: "AIzaSyCzNi7i5hxErTHaIG4_4AFv-6lwDs3dztE",
    authDomain: "tiktak-4aa5e.firebaseapp.com",
    projectId: "tiktak-4aa5e",
    storageBucket: "tiktak-4aa5e.appspot.com",
    messagingSenderId: "444714585818",
    appId: "1:444714585818:web:da442c2f1c57d686271fe3"
  };
  
 
  if (!firebase.apps.length) {
    firebase.initializeApp(Config);
 }else {
  firebase.initilizeApp(Config); // if already initialized, use that one
 }
  export default Config;