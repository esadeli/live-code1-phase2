'use strict'

const express = require('express');
const router = express.Router();
const IsLogin = require('../middlewares/IsLogin');
const QuoteController = require('../controllers/QuoteController');

router.use(IsLogin)

// create quote
router.post('/',(req,res)=>{
    QuoteController.addQuote(req,res)
})


module.exports = router