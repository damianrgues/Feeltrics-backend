let express = require('express');
let router = express.Router();


// Models
// const User = require('./../models/user.js');
// const Metric = require('./../models/metric.js');

// GET '/metrics/:userId'
router.get('/metrics', (req, res) => {
  res.render('metrics/userId:');
});

// POST '/metric/new'

router.post('/metrics', (req, res) => {
    res.render('metrics/userId:');
  });

// PUT '/metrics/:metricId'
router.put('/metrics/:metricId', (req, res) => {
  res.render('group/group-join');
});


module.exports = router;
