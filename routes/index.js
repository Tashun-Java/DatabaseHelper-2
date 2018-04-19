var express = require('express');
var FoodItem=require('../models/foodItem');
var InventoryItem=require('../models/inventoryItem');
var router = express.Router();
var mongoose=require("mongoose");


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//get all data from database
router.get('/FoodItems',function (req,res,next) {
 FoodItem.find(function (err,FoodItems) {
   res.send(FoodItems);
 });
});

//add a new Item to intentory
router.post('/addInventory',function (request,response) {
    var inventoryItem= new InventoryItem({
        name:request.body.name,
        quantity:request.body.quantity,
        stockMin:request.body.stockMin

    });
   inventoryItem.save(function (err) {
       if (err){
           throw err;
       }
       else {
           response.send({validity:true});
       }
   });
});

// get Inventory
router.get('/GetInventory',function (req,res,next) {
    InventoryItem.find(function (err,InventoryItems) {
        res.send(InventoryItems);
    });

});

//update a item in inventory
router.get('/updateInventory',function (request,response) {
    InventoryItem.count( {name:request.body.name}, function (err, count){
        if (count>0){
            response.send({validity:true});
        }
    });

});


module.exports = router;

