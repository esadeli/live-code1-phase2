'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuoteSchema = new Schema({
    likes : [String],
    status : String,
    user : { type : Schema.Types.ObjectId,ref : 'User' }
},{
    timestamps : true
})

const Quote = mongoose.model('Quote',QuoteSchema);

module.exports = Quote
