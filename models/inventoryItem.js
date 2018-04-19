var mongoose =require('mongoose');
var Schema =mongoose.Schema;

var schema=new Schema({
    name : String,
    Quantity : Number,
    stockMin : Number


});

module.exports=mongoose.model('InventoryItem',schema);