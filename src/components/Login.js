import React,{useState,useEffect} from 'react'
import {useUserAuth} from '../Context/UserAuthContext'
import {Link, useNavigate} from 'react-router-dom'
import gambar from '../Assets/login.svg'
import google from '../Assets/google.svg'
import './Login.css'
const Login = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const {logIn,siginWithGoogle,setInfoUser,infoUser,user} = useUserAuth()
    const [error,setError] = useState('')
    const [message,setMessage] = useState('')
    const [typePassword,setTypePassword] = useState('password')
    const navigate = useNavigate()
    const handleSubmit =async(e)=>{
        e.preventDefault()
    try {
        await logIn(email,password)
        navigate('/home')

    } catch (error) {
    setError(error.message)
    }
    }
    const handleGoogle =async()=>{
try {
    await siginWithGoogle()
} catch (error) {
    
}
    }
   
useEffect(() => {
   
    if(user !== null){
        navigate('/home')
    }
    
},[user])
const openpasswordDialog= (e)=>{
    setPassword(e)
    if(typePassword ==='password'){
        setTypePassword("text")
        return;
    }else{
        setTypePassword("password")
    }
}
const contoh = (e)=>{
    e.preventDefault()
}
return (
    <div className="container-home">
         <div className="form-group">
            <div className="right-group">
                <div className="gambar">
                    <img src={gambar} alt='gambar' className="img-right"/>
                </div>
            </div>
            <div className="left-group">
              <div className="form">
                <div className='text'>
                    <h1 className='welcome'>Login</h1>
                </div>
                <div className='input'>
                <form onSubmit={handleSubmit}>
                    <div className='email-input'>
                    <label>email</label>
                    <input className='input-name'type="text" onChange={(e)=> setEmail(e.target.value)}/>
                    </div>
                    <div className='password-input'>
                    <label>password</label>
                    <input  className='input-name' type={typePassword}onChange={(e)=>setPassword(e.target.value)}/>
                    <button onClick={()=>openpasswordDialog()}>Show Pass</button>
                    <div className='submit'>
                        <button type="submit">Login</button>
                    </div>
                    </div>
                </form>
                </div>
                <div className='google' onClick={handleGoogle}>
                    <div className='google-logo'>
             <img src={google}/>
             </div>
             <div className='google-input'>
             <p>Login Dengan Google</p>
             </div>
          
                </div>
                <div>
                <Link className='link' to='/Register'>Belum Punya Akun?</Link> 
                </div>
              </div>
            </div>
         </div>

               
    </div>
  )
}

export default Login