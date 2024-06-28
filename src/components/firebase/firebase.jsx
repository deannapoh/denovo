// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJs2nvMgk8wYzRn8hTE-hlKzHiuK_tCN8",
  authDomain: "denovo-f25f2.firebaseapp.com",
  projectId: "denovo-f25f2",
  storageBucket: "denovo-f25f2.appspot.com",
  messagingSenderId: "581813144261",
  appId: "1:581813144261:web:a8b74f6c7807ac59a2feac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, onAuthStateChanged, storage };