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

        Quote.find({})
            .then(quotes =>{
                res.status(201).json(quotes);
            })
            .catch(error =>{
                res.status(500).json({ msg : 'ERROR ',error});
            })

    }

    // delete quote
    static deleteQuote(req,res){

        // check user id :
        // console.log('Aktif USer',req.decoded)
    
        Quote.findOneAndRemove({ _id : req.params.id, user : req.decoded.id})
            .then(quote =>{
                console.log('DELETE-->',quote)

                if(quote){
                    res.status(201).json({ 
                        "success": true,
                        "message": `Quote with id ${quote._id} deleted`
                    })
                }else{
                    res.status(403).json({ msg : 'You are not authorized to delete this quote' })
                }
            })
            .catch(error =>{
                res.status(500).json({ msg : 'ERROR ',error});
            })
    }
}

module.exports = QuoteController