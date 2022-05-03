import { useContext } from "react";
import {
    addDoc,
    getDoc,
 //   getDocs,
 //   doc,
  //  deleteDoc,
 //   updateDoc,
} from "firebase/firestore";
import { tweetsCollectionRef } from "../firebase/configFirrebase.js";
//import { TweetsContext } from "../contexts/TweetsContext";

function useTweetCollection() {
  // Consumimos el contexto
   // const { setListaTweets } = useContext(TweetsContext);

// Get all docs    
const getAllDocs = async () => {
  try {
        const querySnapshot = await getDocs(tweetsCollectionRef);

        const tweetsArray = querySnapshot.docs.map((doc) => {
        return {
            ...doc.data(),
                };
      });
      console.log(
      "🚀 ~ file: useTweetCollection.js ~ line 16 ~ tweetsArray ~ tweetsArray",
      tweetsArray     );

//       // actualizar mi Arreglo Global de tweets
//         setListaTweets(tweetsArray);
//     } catch (e) {
//         console.log(e);
//     }
//     };

  // add Doc (add tweet)
    const addNewTweet = async (tweetObject) => {
    try {
        const docRef = await addDoc(tweetsCollectionRef, tweetObject);
        console.log("Document written with ID: ", docRef.id);
      // get updated docs
        //await getAllDocs();
    } catch (e) {
        console.error("Error adding document: ", e);
    }
    };

//   // delete docuemnt
//     const deleteTweet = async (idDocument) => {
//     console.warn("Eliminand doc: ", idDocument);
//     // get doc reference
//     const refDocument = doc(tweetsCollectionRef, idDocument);

//     // borramos
//     await deleteDoc(refDocument);

//     // get updated docs
//     await getAllDocs();
//     };

//   // add likes
//     const addLikes = async (idDocument) => {
//     const docRef = await doc(tweetsCollectionRef, idDocument);
//     console.log("Adding likes...", idDocument);
//     const docSnap = await getDoc(docRef);

//     await updateDoc(docRef, {
//         likes: docSnap.data().likes ? docSnap.data().likes + 1 : 1,
//     });

//     // get updated docs
//     await getAllDocs();
//     };

    return { addNewTweet, 
      //getAllDocs, deleteTweet, addLikes 
    };
}

export default useTweetCollection;