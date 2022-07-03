import React,{useState,useEffect} from 'react'
import {useUserAuth} from '../Context/UserAuthContext'
import {useNavigate} from 'react-router-dom'

const Login = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const {logIn,siginWithGoogle,googleUser,setInfoUser,infoUser} = useUserAuth()
    const [error,setError] = useState('')
    const [message,setMessage] = useState('')
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
const data = ({
    token : googleUser.accessToken,
    displayName : googleUser.displayName,
    photo : googleUser.photoURL,
    id : googleUser.uid
})    
// setInfoUser(data)
useEffect(() => {
    setInfoUser(data)
    if(!infoUser.token){
        navigate('/')
        setMessage("Token Anda Sudah Expired")
    }

},[infoUser.token])
console.log(infoUser)
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
            <div>
                <button onClick={()=>siginWithGoogle()} >Masuk Dengan Gogle</button>
            </div>
    </div>
  )
}

export default Login