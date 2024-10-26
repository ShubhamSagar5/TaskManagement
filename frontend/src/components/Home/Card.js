import React from 'react'

const Card = () => {
 
    const data = [
        
                {
                  id: 1,
                  title: "Complete Project Proposal",
                  description: "Draft and finalize the project proposal for the upcoming client meeting."
                },
                {
                  id: 2,
                  title: "Design Homepage Layout",
                  description: "Create a mockup for the homepage layout using Figma based on the client requirements."
                },
                {
                  id: 3,
                  title: "Fix Bugs in User Profile",
                  description: "Resolve the issues reported in the user profile section regarding incorrect data display."
                },
                {
                  id: 4,
                  title: "Prepare Presentation Slides",
                  description: "Develop a PowerPoint presentation for the project update scheduled next weekDevelop a PowerPoint presentation for the project update scheduled next week."
                },
                {
                  id: 5,
                  title: "Conduct User Testing",
                  description: "Organize and facilitate user testing sessions to gather feedback on the new features."
                }
              
              
          
          
    ]
 
 
 
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
                       <div>
                        <button className='bg-red-500 p-1 rounded-sm'>Incomplete</button>
                       </div>
                    </div>
                )
            })
        }
            
    </div>
  )
}

export default Card