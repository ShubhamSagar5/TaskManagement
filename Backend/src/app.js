const express = require('express')
const { DbConnection } = require('./config/DatabaseConnection')
const dotenv = require('dotenv')
const cors = require('cors')
const UserRouter = require('./routes/routes')

const app = express() 

dotenv.config({
    path:"./.env"
})

app.use(cors())

app.use(express.json())

app.use("/api/v1",UserRouter)



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

    app.listen(3000,(req,res)=>{
        console.log('Server is listen on Port Number ' + process.env.PORT)
    })
})
.catch((error)=>{
    console.log(error.message)
})