import axios from 'axios'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import Card from '../components/Home/Card'

const CompleteTasks = () => {
  
  const [completeCardData,setCompleteCardData] = useState([])

  const getCompleteCardData = async() => {
    try {
      const res = await axios.get('http://localhost:3001/api/v1/completeTasks',{
        headers:{
          Authorization:`Bearer ${localStorage.getItem('token')}`
        }
      }) 

      setCompleteCardData(res?.data?.data?.tasks)

    } catch (error) {
      toast.error(error.response.data.message)
    }
  }


  useEffect(()=>{
    getCompleteCardData()
  },[])
  
  return (
    <div>
      <Card cardData={completeCardData}/>
    </div>
  )
}

export default CompleteTasks