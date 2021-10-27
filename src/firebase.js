import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

const firebaseConfig = {
   //here comes the config 

 
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  export const db = firebaseApp.firestore();

  