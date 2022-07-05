import React, { useState,useContext,useEffect} from 'react'
import {useUserAuth} from '../Context/UserAuthContext'
import {useNavigate,Link} from 'react-router-dom'
import './register.css'

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
  

  return (
    <div className="container-signup">
        <div className='card'>
            <div className='container-card'>
        <form onSubmit={handleSubmit}>
            <div className='form-div'>
        <label className='label'>
                username
                <input className='input' type="text" name="username" onChange={(e)=> setUserName(e.target.value)}/>
            </label>
            </div>
            <div className='form-div'>
            <label className='label'>
                email
                <input type="text"  className='input'name="username" onChange={(e)=> setEmail(e.target.value)}/>
            </label>
            </div>
            <div className='form-div'>
            <label className='label'>
                passWord
                <input type="text" className='input' name="password" onChange={(e)=> setPassword(e.target.value)}/>
            </label>
            </div>
            <button type='submit'>Masuk</button>
            <Link to='/'> Sudah Punya Akun</Link>
        </form>
        <p>{error}</p>
       
        </div>
        </div>
    </div>
  )
}

export default Register