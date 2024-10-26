import React from 'react'
import Home from './pages/Home'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import AllTasks from './pages/AllTasks'
import CompleteTasks from './pages/CompleteTasks'
import ImportantTasks from './pages/ImportantTasks'
import IncompleteTasks from './pages/IncompleteTasks'

const App = () => {
  
  const appRouter = createBrowserRouter([
    {
      path:"/",
      element:<Home/>,
      children:[
        {
          path:"/",
          element:<AllTasks/>
        },
        {
          path:"/completed",
          element:<CompleteTasks/>
        },
        {
          path:"/important",
          element:<ImportantTasks/>
        },
        {
          path:"/incomplete",
          element:<IncompleteTasks/>
        }
      ]
    }
  ])
  
  
  return (
    <div className='bg-gray-900 text-white h-screen p-2'>
      <RouterProvider router={appRouter}/>
    </div>
  )
}

export default App