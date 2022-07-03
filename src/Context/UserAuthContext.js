import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider, signInWithPopup
 
  
} from "firebase/auth";
import { auth } from "../firebase/Fb";

const userAuthContext = createContext();
export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState({});
  const [googleUser, setGoogleUser] = useState({});
  const [username,setUserName] = useState('')
  const [infoUser,setInfoUser] = useState({})
  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function signUp(email, password) {
     return createUserWithEmailAndPassword(auth, email, password)
  }
  function logOut() {
    return signOut(auth);
  }
  const googleProvider = new GoogleAuthProvider()
  const siginWithGoogle =async ()=>{
   try {
     const res = await signInWithPopup(auth,googleProvider)
     setGoogleUser(res.user)
   } catch (error) {
     console.log(error)
   }
 }
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
   
     setUser(currentuser)
    
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <userAuthContext.Provider
      value={{ user, logIn, signUp, logOut,username,setUserName,siginWithGoogle,googleUser,setInfoUser,infoUser}}
    >
      {children}
    </userAuthContext.Provider>
  );
}
export function useUserAuth() {
  return useContext(userAuthContext);
}