import React,{useEffect, useState} from 'react'
import { useUserAuth } from '../Context/UserAuthContext'
import {useLocation,useNavigate} from 'react-router-dom'
import Cookies from 'js-cookie'
import Navbar from './Navbar'
import Category from './Category'


const Home = () => {
  const navigate = useNavigate()
   const [ubah,setUbah] = useState('')
   const {logOut,user} = useUserAuth()
   const [expire,setExpired] = useState(60000000)

const handlelogOut =async ()=>{
  await logOut()
 
  navigate('/')
 

}

// Cookies.set("token",user.accessToken)
// useEffect(() => {
  
  
//   //  setTimeout(async()=>{
//   //   await logOut()
//   //  Cookies.remove("token")
//   //  },expire)
//   //  if(Cookies.get("token")===null){
//   //   // navigate('/')
//   //  }
   
   
// },[expire])
   return (
    <>
    <Navbar/>  
    <Category/>
    </>

  )
}

export default Home