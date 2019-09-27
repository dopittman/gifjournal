const express = require('express');
const app = express();
const users = require('./routes/api/users');
const logs = require('./routes/api/journal_logs');

app.use(express.urlencoded({extended: true}));
app.use('/api/users', users);
app.use('/api/logs', logs);

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{console.log(`App is listening on port ${PORT}`)})