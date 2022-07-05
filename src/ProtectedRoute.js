import {useUserAuth} from './Context/UserAuthContext'
import { Navigate } from 'react-router-dom'
 const ProtectedRoute =({children})=>{
    const{user} = useUserAuth()

    if(!user){
        return <Navigate to="/" replace/>
    }
    return children

}
export default ProtectedRoute