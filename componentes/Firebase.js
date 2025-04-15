
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBF07Kn1fTZtP4HJJgq-zDTseR0482iETk",
  authDomain: "meutesteetec.firebaseapp.com",
  projectId: "meutesteetec",
  storageBucket: "meutesteetec.firebasestorage.app",
  messagingSenderId: "977752561530",
  appId: "1:977752561530:web:14ec0cf17221dc4c5668c3"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {auth,db};

