import React,{useState} from 'react'
import {useUserAuth} from '../Context/UserAuthContext'
import {useNavigate} from 'react-router-dom'

const Login = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const {logIn} = useUserAuth()
    const [error,setError] = useState('')
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
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>
                Email
                <input type="text" name="email" onChange={(e)=>setEmail(e.target.value)}/>
            </label>
            <label>
                Passwords
                <input type="text" name="email" onChange={(e)=>setPassword(e.target.value)}/>
            </label>
            <button type='submit'>Masuk</button>
            </form>
            <p>{error}</p>
    </div>
  )
}

export default Login