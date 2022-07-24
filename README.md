# Evolv-Fit-API
API created using node.js, mongodb, express.

# Endpoints:-

1) '/fooditems' :-
* type: GET,
* Usage: To Get List of all Food Items.

2) '/create_food_item' :-
* type: POST, 
* Usage: To add new food item to the List of all Food Items.

3) '/meals' :-
* type: GET,
* Usage: To Get List of all meals.

4) '/create_meal' :- 
* type: POST, 
* Usage: To create a new meal.

5) '/add_item_to_meal/:id' :-
* type: PATCH,
* Usage: To add new food item in the meal.

6) '/remove_item_from_meal/:id' :-
* type: PATCH,
* Usage: To remove a food item from the meal.

7) '/create_meal_by_calories' :-
* type: POST,
* Usage: To create a meal automatically according to given amount of calories.
* required fields:
a) category : category of meal.
b) name : name of meal.
c) calories : Required calories in meal.
d) variety : number of different food items to be added in meal.
e) exclude_food_items : array of food items we don't want want in the meal.

8) '/users' :-
* type: GET,
* Usage: To Get List of all Users.

9) '/create_user' :-
* type: POST,
* Usage: To create a new user.

10) '/add_meal_to_user/:id' :-
* type: PATCH,
* Usage: To add new meal to user's meal plan.

11) '/remove_meal_from_user/:id' :-
* type: PATCH,
* Usage: To remove a meal from user's meal plan.

# Schemas:-

* Food Item
{
name : String,
calories : Number,
protein : Number,
carb : Number,
fat : Number,
item_weight : Number,
single_serve_quantity : Number,
accepted_unit : enum['ml', 'liter', 'kg', 'g', 'item']
}

* Meal
{
category : enum['Breakfast','Lunch','Evening Snack','Dinner'],
name : String,
food_items : [
{
food_item : id,
quantity : Number
}
]
}

* User
{
name : String,
calorie_requirement : Number,
meal_plan : [
date : Date,
meal : [
meal : id
]
]
}
