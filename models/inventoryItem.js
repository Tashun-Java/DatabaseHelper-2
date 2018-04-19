var mongoose =require('mongoose');
var Schema =mongoose.Schema;

var schema=new Schema({
    name : String,
    stock : String


});

module.exports=mongoose.model('InventoryItem',schema);