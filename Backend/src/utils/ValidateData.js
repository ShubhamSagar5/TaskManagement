const validator = require('validator')


const validateSignUpData = (password,email) => {

    if(!validator.isStrongPassword(password)){
        throw new Error("Please provide valid Strong Password")
    }

    if(!validator.isEmail(email)){
        throw new Error("Please provide valid email")
    }

} 


const validateTasksData = (title,description) => {

    if(!title || !description){
         throw new Error("Title and description required")
    }

    if(title?.length < 3 || description?.length < 3){
        throw new Error("Title and description must contain at least 3 characters.")
    }
    

}

module.exports = {
    validateSignUpData,
    validateTasksData
}