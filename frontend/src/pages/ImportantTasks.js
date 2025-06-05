import React, { useEffect, useState } from 'react'
import Card from '../components/Home/Card'
import axios from 'axios'
import toast from 'react-hot-toast'

const ImportantTasks = () => {
  
  const [importantTasks,setImportantTasks] = useState([])
  
  const  getImportantTasks = async() => {
    try {
      
      const res = await axios.get('http://localhost:4000/api/v1/importantTasks',{
        headers:{
          Authorization:`Bearer ${localStorage.getItem('token')}`}
      })

      setImportantTasks(res?.data?.data?.tasks)


    } catch (error) {
      toast.error(error.response.data.message)
    }
  }
  
  useEffect(()=>{
    getImportantTasks()
  },[])
  return importantTasks?.length == 0 ? (<div className='text-center'>Important Tasks Not Found</div>):(
    <div>
      <Card cardData={importantTasks} show={false}/>
    </div>
  )
}

export default ImportantTasks