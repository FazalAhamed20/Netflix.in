import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const Signup = () => {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [error,setError]=useState('')
  const {signUp,user}=UserAuth()
  let navigate=useNavigate()
  const Handle=async (e)=>{
    e.preventDefault()
    try {
      
      await signUp(email,password)
      navigate('/')
    
      
    } catch (error) {
      alert(error.message)
      
    }

  }
  return (
    <div>
      <div className='w-full h-screen'>
      <img
          className='hidden sm:block absolute w-full h-full object-cover'
          src='https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg'
          alt='/'
        />
        <div className='absolute w-full h-screen bg-black/60 top-0 left-0'></div>
        <div className='fixed w-full px-4 py-24 z-50'>
          <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
            <div className='max-w-[320px] mx-auto py-16'>
              <h1 className='text-3xl font-bold '>Sign Up</h1>
              <form onSubmit={Handle}  className='w-full flex flex-col py-4'>
                <input onChange={(e)=>setEmail(e.target.value)} className='p-3 my-2 bg-gray-700 rounded' type="email" placeholder='Email' autoComplete='email'/>
                <input onChange={(e)=>setPassword(e.target.value)} className='p-3 my-2 bg-gray-700 rounded' type="password" placeholder='Password' autoComplete='current-password' />
                <button className='rounded bg-red-600 font-bold py-3 my-6'>Sign Up</button>
                <div className='flex justify-between items-center text-sm text-gray-600'>
                  <p><input className='mr-2' type="checkbox"  />Remember me</p>
                  <p >Need Help?</p>
                </div> 
                <p className='text-white  py-8'><span className='text-gray-600'>Already subscribed to Netflix?</span>{' '}<Link to='/login'> Sign In</Link></p>
              </form>
              

            </div>
          </div>


        </div>

      </div>
      
    </div>
  )
}

export default Signup
