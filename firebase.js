// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import * as firebase from 'firebase';
import "firebase/firestore";
import "firebase/auth";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC678FiERqJrx2WzFeChUwinMBpdoYmAAw",
  authDomain: "signal-clone-c40e7.firebaseapp.com",
  projectId: "signal-clone-c40e7",
  storageBucket: "signal-clone-c40e7.appspot.com",
  messagingSenderId: "585499252847",
  appId: "1:585499252847:web:978eaed605a02b8ecad59a",
  measurementId: "G-S2Q0EY357J"
};

  let app;
  
  if (firebase.apps.length == 0){
    app= firebase.initializeApp(firebaseConfig);
  }else{
    app=firebase.app();
  }
  const db =app.firestore();
  const auth = firebase.auth();

  export{db ,auth};

   