'use strict'

const jwt = require('jsonwebtoken');
const User = require('../models/user');

function IsLogin(req,res,next){

    // console.log('Headers-->',req.headers)
    jwt.verify(req.headers.token,process.env.SECRET_TOKEN,(err,decoded)=>{

        if(err){
            res.status(403).json({ msg : 'User are not authorized'})
        }else{
            // req.decoded = decoded;
            User.findOne({ email : decoded.email })
                .then(user =>{
                    if(user){
                        req.decoded = decoded;
                        next();
                    }else{
                        res.status(403).json({ msg  : 'You are not authorized for Login'})
                    }
                })
                .catch(error =>{
                    res.status(500).json({ msg : 'ERROR : ',error})
                })
        }
    })
}

module.exports = IsLogin