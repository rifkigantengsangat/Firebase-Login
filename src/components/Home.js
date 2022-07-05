import React,{useEffect, useState} from 'react'
import { useUserAuth } from '../Context/UserAuthContext'
import {useLocation,useNavigate} from 'react-router-dom'
import Cookies from 'js-cookie'

const Home = () => {
  const navigate = useNavigate()
   const [ubah,setUbah] = useState('')
   const {logOut,user} = useUserAuth()
   const [expire,setExpired] = useState(600)

const handlelogOut =async ()=>{
  await logOut()
 
  navigate('/')
 

}

Cookies.set("token",user.accessToken)
useEffect(() => {
  
  
   setTimeout(async()=>{
    await logOut()
   Cookies.remove("token")
   },expire)
},[expire])
   return (
    <>
    <div>HI { user?.displayName } </div>
    <button onClick={handlelogOut}>Logout</button>
    </>
  )
}

export default Home