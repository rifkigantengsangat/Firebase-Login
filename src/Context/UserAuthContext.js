import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider, signInWithPopup
 
  
} from "firebase/auth";
import { auth } from "../firebase/Fb";
import {useNavigate} from 'react-router-dom'
const userAuthContext = createContext();
export function UserAuthContextProvider({ children }) {
  const navigate = useNavigate()
  const [user, setUser] = useState({});
  const [isLoading,setIsLoading] = useState(false)
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
  const siginWithGoogle =async ( )=>{
   try {
    setIsLoading(true)
     const res = await signInWithPopup(auth,googleProvider)
     setIsLoading(false)
     if(!isLoading){
      setGoogleUser(res?.user)
      navigate('/home')

     }
   } catch (error) {
     console.log(error)
   }
 }
 console.log(googleUser)
 console.log(isLoading)
  
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