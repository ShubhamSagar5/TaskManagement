const express = require('express')
const { DbConnection } = require('./config/DatabaseConnection')
const dotenv = require('dotenv')
const cors = require('cors')
const UserRouter = require('./routes/UserRoutes')
const TasksRouter = require('./routes/TasksRoutes')
const cookieParser = require('cookie-parser')


const app = express() 

dotenv.config({
    path:"./.env"
})

app.use(cors({
    origin:"*",
    credentials:true
}))
app.use(express.json())
app.use(cookieParser())

app.use("/api/v1",UserRouter)
app.use("/api/v1",TasksRouter)



app.use("/",(req,res)=>{
    res.send("Hello From the backed")
})


// app.use((err,req,res,next)=>{
    
//     return res.status(500).json({
//         success:false,
//         message:err.message
//     })
// })

DbConnection() 
.then(()=>{
    console.log("Database Connected Successfully")

    app.listen(process.env.PORT,(req,res)=>{
        console.log('Server is listen on Port Number ' + process.env.PORT)
    })
})
.catch((error)=>{
    console.log(error.message)
})