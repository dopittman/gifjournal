const express = require('express');

const app = express();
const router = express.Router();
const mongoose = require('mongoose');
const Log = require('../../models/Log');

// Get all logs
router.get('/', (req, res) => {
  Log.find({})
    .then((foundLogs) => { res.json(foundLogs); })
    .catch((err) => { console.log(err); });
});

/* Get One Log
  Log.find(req.params.id)
  .then((log)=>{res.json(log)})
  .catch((err)=>{console.log(err)})
*/

//  Create Journal Log
router.post('/', (req, res) => {
  const newLog = new Log({
    gif: req.body.gif,
    mood: req.body.mood,
    blurb: req.body.blurb,
  });
  console.log('-------------------')
  console.log(req.body.mood);
  newLog.save()
    .then((user) => res.json(user))
    .catch((err) => console.log(err));
});

module.exports = router;
