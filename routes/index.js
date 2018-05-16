var express = require('express');
var FoodItem = require('../models/foodItem');
var BeverageItem = require('../models/beverageItem');
var DessertItem = require('../models/dessertItem');
var JuiceItem = require('../models/juiceItem');
var KottuItem = require('../models/kottuItem');
var NoodlesItem = require('../models/noodleItem');
var RiceAndCurryItem = require('../models/riceAndCurryItem');
var ShortEatItem = require('../models/shortEatItem');
var SpecialItem = require('../models/specialItem');
var TableItem = require('../models/tableItem')

var InventoryItem = require('../models/inventoryItem');
var router = express.Router();
var mongoose = require("mongoose");


/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

//get all data from database
router.get('/FoodItems', function (req, res, next) {
    FoodItem.find(function (err, FoodItems) {
        res.send(FoodItems);
    });
});
//get Beverage
router.get('/getBeverages', function (req, res, next) {
    BeverageItem.find(function (err, BeverageItems) {
        res.send(BeverageItems);
    });
});
//get Desserts
router.get('/getDesserts', function (req, res, next) {
    DessertItem.find(function (err, DessertItems) {
        res.send(DessertItems);
    });
});
//get Juices
router.get('/getJuices', function (req, res, next) {
    JuiceItem.find(function (err, JuiceItems) {
        res.send(JuiceItems);
    });
});
//get kottu
router.get('/getKottu', function (req, res, next) {
    KottuItem.find(function (err, KottuItems) {
        res.send(KottuItems);
    });
});
//get noodles
router.get('/getNoodles', function (req, res, next) {
    NoodlesItem.find(function (err, NoodlesItems) {
        res.send(NoodlesItems);
    });
});
//get rice and curry
router.get('/getRiceAndCurry', function (req, res, next) {
    RiceAndCurryItem.find(function (err, RiceAndCurryItem) {
        res.send(RiceAndCurryItem);
    });
});
//get Short Eat
router.get('/getShortEat', function (req, res, next) {
    ShortEatItem.find(function (err, ShortEatItems) {
        res.send(ShortEatItems);
    });
});
//get special Items
router.get('/getSpecials', function (req, res, next) {
    SpecialItem.find(function (err, SpecialItems) {
        res.send(SpecialItems);
    });
});

//add a new Item to intentory
router.post('/addInventory', function (request, response) {
    var inventoryItem = new InventoryItem({
        name: request.body.name,
        stock: request.body.stock,
        unit: request.body.unit

    });
    inventoryItem.save(function (err) {
        if (err) {
            throw err;
        }
        else {
            response.send("Data Saved Successfully!");
        }
    });
});

//add a table
router.post('/addTable', function (request, response) {
    var tableItem = new TableItem({
        table: request.body.table,
        seat: request.body.seat

    });
    tableItem.save(function (err) {
        if (err) {
            throw err;
        }
        else {
            response.send("Data Saved Successfully!");
        }
    });
});


router.post("/updateInventoryItem", function (req, res, next) {
    InventoryItem.findOneAndUpdate(
        {name: req.body.name},
        {$set: {stock: req.body.stock}},
        {returnOriginal: false})
        .then(function (result) {
            res.send(result);
        });


});
//update table
router.post("/updateTable", function (req, res, next) {
    TableItem.findOneAndUpdate(
        {table: req.body.table},
        {$set: {seat: req.body.seat}},
        {returnOriginal: false})
        .then(function (result) {
            res.send(result);
        });


});
// add a new food Item from Chef app
router.post('/addFoodItem', function (request, response) {
    var foodSent = request.body.obj;
    var foodObj = JSON.parse(foodSent);

    var foodItem = new FoodItem({
        name: foodObj.name,
        image: foodObj.image,
        price: foodObj.price,
        ingredients: foodObj.ingredients


    });
    console.log(foodItem);
    foodItem.save(function (err) {
        if (err) {
            throw err;
        }
        else {
            response.send("Data Saved Successfully!");
        }
    });

});
//add a beverage
router.post('/addBeverageItem', function (request, response) {
    var beverageSent = request.body.obj;
    var beverageObj = JSON.parse(beverageSent);

    var beverageItem = new BeverageItem({
        name: beverageObj.name,
        image: beverageObj.image,
        price: beverageObj.price,
        ingredients: beverageObj.ingredients


    });
    console.log(beverageItem);
    beverageItem.save(function (err) {
        if (err) {
            throw err;
        }
        else {
            response.send("Data Saved Successfully!");
        }
    });

});

//add a dessert
router.post('/addDessertItem', function (request, response) {
    var dessertSent = request.body.obj;
    var dessertObj = JSON.parse(dessertSent);

    var dessertItem = new DessertItem({
        name: dessertObj.name,
        image: dessertObj.image,
        price: dessertObj.price,
        ingredients: dessertObj.ingredients


    });
    console.log(dessertItem);
    dessertItem.save(function (err) {
        if (err) {
            throw err;
        }
        else {
            response.send("Data Saved Successfully!");
        }
    });

});

// add a Juice
router.post('/addJuiceItem', function (request, response) {
    var juiceSent = request.body.obj;
    var juiceObj = JSON.parse(juiceSent);

    var juiceItem = new JuiceItem({
        name: juiceObj.name,
        image: juiceObj.image,
        price: juiceObj.price,
        ingredients: juiceObj.ingredients


    });
    console.log(juiceItem);
    juiceItem.save(function (err) {
        if (err) {
            throw err;
        }
        else {
            response.send("Data Saved Successfully!");
        }
    });

});
//add Kottu
router.post('/addKottuItem', function (request, response) {
    var kottuSent = request.body.obj;
    var kottuObj = JSON.parse(kottuSent);

    var kottuItem = new KottuItem({
        name: kottuObj.name,
        image: kottuObj.image,
        price: kottuObj.price,
        ingredients: kottuObj.ingredients


    });
    console.log(kottuItem);
    kottuItem.save(function (err) {
        if (err) {
            throw err;
        }
        else {
            response.send("Data Saved Successfully!");
        }
    });

});
//add noodles
router.post('/addNoodlesItem', function (request, response) {
    var noodlesSent = request.body.obj;
    var noodlesObj = JSON.parse(noodlesSent);

    var noodlesItem = new NoodlesItem({
        name: noodlesObj.name,
        image: noodlesObj.image,
        price: noodlesObj.price,
        ingredients: noodlesObj.ingredients


    });
    console.log(noodlesItem);
    noodlesItem.save(function (err) {
        if (err) {
            throw err;
        }
        else {
            response.send("Data Saved Successfully!");
        }
    });

});

//add rice and curry
router.post('/addRiceAndCurryItem', function (request, response) {
    var riceAndCurrySent = request.body.obj;
    var riceAndCurryObj = JSON.parse(riceAndCurrySent);

    var riceAndCurryItem = new RiceAndCurryItem({
        name: riceAndCurryObj.name,
        image: riceAndCurryObj.image,
        price: riceAndCurryObj.price,
        ingredients: riceAndCurryObj.ingredients


    });
    console.log(riceAndCurryItem);
    riceAndCurryItem.save(function (err) {
        if (err) {
            throw err;
        }
        else {
            response.send("Data Saved Successfully!");
        }
    });

});


//add a short Eat
router.post('/addShortEatItem', function (request, response) {
    var shortEatSent = request.body.obj;
    var shortEatObj = JSON.parse(shortEatSent);

    var shortEatItem = new ShortEatItem({
        name: shortEatObj.name,
        image: shortEatObj.image,
        price: shortEatObj.price,
        ingredients: shortEatObj.ingredients


    });
    console.log(shortEatItem);
    shortEatItem.save(function (err) {
        if (err) {
            throw err;
        }
        else {
            response.send("Data Saved Successfully!");
        }
    });

});
// add special item
router.post('/addSpecialItem', function (request, response) {
    var specialSent = request.body.obj;
    var specialObj = JSON.parse(specialSent);

    var specialItem = new SpecialItem({
        name: specialObj.name,
        image: specialObj.image,
        price: specialObj.price,
        ingredients: specialObj.ingredients


    });
    console.log(specialItem);
    specialItem.save(function (err) {
        if (err) {
            throw err;
        }
        else {
            response.send("Data Saved Successfully!");
        }
    });

});


// get Inventory
router.get('/GetInventory', function (req, res, next) {
    InventoryItem.find(function (err, InventoryItems) {
        res.send(InventoryItems);
    });

});
//get table
router.get('/GetTable', function (req, res, next) {
    TableItem.find(function (err, TableItems) {
        res.send(TableItems);
    });

});


function canMadeTheOrder(inventorySent) {
    return new Promise(function (resolve, reject) {

            InventoryItem.find({name: inventorySent.name}, function (err, inventoryitems) {
                if (parseFloat(inventoryitems[0].stock) >= parseFloat(inventorySent.stock)) {
                    // console.log(inventoryitems[0].name);
                    // console.log(parseFloat(inventoryitems[0].stock));
                    // console.log(parseFloat(inventorySent.stock));
                    // console.log("Okey");
                    return resolve("y");


                }
                else {
                    console.log("not Okey");
                    return reject("not Ok");

                }


            });


        }
    );


}

//check if there is that inventory a item in inventory
router.post('/isInventory', function (request, response) {
    var res = "";
    var j = 0;
    var inventorySent = request.body.obj;

    var chain = Promise.resolve();
    for (var i = 0; i < inventorySent.length; i++) {
        chain = chain.then(
            canMadeTheOrder(inventorySent[i]).then(function (result) {
                res +=result+",";
                j++;
                console.log(res);

                if(j==inventorySent.length)response.send(res);
            }).catch(function (err) {
                response.send(err);
            }));
    }




});


function respond(response, result) {
    response.send(result);

}

//update the inventory for an order
router.post("/updateInventoryForAnOrder", function (request, response) {

    InventoryItem.find({name: request.body.name}, function (err, inventory) {

        if (err) {
            console.log("here");
            console.log(err);
        }


        if ((Number(inventory[0].stock) - Number(request.body.stock)) > 0) {
            if (request.body.unit === ("unit")) {
                var value1 = (Number(inventory[0].stock) - Number(request.body.stock)).toString();
                console.log(value1 + "If method");
            }
            else {
                var value1 = (Number(inventory[0].stock) - (Number(request.body.stock) / 1000)).toString();
                console.log("Else Method");
            }

            InventoryItem.findOneAndUpdate(
                {name: request.body.name},
                {$set: {stock: value1}},
                {returnOriginal: false})
                .then(function (result) {
                    response.send(result);
                });
        }
        else {
            response.send("Unable to Perform")
        }


    });


});


module.exports = router;

