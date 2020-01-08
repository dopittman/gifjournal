const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('The pages route works!');
});

module.exports = router;
