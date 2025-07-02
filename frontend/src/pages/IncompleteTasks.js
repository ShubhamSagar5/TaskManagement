import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {toast} from 'react-hot-toast'
import Card from '../components/Home/Card'

const IncompleteTasks = () => {
  
  const [incompletecardData,setIncompleteData] = useState([])

  
  const getIncompleteData = async() => {
    try {
      
      const res = await axios.get('https://taskmanagement-tavq.onrender.com/api/v1/incompleteTasks',{
        headers:{
          Authorization:`Bearer ${localStorage.getItem('token')}`
        }
      })
      setIncompleteData(res?.data?.data?.tasks)
    } catch (error) {
      toast.error(error.response.data.message)      
    }
  }

  useEffect(()=>{
    getIncompleteData()
  },[])

  return incompletecardData?.length == 0 ? (<div className='text-center'>Incompleted Data Not Found</div>) : (
    <div>
      <Card cardData={incompletecardData}/>
    </div>
  )
}

export default IncompleteTasks