const express = require('express');
const router = express.Router();
const FoodItem = require('../models/FoodItem');
const Meal = require('../models/Meal');
const User = require('../models/User');

router.post('/fooditem',(req,res,next) => {
    // console.log(req.body);
    // res.sendStatus(200);
    FoodItem.create(req.body)
    .then((data)=>res.json(data))
    .catch(next);
});
router.get('/fooditem',(req,res,next)=>{
    FoodItem.find({})
    .then((data)=>res.json(data))
    .catch(next);
});

router.post('/meal',(req,res,next)=>{
    Meal.create(req.body)
    .then((data)=>res.json(data))
    .catch(next);
});

router.get('/meal',(req,res,next)=>{
    Meal.find({})
    .then((data)=>res.json(data))
    .catch(next);
});

router.get('/user',(req,res,next)=>{
    User.find({})
    .then((data)=> res.json(data))
    .catch(next);
});

router.post('/user',(req,res,next)=>{
    User.create(req.body)
    .then((data)=>res.json(data))
    .catch(next);
});

module.exports = router;