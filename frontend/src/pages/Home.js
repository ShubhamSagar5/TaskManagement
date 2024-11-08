import React, { useEffect } from 'react'
import Sidebar from '../components/Home/Sidebar'
import { Outlet, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../store/slice/authSlice'

const Home = () => {
  
  const loggedIn = useSelector((store)=>store?.auth?.loggedIn)
  const navigate = useNavigate()

  const dispatch = useDispatch()



  // if(!loggedIn){
  //   navigate("/signup")
  // }
  

  useEffect(()=>{
    
    // console.log(localStorage.getItem('token'))
    
    if(localStorage.getItem('token') && localStorage.getItem('userId')){
      dispatch(login())
    }
    else if (!loggedIn){
    navigate("/signup")
  }
  },[])


  return (
    <div className='flex gap-4 h-full w-full'>
        <div className=' w-1/6 rounded-xl border border-gray-300 p-4'>
            <Sidebar/>
        </div>
        <div className='w-5/6 rounded-xl border border-gray-300 p-4'>
            <Outlet/>
        </div>
    </div>
  )
}

export default Home