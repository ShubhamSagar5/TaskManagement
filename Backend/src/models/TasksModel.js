const mongoose = require('mongoose') 


const tasksSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true,
        minlength:[3,"Title must have at least 3 letter"]
    },
    description:{
        type:String,
        required:true,

    },
    important:{
        type:Boolean,
        default:false
    },
    completed:{
        type:Boolean,
        default:false
    }
},{
    timestamps:true
})


const Tasks = mongoose.model('tasks',tasksSchema) 

module.exports = {
    Tasks
}