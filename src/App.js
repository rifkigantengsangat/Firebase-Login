import './App.css';
import Register from './components/Register';
import Home from './components/Home';
import Login from './components/Login';
import {Routes,Route,Outlet,Navigate} from 'react-router-dom'
import {UserAuthContextProvider,useUserAuth}from './Context/UserAuthContext'

function App() {
  
  
   
  
  return (
    <>
    <UserAuthContextProvider>
      
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/Register' element={<Register/>} />
      </Routes>
     
    </UserAuthContextProvider>
    </>
  );
}

export default App;
