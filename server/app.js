'use strict'

'use strict'

	require('dotenv').config()
	const express = require('express');
	const app = express();
	const cors = require('cors');
	const mongoose = require('mongoose');
	mongoose.connect('mongodb://localhost:27017/liveCode1',{ useNewUrlParser: true });

	const UserRoutes = require('./routes/UserRoutes');
    const QuoteRoutes = require('./routes/QuoteRoutes');
    app.use(express.urlencoded({extended : false}));
	app.use(express.json());
	
	app.use(cors());
    app.use('/users',UserRoutes);
    app.use('/quotes',QuoteRoutes);

	app.get('/',(req,res)=>{
	    res.send('OK Enter index')
	});

	app.listen(3000,()=>{
	    console.log('You are listening to 3000')
	});