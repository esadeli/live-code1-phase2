'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const beautifyUnique = require('mongoose-beautiful-unique-validation');


const UserSchema = new Schema({

    name : {
        type : String
    },
    email : {
        type : String,
        unique : ['Email harus unique']
    },
    password : {
        type : String,
        minlength : [6, 'Email should has at least 6 characters'],
    },
    listQuotes : {
        type : Schema.Types.ObjectId,
        ref : 'Quote'
    }

},{
    timestamps : true
})

UserSchema.plugin(beautifyUnique);
const User = mongoose.model('User',UserSchema);

module.exports = User