import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBoiO33n_QeyeNq-J3bMmEWnB58mOKpZaY",
    authDomain: "collectionables-store.firebaseapp.com",
    projectId: "collectionables-store",
    storageBucket: "collectionables-store.appspot.com",
    messagingSenderId: "343897456072",
    appId: "1:343897456072:web:c9a7dbb54feb2300bad4fd"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);