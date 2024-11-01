import React from 'react' 
import { AiOutlineLike } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { IoIosAddCircleOutline } from "react-icons/io";


const Card = ({home,setAddInputData,setShowCard}) => {
 
    const data = [
        
                {
                  id: 1,
                  title: "Complete Project Proposal",
                  description: "Draft and finalize the project proposal for the upcoming client meeting.",
                  status:'Incomplete'
                },
                {
                  id: 2,
                  title: "Design Homepage Layout",
                  description: "Create a mockup for the homepage layout using Figma based on the client requirements.",
                  status:'Complete'
                },
                {
                  id: 3,
                  title: "Fix Bugs in User Profile",
                  description: "Resolve the issues reported in the user profile section regarding incorrect data display.",
                  status:'Incomplete'
                },
                {
                  id: 4,
                  title: "Prepare Presentation Slides",
                  description: "Develop a PowerPoint presentation for the project update scheduled next weekDevelop a PowerPoint presentation for the project update scheduled next week.",
                  status:'Incomplete'
                },
                {
                  id: 5,
                  title: "Conduct User Testing",
                  description: "Organize and facilitate user testing sessions to gather feedback on the new features.",
                  status:'Incomplete'
                }
              
              
          
          
    ]
 
    const handleCardDispaly = () => {
      setAddInputData(true)
      setShowCard(false)
    }
 
 
    return (
    <div className='grid grid-rows-1 md:grid-cols-4  gap-4  p-1'>
        {
            data && data?.map((item)=>{
                return (
                    <div className='flex flex-col justify-between bg-gray-800 rounded-sm p-3'>
                    <div>
                         <h3 className='text-xl font-semibold'>{item.title}</h3>
                        <p className='text-gray-300 my-2'>{item.description}</p>
                    </div>
                    <div className='flex items-center gap-4'>
                      <div>
                        <button className={`${item.status === "Incomplete" ? 'bg-red-500' : 'bg-green-500'} p-1 px-2 rounded-sm `}>{item.status}</button>
                       </div>
                       <div className='w-full flex text-2xl justify-between'>
                        <button><AiOutlineLike/></button>
                        <button><FaRegEdit/></button>
                        <button><MdDeleteOutline/></button>
                       </div>
                    </div>
                       
                    </div>
                )
            })
        }
{
  home ? <> <div className='flex flex-col items-center gap-2 justify-center bg-gray-800 rounded-sm p-3 hover:transition-all duration-300 hover:scale-105 hover:cursor-pointer' onClick={handleCardDispaly}>
                 <IoIosAddCircleOutline size={40}/>
                <p className='text-2xl'>Add Tasks</p>
                
                
        </div></>:""
}
       
            
    </div>
  )
}

export default Card