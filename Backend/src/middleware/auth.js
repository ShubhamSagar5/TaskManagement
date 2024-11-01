const jwt = require('jsonwebtoken')
const { User } = require('../models/UserModel')

const authUser = async(req,res,next) => {
    try {
        
        const token = req.cookies.token || (req.headers.authorization && req.headers.authorization.split(" ")[1])

        if(!token){
            return res.status(404).json({
                success:false,
                message:'Token Not Found!! Please login'
            })
        }

        const decodeToken = await jwt.verify(token,process.env.JWT_SECRET) 

        const {id} = decodeToken 

        const user = await User.findOne({_id:id}) 

        req.user = user 

        next()
        
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

module.exports ={
    authUser
}