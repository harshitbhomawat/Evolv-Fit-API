const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FoodItemSchema = new Schema({
    name: {type:String, required:true},
    calories:{type:Number, required:true},
    protein:{type:Number, required:true},
    carb:{type:Number, required:true},
    fat:{type:Number, required:true},
    item_weight:{type:Number, required:true},
    single_serve_quantity:{
        type:Number,
        required:true,
        default:1
    },
    accepted_unit:{
        type:String,
        enum:['ml', 'liter', 'kg', 'g', 'item'],
    }
});

const FoodItem = mongoose.model('FoodItem',FoodItemSchema);

module.exports = FoodItem;