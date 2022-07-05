import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithRedirect,
  GoogleAuthProvider, signInWithPopup,updateProfile
} from "firebase/auth";
import { auth } from "../firebase/Fb";
import {useNavigate} from 'react-router-dom'
const userAuthContext = createContext();
export function UserAuthContextProvider({ children }) {
  const navigate = useNavigate()
  const [user, setUser] = useState({});
  const [isLoading,setIsLoading] = useState(false)
  const [username,setUserName] = useState('')
  const [infoUser,setInfoUser] = useState({})
  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  const updateUserProfile =async(user,nama)=>{
  updateProfile((user),{
    displayName: nama
  })
  }
  async function signUp(email, password) {
    const data = await createUserWithEmailAndPassword(auth, email, password)
     await updateUserProfile(data.user,username)
  }
 function logOut() {
    return signOut(auth);
  }
  const siginWithGoogle =  ( )=>{
    const googleProvider = new GoogleAuthProvider()
    signInWithRedirect(auth, googleProvider)
 }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      console.log(currentuser)
     setUser(currentuser)
     console.log(user)

    });
        return () => {
      unsubscribe();
    };
  }, []);
  return (
    <userAuthContext.Provider
      value={{ user, logIn, signUp, logOut,username,setUserName,siginWithGoogle,setInfoUser,infoUser}}
    >
      {children}
    </userAuthContext.Provider>
  );
}
export function useUserAuth() {
  return useContext(userAuthContext);
}