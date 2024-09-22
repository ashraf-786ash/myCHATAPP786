import { useState } from 'react';
import './App.css';
import Login from './pages/login/login';
import SignUp from './pages/signup/signup';
import Home from './pages/home/home';
import { Routes, Route } from 'react-router-dom'; // Correct import for Routes and Route
import{Toaster} from 'react-hot-toast';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='p-4 h-screen flex items-center justify-center'>
      {/* Set up your routes correctly */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
      <Toaster/>
    </div>
  );
}

export default App;

