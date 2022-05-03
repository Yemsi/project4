import './App.css';

import { tweetsCollectionRef } from "./firebase/configFirrebase";
import {addDoc, collection, getDocs} from "firebase/firestore";
import { useEffect } from "react";
import TweetForm from './TweetForm';


function App() {

useEffect ( ()=> {       
//1. subir tweet a firebase
const addTestDoc = async () => {
    try {
        const docRef = await addDoc( tweetsCollectionRef,{
          tweet: "1",
          author: "3",
          likes: 0, 
        });
        console.log ("document id:", docRef.id);
        } catch (e){
            console.error ("error adding doc:", e)
        }
    
    }
    addTestDoc()
}, []);

  return (
    <div className="App">
      <TweetForm/>
    </div>
  );
}

export default App;
