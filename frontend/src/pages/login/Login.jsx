import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useLogin from '../../hooks/useLogin';

const Login = () => {
  const[username,setUsername]=useState("");
  const[password,setPassword]=useState("");

  const {loading,login}=useLogin()

  const handleSubmit =async(e)=>{
    e.preventDefault();
    await login(username,password)
  }

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      {/* Fullscreen Video Background */}
      <video 
        autoPlay 
        loop 
        muted 
        className='absolute inset-0 w-full h-full object-cover -z-10'
      >
        <source src="robot.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Login Form */}
      <div className='w-full max-w-md p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30'>
        <h1 className='text-3xl font-semibold text-center text-gray-300'>
          Login 
          <span className='text-blue-500'> A$hZo|\|e</span>
        </h1>
        <form onSubmit={ handleSubmit} className='mt-4'>
          <div>
            <label className='block text-sm font-medium text-gray-300 mb-1'>
              Username</label>
            <input 
              type='text' 
              placeholder='Enter your username' 
              className='w-full input input-bordered h-10 focus:ring focus:ring-blue-300'
            value={username}
            onChange={(e)=> setUsername(e.target.value)}
            />
          </div>
          <div>
          <label className='label'>
                <span className='text-base label-text text-gray-300 mb-1'>Password</span>
            </label>
            <input 
              type='password'
              placeholder='Enter password'
              className='w-full input input-bordered h-10'
              value={password}
            onChange={(e)=> setPassword(e.target.value)}/>
          </div>
          <Link to="/signup" className='text-sm  text-gray-300 mb-1 hover:underline hover:text-blue-600 mt-2 inline-block'>
            {"Dont't"} have an account?
          </Link>

          <div>
            <button className='btn btn-block btn-sm mt-2'
            disabled={loading}>
              {loading? <span className='loading loading-spinner'></span>:"Login"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;


{
    
/* 

*************STARTER CODE******************
import React from 'react';

const Login = () => {
  return (
    <div className='relative flex items-center justify-center min-h-screen'>
      {/* Fullscreen Video Background }
      <video 
        autoPlay 
        loop 
        muted 
        className='absolute inset-0 w-full h-full object-cover -z-10'
      >
        <source src="man.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Login Form }
      <div className='w-full max-w-md p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30'>
        <h1 className='text-3xl font-semibold text-center text-gray-300'>
          Login to 
          <span className='text-blue-500'> ChatAPP</span>
        </h1>
        <form className='mt-4'>
          <div>
            <label className='block text-sm font-medium text-gray-300 mb-1'>
              Username
            </label>
            <input 
              type='text' 
              placeholder='Enter your username' 
              className='w-full input input-bordered h-10 focus:ring focus:ring-blue-300'
            />
          </div>
          <div>
          <label className='label'>
                <span className='text-base label-text text-gray-300 mb-1'>Password</span>
            </label>
            <input 
              type='password'
              placeholder='Enter password'
              className='w-full input input-bordered h-10'/>
          </div>
          <a href="#" className='text-sm  text-gray-300 mb-1 hover:underline hover:text-blue-600 mt-2 inline-block'>
            {"Dont't"} have an account?
          </a>

          <div>
            <button className='btn btn-block btn-sm mt-2'>Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
*/}
