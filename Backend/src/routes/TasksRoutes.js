 const express = require('express')
const { authUser } = require('../middleware/auth')
const { createTaks, getAllTasks } = require('../controller/TasksController')

const TasksRouter = express.Router() 

TasksRouter.post("/createTasks",authUser,createTaks) 
TasksRouter.get("/getAllTasks",authUser,getAllTasks)

module.exports = TasksRouter
