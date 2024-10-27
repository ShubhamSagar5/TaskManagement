import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className=' h-[98%] flex justify-center items-center'>
        
    <div className='flex bg-gray- flex-col w-3/12 p-1 rounded-lg border border-gray-200'>
        <h2 className='text-3xl font-semibold p-2 '>Login</h2>
        <input type="text" className='text-lg m-3 outline-none rounded-sm bg-gray-700  p-1' name='userName' placeholder='Username' />
        {/* <input type="text" name='email' className='text-lg m-3 outline-none rounded-sm bg-gray-700  p-1' placeholder='Email' /> */}
        <input type="text" name='password' className='text-lg m-3 outline-none rounded-sm bg-gray-700  p-1' placeholder='Password' />
        <div className='flex items-center justify-between'>
             <button className='bg-blue-900 p-1 w-3/12 rounded-md m-3'>Login</button>
        <Link to={"/signup"}><p> New User ? Please Signup</p></Link>
        </div>
       
        
    </div>
</div>
  )
}

export default Login