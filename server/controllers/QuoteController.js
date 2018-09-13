'use strict'

const Quote = require('../models/quote');

class QuoteController {

    // create quote
    static addQuote(req,res){

        Quote.create({ status : req.body.status, user : req.decoded.id })
            .then(quote =>{
                // console.log('TEST-->',quote)
                res.status(201).json(quote)
            })
            .catch(error =>{
                res.status(500).json({ msg : error})
            })

    }

    // list of all qoute
    static listQuote(req,res){

    }

    // delete quote
    static deleteQuote(req,res){

    }
}

module.exports = QuoteController