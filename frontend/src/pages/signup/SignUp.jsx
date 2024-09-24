import React, { useState } from 'react'
import GenderCheckbox from './gendercheckbox'
import { Link } from 'react-router-dom'
import useSignup from '../../hooks/useSignup';

const SignUp = () => {
    const[inputs,setInputs]=useState({
        fullName: '',
        username:'',
        password:'',
        confirmPassword:'',
        gender:''
    }) ;

    const{loading,signup}=useSignup()
    const handlecheckboxchange=(gender)=>{
        setInputs({...inputs,gender})
    }
    const handleSubmit=async(e)=>{
        e.preventDefault();
        await signup(inputs)
    }
  return <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
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
  <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg
  bg-opacity-0'>
    <h1 className='text-3xl font-semibold text-center text-gray-300'>
        Sign Up <span className='text-blue-500'>A$hZo|\|e</span>
    </h1>
    <form onSubmit={handleSubmit}>
        <div>
            <label className='label p-2'>
                <span className='text-base label-text'>Full Name</span>
            </label>
            <input type='text' placeholder='Eg. Shaik Ashraf' className='w-full input input-bordered h-10'
            value={inputs.fullName}
            onChange={(e)=>setInputs({...inputs,fullName:e.target.value})}/>
        </div>
        <div>
        <label className='label p-2'>
            <span className='text-base label-text'>Username</span>
            </label>
            <input type='text' placeholder='Eg. ShaikAshraf' className='w-full input input-bordered h-10'
            value={inputs.username}
            onChange={(e)=>setInputs({...inputs,username:e.target.value})}/>
        </div>
        <div>
        <label className='label p-2'>
            <span className='text-base label-text'>Password</span>
            </label>
            <input type='password' placeholder='Enter Password' className='w-full input input-bordered h-10'
            value={inputs.password}
            onChange={(e)=>setInputs({...inputs,password:e.target.value})}/>
        </div>
        <div>
        <label className='label p-2'>
            <span className='text-base label-text'>Confirm Password</span>
            </label>
            <input type='pasword' placeholder='Re-enter Password' className='w-full input input-bordered h-10'
            value={inputs.confirmPassword}
            onChange={(e)=>setInputs({...inputs,confirmPassword:e.target.value})}/>
        </div>
        {/* gender checkbox goes here*/}
        <GenderCheckbox oncheckboxchange={handlecheckboxchange}selectedGender={inputs.gender}/>
        <Link to={"/Login"} className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block' href='#'>
            Already have an account
        </Link>
        <div>
            <button className='btn btn-block btn-sm mt-2 border border-slate-700'
            disabled={loading}>
                {loading? <span className='loading loading-spinner'></span>:"Sign Up"}
            </button>
        </div>
    </form>
  </div>
  </div>
}

export default SignUp
 


{/*
    
***********STARTER CODE**************
import React from 'react'
import GenderCheckbox from './gendercheckbox'

const SignUp = () => {
  return <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
  {/* Fullscreen Video Background }
  <video 
  autoPlay 
  loop 
  muted 
  className='absolute inset-0 w-full h-full object-cover -z-10'
>
  <source src="robot.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video> 
<div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg
bg-opacity-0'>
  <h1 className='text-3xl font-semibold text-center text-gray-300'>
      Sign Up <span className='text-blue-500'>A$hZo|\|e</span>
  </h1>
  <form>
      <div>
          <label className='label p-2'>
              <span className='text-base label-text'>Full Name</span>
          </label>
          <input type='text' placeholder='Eg. Shaik Ashraf' className='w-full input input-bordered h-10'/>
      </div>
      <div>
      <label className='label p-2'>
          <span className='text-base label-text'>Username</span>
          </label>
          <input type='text' placeholder='Eg. ShaikAshraf' className='w-full input input-bordered h-10'/>
      </div>
      <div>
      <label className='label p-2'>
          <span className='text-base label-text'>Password</span>
          </label>
          <input type='pasword' placeholder='Enter Password' className='w-full input input-bordered h-10'/>
      </div>
      <div>
      <label className='label p-2'>
          <span className='text-base label-text'>Confirm Password</span>
          </label>
          <input type='pasword' placeholder='Re-enter Password' className='w-full input input-bordered h-10'/>
      </div>
      {/* gender checkbox goes here}
      <GenderCheckbox/>
      <a className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block' href='#'>
          Already have an account
      </a>
      <div>
          <button className='btn btn-block btn-sm mt-2 border border-slate-700'>Sign Up</button>
      </div>
  </form>
</div>
</div>
}

export default SignUp */}