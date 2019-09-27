const express = require('express')
const router = express.Router();

router.get('/', (req,res)=>{
  res.json('GET route for logs');
})

router.post('/create', (req, res)=>{
  res.json('POST route to create logs');
})

module.exports = router;