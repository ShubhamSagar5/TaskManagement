import React, { useEffect, useState } from 'react'
import Card from '../components/Home/Card'
import AddInputData from '../components/Home/AddInputData'
import axios from 'axios'
import toast from 'react-hot-toast'

const AllTasks = () => {
  
  const [showCard,setShowCard] = useState(true) 
  const [addInputData,setAddInputData] = useState(false)
  const [cardData,setCardData] = useState([])
  const [tasksUpdate,setTasksUpdate] = useState(false)
 
  const [updatedData,setUpdatedData] = useState({
    id:'',
    title:'',
    description:''
  })

  const getTasksData = async() => {
    try {
      
      const res = await axios.get('http://localhost:3001/api/v1/getAllTasks',{
        headers:{
          Authorization : `Bearer ${localStorage.getItem('token')}`
        },
        withCredentials:true
      })

      setCardData(res?.data?.allTasks?.tasks || [])
      setTasksUpdate(!tasksUpdate)

    } catch (error) {
      console.log(error)
    }
  }

  const updateCompleteStatus = async(tasksId) => {
    try {
      
      const res = await axios.get(`http://localhost:3001/api/v1/completeTasks/${tasksId}`,{
        headers:{
          Authorization:`Bearer ${localStorage.getItem('token')}`
        }
      })
      toast.success(res.data.message)
      setTasksUpdate(!tasksUpdate)
    } catch (error) {
      toast.error(error.response.data.message)
    }
  } 

  const updateImportantTasksStatus = async(tasksId) => {
    try {
      const res = await axios.get(`http://localhost:3001/api/v1/importantTasks/${tasksId}`,{
        headers:{
          Authorization:`Bearer ${localStorage.getItem('token')}`
        }
      })

      toast.success(res.data.message)
      setTasksUpdate(!tasksUpdate)

    } catch (error) {
     toast.error(error?.response?.data?.message) 
    }
  }

  const deleteTasksFn = async(tasksId) => {
    try {
      const res = await axios.delete(`http://localhost:3001/api/v1/deleteTasks/${tasksId}`,{
        headers:{
          Authorization:`Bearer ${localStorage.getItem('token')}`
        }
      })
      toast.success(res.data.message)
      setTasksUpdate(!tasksUpdate)
    } catch (error) {
      toast.error(error.response.data.message)
    }
  }

  useEffect(()=>{
    getTasksData()
  },[tasksUpdate])


  return (
    <div className=''>

    {
      showCard && <div>
        <Card home={true} setAddInputData={setAddInputData} setShowCard={setShowCard} cardData={cardData} show={true} updateCompleteStatus={updateCompleteStatus} updateImportantTasksStatus={updateImportantTasksStatus} deleteTasksFn={deleteTasksFn} setUpdatedData={setUpdatedData}/>
      </div>
    }
    {
      addInputData && <div className=''>
        <AddInputData setAddInputData={setAddInputData} setShowCard={setShowCard} updatedData={updatedData} setUpdatedData={setUpdatedData}/>
      </div>
    }
      
    
    </div>
   )
}

export default AllTasks