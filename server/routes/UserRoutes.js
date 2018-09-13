'use strict'

const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

// register user
router.post('/register',(req,res)=>{
    UserController.registerUser(req,res);
})

// login user 
router.post('/login',(req,res)=>{
    UserController.loginUser(req,res);
})

module.exports = router
