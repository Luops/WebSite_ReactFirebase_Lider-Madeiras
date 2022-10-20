import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import {getStorage, ref, listAll} from "firebase/storage"


const firebaseConfig = {
  apiKey: "AIzaSyCw5lVJf1OvJ-xx7pUNozOrmhs4wQaGxnk",
  authDomain: "lidermadeiras-login.firebaseapp.com",
  projectId: "lidermadeiras-login",
  storageBucket: "lidermadeiras-login.appspot.com",
  messagingSenderId: "1091697869316",
  appId: "1:1091697869316:web:f9256506e51d13f402ab51",
  measurementId: "G-3SGMV3E1MG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app); //banco de dados
export { db };
export const storage = getStorage(app)