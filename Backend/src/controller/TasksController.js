const { Tasks } = require("../models/TasksModel")
const { User } = require("../models/UserModel")
const { validateTasksData } = require("../utils/ValidateData")


const createTaks = async(req,res) => {
    try {
        
        const userData = req.user 
        const {title,description} = req.body


        validateTasksData(title,description,res)

        const tasksData  = new Tasks({
            title,
            description
        }) 

        const tasksId = await tasksData.save() 

        userData.tasks.push(tasksId._id)

        await userData.save()


        return res.status(200).json({
            success:true,
            message:"Tasks Created Successfully"
        })

    } catch (error) {
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

const getAllTasks = async(req,res) => {
    try {
        
        const user = req.user 

        const allTasks = await User.findById(user.id).select('-password').populate({
            path:'tasks',
            options:{sort:{createdAt:-1}}
        })

        return res.status(200).json({
            success:true,
            message:"All Tasks",
            allTasks
        })

    } catch (error) {
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

module.exports = {
    createTaks,
    getAllTasks
}