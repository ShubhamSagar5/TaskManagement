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

const deleteTasks = async(req,res) => {
    try {
        
        const {id} = req.params
        const user = req.user 

        const deleteTasks = await Tasks.findByIdAndDelete(id) 
        const updateUser = await User.findByIdAndUpdate(user._id,{$pull:{tasks:id}}) 

        return res.status(200).json({
            success:true,
            message:'Tasks Deleted Successfully'
        })

    } catch (error) {
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
}
 

const updateTaks = async(req,res) => {
    try {
        
        const {id} = req.params 
        const {title,description} = req.body

        const updateTasks = await Tasks.findByIdAndUpdate(id,{title,description})

        return res.status(200).json({
            success:true,
            message:"Tasks Update Successfully"
        })

    } catch (error) {
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

const importantTasks = async(req,res) => {
    try {
        const {id} = req.params 

        const importantTasksStatus = await Tasks.findById(id)

      if(!importantTasksStatus){
        return res.status(400).json({
            success:false,
            message:'Tasks Not Found'
        })
      }

      importantTasksStatus.important = !importantTasksStatus.important 
      await importantTasksStatus.save()

        return res.status(200).json({
            success:true,
            message:'Important Tasks Added Successfully'
        })

    } catch (error) {
        return res.status(500).json({
            success:false,
            message:message.error
        })
    }
}

const completeTasks = async (req,res) => {
    try {
        
        const {id} = req.params 


        const tasks = await Tasks.findById(id) 

        if(!tasks){
            return res.status(400).json({
                success:false,
                message:'Tasks Not Found'
            })
        }

        tasks.completed = !tasks.completed 
        await tasks.save()

        return res.status(200).json({
            success:true,
            message:'Tasks Update Status of complete'
        })

    } catch (error) {
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

const getImportantTasks = async(req,res) => {
    try {
        
        const user = req.user 

        const findImportantTasks = await User.findById(user._id).select('-password').populate({
            path:"tasks",
            options:{sort:{createdAt:-1}},
            match:{important:true}
        })

        return res.status(200).json({
            success:true,
            message:'All important Tasks fetch Successfully',
            data:findImportantTasks
        })

    } catch (error) {
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
}


const getCompleteTasks = async(req,res) => {
    try {
        const user = req.user

        const findCompletedTasks = await User.findById(user._id).select('-password').populate({
            path:'tasks',
            options:{sort:{createdAt:-1}},
            match:{completed:true}
        })

        return res.status(200).json({
            success:true,
            message:"Get Complete Tasks fetch successfully",
            data:findCompletedTasks
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
    getAllTasks,
    deleteTasks,
    updateTaks,
    importantTasks,
    completeTasks,
    getImportantTasks,
    getCompleteTasks
}