import React, { useState } from 'react'
import Card from '../components/Home/Card'
import AddInputData from '../components/Home/AddInputData'

const AllTasks = () => {
  
  const [showCard,setShowCard] = useState(true) 
  const [addInputData,setAddInputData] = useState(false)
  
  return (
    <div className=''>

    {
      showCard && <div>
        <Card home={true} setAddInputData={setAddInputData} setShowCard={setShowCard} />
      </div>
    }
    {
      addInputData && <div className=''>
        <AddInputData setAddInputData={setAddInputData} setShowCard={setShowCard}/>
      </div>
    }
      
    
    </div>
  )
}

export default AllTasks