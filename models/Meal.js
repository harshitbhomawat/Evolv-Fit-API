const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MealSchema = new Schema({
    category:{
        type:String,
        enum:['Breakfast','Lunch','Evening Snack','Dinner'],
    },
    name:{
        type:String,
        required:true
    },
    food_items:[{
        food_item:{
        type:Schema.Types.ObjectId,
        ref:'FoodItem',
        required:true
        },
        quantity:{
            type:Number,
            required:true
        }
    }]
});

const Meal = mongoose.model('Meal',MealSchema);

module.exports = Meal;