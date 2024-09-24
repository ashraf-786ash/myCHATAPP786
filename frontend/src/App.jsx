import { useState } from 'react';
import './App.css';
import Login from './pages/login/login';
import SignUp from './pages/signup/signup';
import Home from './pages/home/home';
import {Navigate, Routes, Route } from 'react-router-dom'; // Correct import for Routes and Route
import{Toaster} from 'react-hot-toast';
import { useAuthContext } from './context/Authcontext';


function App() {
  const [count, setCount] = useState(0);
  const {authUser}=useAuthContext();

  return (
    <div className='p-4 h-screen flex items-center justify-center'>
      {/* Set up your routes correctly */}
      <Routes>
        <Route path='/' element={authUser?<Home />:<Navigate to={'/login'}/>} />
        <Route path='/login' element={authUser?<Navigate to='/' />:<Login />} />
        <Route path='/signup' element={authUser?<Navigate to='/' />:<SignUp/>} />
      </Routes>
      <Toaster/>
    </div>
  );
}

export default App;

