var mongoose =require('mongoose');
var Schema =mongoose.Schema;

var schema=new Schema({
    table : {type: String, required: true},
    seat : {type: String, required: true},



});

module.exports=mongoose.model('Table',schema);