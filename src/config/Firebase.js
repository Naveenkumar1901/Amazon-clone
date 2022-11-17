import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCbP3MOlxVkHhMhYBEJU7GHaRx8PEaE9tc",
  authDomain: "fir-4bc2d.firebaseapp.com",
  projectId: "fir-4bc2d",
  storageBucket: "fir-4bc2d.appspot.com",
  messagingSenderId: "645851913565",
  appId: "1:645851913565:web:fb4772148db0fb919c1cb4",
  measurementId: "G-SJ9QY81B18",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

const provider = new GoogleAuthProvider();
export { db, auth, storage ,provider};
