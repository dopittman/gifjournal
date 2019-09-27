const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');


router.get('/test', (req, res)=>{
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(json =>{
    return res.send(json)})
    .catch(err => console.log(err))
  })

module.exports = router;