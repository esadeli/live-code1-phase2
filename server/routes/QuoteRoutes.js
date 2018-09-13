'use strict'

const express = require('express');
const router = express.Router();
const IsLogin = require('../middlewares/IsLogin');
const QuoteController = require('../controllers/QuoteController');


// create quote
router.post('/',IsLogin,(req,res)=>{
    QuoteController.addQuote(req,res)
})

// list all quote
router.get('/',(req,res)=>{
    QuoteController.listQuote(req,res)
})

// delete quote
router.delete('/:id',IsLogin,(req,res)=>{
    QuoteController.deleteQuote(req,res);
})

module.exports = router