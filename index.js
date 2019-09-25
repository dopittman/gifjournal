const express = require('express');
const fetch = require('node-fetch');
const app = express();

app.get('/test', (req, res)=>{
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(json =>{
    return res.send(json)})
    .catch(err => console.log(err))
  })

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{console.log(`App is listening on port ${PORT}`)})