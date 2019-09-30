const express = require('express');

const router = express.Router();
const Log = require('../../models/Log');

router.get('/', (req, res) => {
  res.json('GET route for logs');
});

//  Create Journal Log
router.post('/', (req, res) => {
  const newLog = new Log({
    gif: req.body.gif,
    mood: req.body.mood,
    blurb: req.body.blurb,
  });
  newLog.save()
    .then((user) => res.json(user))
    .catch((err) => console.log(err));
});

module.exports = router;
