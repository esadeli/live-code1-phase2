'use strict'

const User = require('../models/user');
const HashPassword = require('../helpers/HashPassword');
const CheckPasswordLen =require('../helpers/CheckPasswordLen');
const jwt = require('jsonwebtoken');

class UserController{

    // register 
    static registerUser(req,res){

        // check password length first
        if(CheckPasswordLen(req.body.password)){
            let hash = HashPassword(req.body.password)

            User.create({ name : req.body.name,email : req.body.email, password  : hash })
                .then(user =>{
                    res.status(201).json({
                        "success" : true,
                        "message" : `Account ${req.body.name} registered`
                    })
                })
                .catch(err =>{
                    res.status(500).json({ 
                        msg : 'ERROR ',err
                    })
                })
        }else{
            res.status(500).json({
                msg : 'Password should have minimum 6 characters'
            })
        }
    
    }

    static loginUser(req,res){

        let hash = HashPassword(req.body.password)

        User.findOne({ email : req.body.email, password : hash})
            .then(user=>{
                
                if(user){
                    jwt.sign({
                        id : user._id,
                        name : user.name,
                        email : user.email
                    },process.env.SECRET_TOKEN,(error,token)=>{
                        if(error){
                            res.status(403).json({ msg : 'Please login / register first'})
                        }else{
                            res.status(201).json({
                                "token" : token
                            })
                        }
                    })
                }else if(user===null){
                    res.status(403).json({ msg : 'User not found'})
                }
            })
            .catch(error =>{
                res.status(500).json({
                    msg : 'ERROR ',err
                })
            })

    }

}

module.exports = UserController

