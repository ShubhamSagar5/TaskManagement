const validator = require('validator')


const validateSignUpData = (password) => {

    if(!validator.isStrongPassword(password)){
        throw new Error("Please provide valid Strong Password")
    }

} 

module.exports = {
    validateSignUpData
}