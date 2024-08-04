// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6L6ty1DrlXekMNWDuyPmyhTVnr88Ca2w",
  authDomain: "pantryapp-fb89a.firebaseapp.com",
  projectId: "pantryapp-fb89a",
  storageBucket: "pantryapp-fb89a.appspot.com",
  messagingSenderId: "988932073413",
  appId: "1:988932073413:web:78b54294f165ddf9a44dac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)
export{app,firestore}