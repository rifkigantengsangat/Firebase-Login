import React, { useState,useContext,useEffect} from 'react'
import {useUserAuth} from '../Context/UserAuthContext'
import {useNavigate,Link} from 'react-router-dom'

const Register = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [password, setPassword] = useState("");
    const { signUp,setUserName,user,username} = useUserAuth();
    let navigate = useNavigate();

    const handleSubmit = async(e)=>{
        e.preventDefault();
        try {
            await signUp(email,password )
        
            navigate('/')
        } catch (error) {
            setError(error.message);
        }
    }
useEffect(() => {
  localStorage.setItem('user',JSON.stringify(username))
},[username])
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <label>
                username
                <input type="text" name="username" onChange={(e)=> setUserName(e.target.value)}/>
            </label>
            <label>
                email
                <input type="text" name="username" onChange={(e)=> setEmail(e.target.value)}/>
            </label>
            <label>
                passWord
                <input type="text" name="password" onChange={(e)=> setPassword(e.target.value)}/>
            </label>
            <button type='submit'>Masuk</button>
        </form>
        <p>{error}</p>
        <Link to='/'> Sudah Punya Akun</Link>
    </div>
  )
}

export default Register