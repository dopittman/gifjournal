const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../../models/User');
const bcrypt = require('bcrypt');

//mongoDB URI
const dbURI = require('../../config/keys.txt').mongoURI;

mongoose.connect(dbURI, {useNewUrlParser:true, useUnifiedTopology: true})
        .then(()=>{console.log('Connected to MongoDB')})
        .catch((err)=>{console.log(err)})


router.get('/', (req,res)=>{
  res.json('GET route for logs');
})


module.exports = router;