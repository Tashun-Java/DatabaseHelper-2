var FoodItem = require('../models/foodItem');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/restaurant-management');

var foodItem = [
    new FoodItem(
        {
            image: 'https://d3dz4rogqkqh6r.cloudfront.net/uploads/files/2016/08/yimg_yVdo62-640x427.jpg',
            name: 'Rice and curry',
            price: '120'
        }
    ),
    new FoodItem(
        {

            image: 'https://www.thekitchen.ie/wp-content/uploads/2017/05/Long-Life-Noodles.jpg',
            name: 'Noodles',
            price: '120'
        }),
    new FoodItem(
        {

            image: 'http://www.dinemore.lk/dbimages/menu/1442925345_mnu_1.jpg',
            name: 'Parata',
            price: '150'
        }),
    new FoodItem(
        {
            image: 'https://d3dz4rogqkqh6r.cloudfront.net/uploads/files/2016/04/yimg_J8Lspd.jpg',
            name: 'Kottu',
            price: '150'
        })];

var done= 0;
for(var i = 0; i <foodItem.length;i++){
    foodItem[i].save(function(err,result){
        done++;
        if(done === foodItem.length){
            exit();
        }
    });
}

function exit(){
    mongoose.disconnect();
}
