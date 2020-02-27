const express = require('express');

const router = express.Router();
const mongoose = require('mongoose');
const Log = require('../../models/Log');

// Get all logs
router.get('/', (req, res) => {
  Log.find({})
    .then((foundLogs) => { res.json(foundLogs); })
    .catch((err) => { console.log(err); });
});

// Get One Log
router.put('/edit/', (req, res) => {
  Log.find({ _id: req.query.id }, (err) => { if (err) { console.log(err); } })
    .then((log) => { res.json(log); })
    .catch((err) => { console.log(err); });
});

//  Create Journal Log
router.post('/', (req, res) => {
  const newLog = new Log({
    gif: req.body.gif,
    mood: req.body.mood,
    comment: req.body.comment,
  });
  newLog.save()
    .then((user) => res.json(user))
    .catch((err) => console.log(err));
});

// Delete route needs to resolve
router.delete('/', (req, res) => {
  Log.findByIdAndDelete(req.body.id, (err) => { if (err) { console.log(err); } });
});

// Update Route
router.put('/', (req, res) => {
  Log.findByIdAndUpdate(req.body.id, (err) => { if (err) { console.log(err); } });
});

module.exports = router;
