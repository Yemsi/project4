import {
    getAuth,
    signInWithPopup,
    signOut,
    GoogleAuthProvider,
  } from "firebase/auth";
  import { useContext } from "react";
  import { UserContext } from "../context/UserContext.js";
  
  function useGoogleAuthentication() {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
  
    const { setUser } = useContext(UserContext);
  
    const login = async () => {
      try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        setUser(user);
      } catch (error) {
        console.log(error);
      }
    };
  
    const logout = async () => {
      try {
        await signOut(auth);
        setUser(null);
      } catch (error) {
        console.log(error);
      }
    };
  
    return { login, logout };
  }
  
  export default useGoogleAuthentication;