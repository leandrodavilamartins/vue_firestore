import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

const firebaseConfig = {
   //here comes the config 
   apiKey: process.env.UE_APP_FIREBASE_API_KEY,

  authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,

  databaseURL: process.env.VUE_APP_FIREBASE_DB_URL,

  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,

  storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,

  messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,

  appId: process.env.VUE_APP_FIREBASE_APP_ID

 
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  export const db = firebaseApp.firestore();

  