// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCeuVsguuidPs2dJR1aB-mzoIKLDliz3ws',
  authDomain: 'car-hunter-b25e4.firebaseapp.com',
  projectId: 'car-hunter-b25e4',
  storageBucket: 'car-hunter-b25e4.appspot.com',
  messagingSenderId: '361469676277',
  appId: '1:361469676277:web:6e7c6fd0416be83baad3bc'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app