const express = require('express');
const app = express();
const path = require('path')

app.get('/test', (req, res)=>{
  res.send('It works')
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{console.log(`App is listening on port ${PORT}`)})