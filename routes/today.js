let express = require('express');
let router = express.Router();



router.get('/today', (req, res) => {
    res.render('/models/day.js');
  });



module.exports = router;
