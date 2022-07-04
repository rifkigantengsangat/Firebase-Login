import React,{useEffect, useState} from 'react'
import { useUserAuth } from '../Context/UserAuthContext'
const Home = () => {
   const [username,setUserName] = useState([])
   const {infoUser} = useUserAuth()
useEffect(()=>{
    const item = JSON.parse(JSON.stringify(localStorage.getItem('user')))
    const withoutFirstAndLast = item.slice(1, -1);
    if(withoutFirstAndLast){
        setUserName(withoutFirstAndLast)
    }
},[])
   return (
    <div>HI {username ===null || username === '' ? infoUser.displayName : username} </div>
  )
}

export default Home