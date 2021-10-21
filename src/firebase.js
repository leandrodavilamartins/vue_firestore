import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

const firebaseConfig = {
   //here comes the config 
   apiKey: "AIzaSyAC5Rw2VTilel6x6ngRzpXw6dGvIKv-g2U",
   authDomain: "smart-hommie-619b6.firebaseapp.com",
   databaseURL: "https://smart-hommie-619b6-default-rtdb.firebaseio.com",
   projectId: "smart-hommie-619b6",
   storageBucket: "smart-hommie-619b6.appspot.com",
   messagingSenderId: "997418377548",
   appId: "1:997418377548:web:5aaf0c7ccaac328768efe9"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  export const db = firebaseApp.firestore();

  