import React from 'react'
import Sidebar from '../components/Home/Sidebar'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div className='flex gap-4 h-[100%]'>
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