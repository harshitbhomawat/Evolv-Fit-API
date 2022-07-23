const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    calorie_requirement:{
        type:Number,
        required:true
    },
    meal_plan:[{
        date:{
            type: Date
        },
        meal:[{
            type:Schema.Types.ObjectId,
            ref:'Meal'
        }]
    }]
});

const User = mongoose.model('User',UserSchema);

module.exports = User;