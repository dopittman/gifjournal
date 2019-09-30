const express = require('express');

const router = express.Router();
const fetch = require('node-fetch');
const bcrypt = require('bcrypt');
const User = require('../../models/User');

//  -----Routes-----

router.get('/test', (req, res) => {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((json) => res.send(json))
    .catch((err) => console.log(err));
});

//  User Register Route
router.post('/', (req, res) => {
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (user) {
        // Throw a 400 error if the email address already exists
        return res.status(400).json({ email: 'A user has already registered with this address' });
      }
      // Otherwise create a new user
      const newUser = new User({
        handle: req.body.handle,
        email: req.body.email,
        password: req.body.password,
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser.save()
            .then((user) => res.json(user))
            .catch((err) => console.log(err));
        });
      });
    });
});

module.exports = router;
