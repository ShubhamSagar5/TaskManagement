import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { login, setLoading } from '../store/slice/authSlice'
import toast from 'react-hot-toast'
import Cookies  from 'js-cookie'

const Login = () => {

  const [data,setData] = useState({userName:'',password:''}) 
  const loading = useSelector((store)=>store.auth.loading)
  const navigate  = useNavigate() 
  const dispatch = useDispatch() 
  const loggedIn = useSelector((store)=>store?.auth?.loggedIn)

  const handleLoginData = (e) => {
    setData({...data,[e.target.name]:e.target.value})
  }

  const handleLogin = async() => {
    try {
      dispatch(setLoading(true))
      const res = await axios.post('https://taskmanagement-tavq.onrender.com/api/v1/login',data,{
        headers:{
          'Content-Type':'application/json'
        },
        withCredentials:true
      })
     toast.success(res?.data?.message) 
        dispatch(login()) 
        setData({userName:'',password:''})
        
      localStorage.setItem('token', res?.data?.token);
      localStorage.setItem('userId',res?.data?.userId)
    
        navigate("/")
        dispatch(setLoading(false))
      

    } catch (error) {
      console.log(error)
      if (error?.response) {
        toast.error(error?.response?.data?.message)
        console.error("Response error:", error.response.data);
      } else {
        toast.error("Unexpected error")
        console.error(":", error);
      }
      
    }
  }

  useEffect(()=>{
    if(localStorage.getItem('token') && localStorage.getItem('userId')){
      navigate("/")
    }
  },[])

  return (
    <div className='h-[100vh] md:h-[98%] flex justify-center items-center'>
        
    <div className='flex bg-gray- flex-col text-2xl md:text-2xl md:w-3/12 p-1 rounded-lg border border-gray-200'>
        <h2 className='text-3xl font-semibold p-2 '>Login</h2>
        <input type="text" className='text-lg m-3 outline-none rounded-sm bg-gray-700  p-1' name='userName' value={data.userName} onChange={handleLoginData} placeholder='Username' />
        {/* <input type="text" name='email' className='text-lg m-3 outline-none rounded-sm bg-gray-700  p-1' placeholder='Email' /> */}
        <input type="text" name='password' className='text-lg m-3 outline-none rounded-sm bg-gray-700  p-1' value={data.password} onChange={handleLoginData} placeholder='Password' />
        <div className='flex md:items-center justify-around'>
             <button className='bg-blue-900 p-1 w-10/12 md:text-base md:w-3/12 rounded-md m-3' onClick={handleLogin}>Login</button>
        <Link to={"/signup"}><p className='text-lg md:text-sm'> New User ? Please Signup</p></Link>
        </div>
       
        
    </div>
</div>
  )
}

export default Login