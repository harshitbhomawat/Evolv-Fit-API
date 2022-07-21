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
        type:Schema.Types.ObjectId,
        ref:'FoodItem'
    }]
});

const Meal = mongoose.model('Meal',MealSchema);

module.exports = Meal;