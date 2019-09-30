const express = require('express');

const app = express();
const mongoose = require('mongoose');
const users = require('./routes/api/users');
const logs = require('./routes/api/journal_logs');

app.use(express.urlencoded({ extended: true }));
app.use('/api/users', users);
app.use('/api/logs', logs);

//  mongoDB URI
const dbURI = require('./config/keys.txt').mongoURI;

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.log(err);
  });


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
