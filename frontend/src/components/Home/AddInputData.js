import React from 'react'
import { MdCancel } from "react-icons/md";

const AddInputData = ({setAddInputData,setShowCard}) => {
  
    const hadleShowCard = () => {
        setAddInputData(false)
        setShowCard(true)
    }
  
    return (
    <>
       <div className='cursor-pointer absolute w-9/12 flex justify-end' onClick={hadleShowCard}>
            <MdCancel size={40}/>
        </div> 
   
    <div className='w-full h-[93vh] bg-gray-900  rounded-lg flex flex-col items-center pt-32'>
        
        <div className='mb-4'>
            <p className='text-3xl text-white '>Add Tasks</p>
        </div>
        <div className='w-full flex flex-col justify-center items-center p-1'>
            <input className='w-2/6 mb-3 bg-gray-800 rounded-sm px-2 py-3 text-black text-xl outline-none' type="text" name="tasks" id="" placeholder='Title '/>
            <textarea className='w-2/6 bg-gray-800 rounded-sm px-2 py-3 text-black text-xl outline-none' rows={10} name="" id="" placeholder='Description.....'></textarea>
        </div>
        <divc className="mt-3 bg-blue-900 w-[90px] rounded-md py-3 text-center">
            <button>Submit</button>
        </divc>
    </div> </>
  )
}

export default AddInputData