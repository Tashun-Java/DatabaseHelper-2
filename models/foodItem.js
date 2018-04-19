var mongoose =require('mongoose');
var Schema =mongoose.Schema;

var schema=new Schema({
    image : String,
    name : String,
    price : String


});

module.exports=mongoose.model('FoodItem',schema);