'use strict'

const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');
const IsLogin = require('../middlewares/IsLogin');

// register user
router.post('/register',(req,res)=>{
    UserController.registerUser(req,res);
})

// login user 
router.post('/login',(req,res)=>{
    UserController.loginUser(req,res);
})

// get user
router.get('/userInfo',IsLogin,(req,res)=>{
    UserController.getUser(req,res);
})

module.exports = router
