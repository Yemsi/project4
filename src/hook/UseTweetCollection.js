import { useContext } from "react";
import {
  addDoc,
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
  getDoc,
} from "firebase/firestore";
import { tweetsCollectionRef } from "../firebase/configFirrebase";
import { TweetsContext } from "../context/TweetContext";
import Swal from 'sweetalert2';

function useTweetCollection() {
  const { setTweetsArray } = useContext(TweetsContext);

  const getTweets = async () => {
    try {
      const querySnapshot = await getDocs(tweetsCollectionRef);
      const tweetsCollectionArray = querySnapshot.docs.map((doc) => {
        return {
          ...doc.data(),
          id: doc.id,
        };
      });
      setTweetsArray(tweetsCollectionArray);
    } catch (e) {
      console.log(e);
    }
  };

  const addNewTweet = async (tweetObject) => {
    try {
      const docRef = await addDoc(tweetsCollectionRef, tweetObject);
      await getTweets();
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const deleteTweet = async (tweetId) => {
    try {
      await deleteDoc(doc(tweetsCollectionRef, tweetId));
      await getTweets();
      await Swal.fire({
        title: 'Delete',
        text: 'Do you want to continue?',
        icon: 'error',
        confirmButtonText: 'ok'
      })
    } catch (e) {
      console.error("Error deleting document: ", e);
    }
  };

  const addLikes = async (tweetId) => {
    const docRef = await doc(tweetsCollectionRef, tweetId); //*no tiene efecto el await
    const docSnap = await getDoc(docRef);

    await updateDoc(docRef, {
      likes: docSnap.data().likes ? docSnap.data().likes + 1 : 1,
    });

    await getTweets();
  };

  return { addNewTweet, getTweets, deleteTweet, addLikes };
}

export default useTweetCollection;