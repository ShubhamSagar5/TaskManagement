const express = require('express')
const { signUp, login, logout } = require('../controller/UserController')

const router = express.Router() 

router.post("/signup",signUp)
router.post("/login",login)
router.get("/logout",logout)

module.exports = router