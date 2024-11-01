const { User } = require("../models/UserModel")
const bcrypt = require('bcrypt')
const { validateSignUpData } = require("../utils/ValidateData")
const jwt = require('jsonwebtoken')


const signUp = async(req,res) => {
    try {
        const {userName,email,password} = req.body 

        if(!userName || !email || !password){
            return res.status(400).json({
                success:false,
                message:"All Fields Required"
            })
        }

        validateSignUpData(password,email)

        const existingUserName = await User.findOne({$or:[
            {userName},
            {email}
        ]}) 
        if(existingUserName){
            return res.status(400).json({
                success:false,
                message:"User Already Signup with this userName or email"
            })
        }

        const hashPassword = await bcrypt.hash(password,10)

        const newUser = new User({
            userName,
            email,
            password:hashPassword
        })

        await newUser.save() 

        return res.status(200).json({
            success:true,
            message:"Account Created Successfully"
        })


    } catch (error) {
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
} 

const login = async(req,res) => {
    try {
        
        const {userName,password} = req.body 
        
        if(!userName || !password){
            return res.status(400).json({
                success:false,
                message:"UserName And Password Required"
            })
        }

        const user  = await User.findOne({userName}) 

        if(!user){
            return res.status(400).json({
                success:false,
                message:"User not Found !!!"
            })
        }

        const comparePassword = await user.comparePassword(password) 

        if(comparePassword){

            const getJwtToken = await jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:"1d"}) 
            // console.log(getJwtToken)
            
            return res.cookie("token",getJwtToken,{httpOnly:true}).status(200).json({
                success:true,
                message:`${user.userName} Login Successfully`
            })

        }else{
            return res.status(400).json({
            success:false,
            message:"Invalid Password"
        }) 
        }


    } catch (error) {
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

const logout = async(req,res) => {
    try {
        return res.clearCookie('token').status(200).json({
            sucess:true,
            message:"You Logout Successfully"
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

module.exports ={
    signUp,
    login,
    logout
}