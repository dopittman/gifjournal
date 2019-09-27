const express = require('express');
const app = express();

const users = require('./routes/api/users');
const logs = require('./routes/api/journal_logs');

const dbURI = require('./config/keys.txt').mongoURI;

app.use('/api/users', users);
app.use('/api/logs', logs);


  //Create new journal logs


const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{console.log(`App is listening on port ${PORT}`)})