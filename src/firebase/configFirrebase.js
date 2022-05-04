// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection} from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUooTgsRR4_Q62sje-xEjBB8FxRuD7CQQ",
  authDomain: "intro-firebase-85707.firebaseapp.com",
  projectId: "intro-firebase-85707",
  storageBucket: "intro-firebase-85707.appspot.com",
  messagingSenderId: "569391107724",
  appId: "1:569391107724:web:a2e6819bf8dc831d4475a9"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// get database
const db = getFirestore();
// Ref collection tweets
const tweetsCollectionRef = collection(db, "tweets");

export { db, tweetsCollectionRef };

export default app;
