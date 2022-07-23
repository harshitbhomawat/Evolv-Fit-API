const express = require('express');
const router = express.Router();
const FoodItem = require('../models/FoodItem');
const Meal = require('../models/Meal');
const User = require('../models/User');

router.post('/fooditem',(req,res,next) => {
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

router.patch('/add_item_to_meal/:id',(req,res,next)=>{
    Meal.findByIdAndUpdate(req.params.id,
        { $addToSet: { food_items : req.body.food_item } }
        ,{"new":true})
    .then((meal) => res.json(meal))
    .catch(next);
});

router.patch('/remove_item_from_meal/:id',(req,res,next)=>{
    Meal.findByIdAndUpdate(req.params.id,
        {$pull : { food_items : req.body.food_item}}
        ,{"new":true})
    .then((meal)=>res.json(meal))
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

router.patch('/add_meal_to_user/:id',(req,res,next)=>{
    User.findByIdAndUpdate(req.params.id,
        { $addToSet: { meal_plan : req.body.meal_plan } }
        ,{"new":true})
    .then((user) => res.json(user))
    .catch(next);
});

router.patch('/remove_meal_from_user/:id',(req,res,next)=>{
    User.findByIdAndUpdate(req.params.id,
        {$pull : { meal_plan : req.body.meal_plan}}
        ,{"new":true})
    .then((user)=>res.json(user))
    .catch(next);
});

router.post('/user',(req,res,next)=>{
    User.create(req.body)
    .then((data)=>res.json(data))
    .catch(next);
});

module.exports = router;