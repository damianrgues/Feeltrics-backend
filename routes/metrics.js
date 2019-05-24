let express = require('express');
let router = express.Router();

const mongoose= require ('mongoose');
const Metric = require('../models/metric')
const User = require('./../models/user.js');
const { isLoggedIn } = require('../helpers/middlewares');


// Models



// GET '/metrics/:userId'
router.get('/:userId', (req, res) => {
  const {userId} = req.params
  const {_id } = req.session.currentUser;

  Metric.find({ user_id: userId })
    .then((metrics)=>{


      res.status(200).json(metrics)
    })
});

// POST '/metric/new'

router.post('/new', (req, res) => {
  const { name, description, value } = req.body;

    
Metric.create({ user_id: req.session.currentUser._id, name, description, value})
    .then((newlyCreatedMetric) => {
        res
          .status(201)
          .json(newlyCreatedMetric)
    })
    .catch( (err) => {
        res
        .status(500)
        .json(err)
    })
});


// PUT '/metrics/:metricId'
router.put('/:metricId', (req, res) => {
  
    const { metricId } = req.params;
    const {description, value} =req.body;

    if (!mongoose.Types.ObjectId.isValid(metricId)) {
        res
          .status(400)  //  Bad Request
          .json({ message: 'Invalid id provided'})
        return;
    }

    Metric.findByIdAndUpdate(metricId, {description, value} )
      .then( (updatedMetric) => {
        res
          .status(201)
          .json(updatedMetric);
      })
      .catch(err => {
        res.json(err);
      })
});


// GET '/metrics/today/:userId'
router.get('/today/:userId', (req, res) => {
  const {userId} = req.params;
  

  Metric.find({ user_id: userId })
    .then((metrics)=>{
      console.log("metrics" ,metrics )

      
      res.status(200).json(metrics)
    })
});


// router.put('/projects/:id', (req, res, next)=>{

//   if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
//     res.status(400).json({ message: 'Specified id is not valid' });
//     return;
//   }

//   Project.findByIdAndUpdate(req.params.id, req.body)
//     .then(() => {
//       res.json({ message: `Project with ${req.params.id} is updated successfully.` });
//     })
//     .catch(err => {
//       res.json(err);
//     })
// })




module.exports = router;




