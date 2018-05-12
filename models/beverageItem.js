var mongoose =require('mongoose');
var Schema =mongoose.Schema;

var schema=new Schema({
    image : {type: String, required: true},
    name : {type: String, required: true},
    price : {type: String, required: true},
    ingredients: {type: Array }


});

module.exports=mongoose.model('Beverage',schema);