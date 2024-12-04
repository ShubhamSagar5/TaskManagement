const mongoose  = require('mongoose') 
const validator = require('validator')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    userName:{
        type:String,
        required:true,
        minlength:[3,'User Name at least have 3 letter'],
        unique:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        validate(value){
            if(!validator.isEmail(value)){
             
                throw new Error('Plesae Provide Valid Email')
            }
        }
    },
    password:{
        type:String,
        required:[true,'Password is required'],
        trim:true,
        validate(value){
        
            if(!validator.isStrongPassword(value,{
                minLength: 8,
                minLowercase: 1,
                minUppercase: 1,
                minNumbers: 1,
                minSymbols: 1
            })){
               
                throw new Error('Plesae Provide Valid Email')
            }
        }
    },
    tasks:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"tasks"
    }]
},{
    timestamps:true
}) 


userSchema.methods.comparePassword = async function(InputPasswordByUser) {
    const user = this 
    const hashPassword = user.password 

    const comparePassword = await bcrypt.compare(InputPasswordByUser,hashPassword) 

    return comparePassword

}


const User = mongoose.model('user',userSchema)

module.exports = {
    User
}