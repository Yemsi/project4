//import { usersCollectionRef, tweetsCollectionRef } from "../firebase/config";
import { getRefCollection } from "../firebase/config";
import { addDoc, getDocs } from "firebase/firestore";
import { useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const useUsers = () => {
    const { setLoading, userRegistred, 
      // eslint-disable-next-line
      setUserRegistred, setUsersList, setGoogleUser } = useContext(UserContext);
    const navigate = useNavigate();
  
//get new user
    const getAllUsers = async () => {
      try {
        const querySnapshot = await getDocs(getRefCollection("users"));
        const usersCollection =
          querySnapshot.docs.map(doc => {
            return {
              ...doc.data(),
            }
          })
        setUsersList(usersCollection);
      } catch (e) {
        console.log(e);
      }
    }
  
    const addNewUser = async (userObject) => {
      try {
        const docRef = await addDoc(getRefCollection("users"), userObject);
        setLoading(false);
        //New user impulsa el useEffect
        //// eslint-disable-next-line
        docRef && setUserRegistred(true);
        await getAllUsers();
        setGoogleUser(); 
      } catch (e) {
        console.error("Error adding user: ", e);
      }
    }
  
    useEffect(() => {
      if (userRegistred) {
        navigate("/feed", { replace: true });
        // eslint-disable-next-line
        setUserRegistred(false); //Reset user
      }
    }, [userRegistred])
  
    return { addNewUser, getAllUsers };
  }
  
  export default useUsers;