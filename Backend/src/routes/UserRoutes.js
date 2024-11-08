const express = require('express')
const { signUp, login, logout, userInfo } = require('../controller/UserController')

const router = express.Router() 

router.post("/signup",signUp)
router.post("/login",login)
router.get("/logout",logout)
router.post("/getInfo",userInfo)

module.exports = router