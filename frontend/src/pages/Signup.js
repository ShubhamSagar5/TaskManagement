import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {toast} from 'react-hot-toast'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { login, setLoading } from '../store/slice/authSlice'

const Signup = () => {
   const navigate = useNavigate() 

  
  const [data,setData] = useState({userName:'',email:'',password:''}) 
  const loggedIn = useSelector((store)=>store?.auth?.loggedIn)

 
  const dispatch = useDispatch()
  const loading = useSelector((store)=>store.auth.loading)



  const handleSetValue = (e) => {
      setData({...data,[e.target.name]:e.target.value})
  }

const handleSignUp = async() => {
  try {
    dispatch(setLoading(true))
    if(data.userName === "" || data.email === "" || data.password === ""){
     return toast.error('Every Field Required')
    } else if(data.userName.length < 3) {
      return toast.error('User Name at least contain 3 letter')
    }

    const res = await axios.post('http://localhost:3001/api/v1/signup',data)
    if(res.data.success){
      toast.success(res.data.message)
      setData({userName:'',email:'',password:''})
      navigate('/login')
    }
    
  } catch (error) {
    toast.error(error.response.data.message)
  }finally{
    dispatch(setLoading(false))
  }
}  
useEffect(()=>{
  if(localStorage.getItem('token') && localStorage.getItem('userId')){
    navigate("/")
  }
},[])


  return (
    <div className=' h-[98%] flex justify-center items-center'>
        
        <div className='flex bg-gray- flex-col w-3/12 p-1 rounded-lg border border-gray-200'>
            <h2 className='text-3xl font-semibold p-2 '>SignUp</h2>
            <input type="text" className='text-lg m-3 outline-none rounded-sm bg-gray-700  p-1' name='userName' value={data.userName} placeholder='Username' onChange={handleSetValue} />
            <input type="text" name='email' className='text-lg m-3 outline-none rounded-sm bg-gray-700  p-1' value={data.email} placeholder='Email' onChange={handleSetValue} />
            <input type="text" name='password' className='text-lg m-3 outline-none rounded-sm bg-gray-700  p-1' value={data.password} placeholder='Password' onChange={handleSetValue} />
            <div className='flex items-center justify-between'>
                 <button className='bg-blue-900 p-1 w-3/12 rounded-md m-3' onClick={handleSignUp}>Signup</button>
            <Link to={"/login"}><p>Already Account ? Please Login</p></Link>
            </div>
           
            
        </div>
    </div>
  )
}

export default Signup