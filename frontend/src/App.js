import React from 'react'
import Home from './pages/Home'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import AllTasks from './pages/AllTasks'
import CompleteTasks from './pages/CompleteTasks'
import ImportantTasks from './pages/ImportantTasks'
import IncompleteTasks from './pages/IncompleteTasks'
import Login from './pages/Login'
import Signup from './pages/Signup'
import {Toaster} from 'react-hot-toast'
import { useSelector } from 'react-redux'

const App = () => {
  
  const dataLength = useSelector((store)=>store?.auth?.tasksLength)

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
    },
    {
      path:"/login",
      element:<Login/>
    },
    {
      path:"/signup",
      element:<Signup/>
    }
  ])
  
  
  return (
    <div className={`bg-gray-900 text-white ${dataLength < 3 ? "h-screen" : "h-full"}  md:h-screen p-2`}>
      <RouterProvider router={appRouter}/>
      <Toaster/>
    </div>
  )
}

export default App