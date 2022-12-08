import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
import { getAuth , GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDUooTgsRR4_Q62sje-xEjBB8FxRuD7CQQ",
    authDomain: "intro-firebase-85707.firebaseapp.com",
    projectId: "intro-firebase-85707",
    storageBucket: "intro-firebase-85707.appspot.com",
    messagingSenderId: "569391107724",
    appId: "1:569391107724:web:a2e6819bf8dc831d4475a9"
};

const firebaseApp = initializeApp(firebaseConfig);
const database = getFirestore();
const getRefCollection = (collectionName) => {
return collection(database, collectionName);
}

//AUTH
const googleProvider = new GoogleAuthProvider();
const auth = getAuth();
/* const persistence = setPersistence(auth, browserLocalPersistence); */

export {googleProvider, auth, getRefCollection}
export default firebaseApp;