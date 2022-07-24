const express = require('express');
const router = express.Router();
const FoodItem = require('../models/FoodItem');
const Meal = require('../models/Meal');
const User = require('../models/User');

router.get('/fooditems',(req,res,next)=>{
    FoodItem.find({})
    .then((data)=>res.json(data))
    .catch(next);
});

router.post('/create_fooditem',(req,res,next) => {
    FoodItem.create(req.body)
    .then((data)=>res.json(data))
    .catch(next);
});

router.get('/meals',(req,res,next)=>{
    Meal.find({})
    .then((data)=>res.json(data))
    .catch(next);
});

router.post('/create_meal',(req,res,next)=>{
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



router.get('/users',(req,res,next)=>{
    User.find({})
    .then((data)=> res.json(data))
    .catch(next);
});

router.post('/create_user',(req,res,next)=>{
    User.create(req.body)
    .then((data)=>res.json(data))
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

router.post('/create_meal_by_calories',(req,res,next)=>{
    FoodItem.find({})
    .then((food_items)=>{
        const req_calories = Number(req.body.calories);
        // const req_protien = (cal/4)/4;
        food_items.sort((a,b)=>{
            return ((1.0)*b.protein)/b.calories - ((1.0)*a.protein)/a.calories;
        });
        var calories=0,protein=0;
        const added_items=[{food_item:food_items[0],quantity:1}
        ,{food_item:food_items[1],quantity:1}
        ,{food_item:food_items[2],quantity:1}];
        calories+=food_items[0].calories+food_items[1].calories+food_items[2].calories;
        protein+=food_items[0].protein+food_items[1].protein+food_items[2].protein;
        var i=0;
        while(calories<req_calories-100){
            added_items[i].quantity+=1;
            calories+=added_items[i].food_item.calories;
            protein+=added_items[i].food_item.protein;
            i=(i+1)%3;
        }
        const meal = new Meal();
        meal.category = req.body.category;
        meal.name = req.body.name;
        meal.food_items = added_items;
        Meal.create(meal)
        .then((data)=>res.json(meal))
        .catch(next);
        // console.log(req_protien);
        // // console.log(food_items);
        // res.json(food_items);
    })
    .catch(next);
});

module.exports = router;