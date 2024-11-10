 const express = require('express')
const { authUser } = require('../middleware/auth')
const { createTaks, getAllTasks, deleteTasks, updateTaks, importantTasks, completeTasks, getImportantTasks, getCompleteTasks, getIncompleteData } = require('../controller/TasksController')

const TasksRouter = express.Router() 

TasksRouter.post("/createTasks",authUser,createTaks) 
TasksRouter.get("/getAllTasks",authUser,getAllTasks)
TasksRouter.delete("/deleteTasks/:id",authUser,deleteTasks)
TasksRouter.put("/updateTasks/:id",authUser,updateTaks)
TasksRouter.get("/importantTasks/:id",authUser,importantTasks)
TasksRouter.get("/completeTasks/:id",authUser,completeTasks)
TasksRouter.get("/importantTasks",authUser,getImportantTasks)
TasksRouter.get("/completeTasks",authUser,getCompleteTasks)
TasksRouter.get("/incompleteTasks",authUser,getIncompleteData)


module.exports = TasksRouter
