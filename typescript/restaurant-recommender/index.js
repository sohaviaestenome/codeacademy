"use strict";
exports.__esModule = true;
var restaurant_1 = require("./restaurant");
var hour = new Date().getHours();
var dollarSigns = '$$';
var deliveryTimeMax = 90;
var maxDistance = 10;
var result;
var priceBracket = dollarSigns.length;
var filteredRestaurants = restaurant_1["default"].filter(function (restaurant) {
    if (Number(restaurant.priceBracket) > Number(priceBracket)) {
        return false;
    }
    if (restaurant.deliveryTimeMinutes > deliveryTimeMax) {
        return false;
    }
    if (Number(restaurant.distance) > maxDistance) {
        return false;
    }
    if (hour < Number(restaurant.openHour) || hour > Number(restaurant.closeHour)) {
        return false;
    }
    return restaurant;
});
if (filteredRestaurants.length === 0) {
    result = 'There are no restaurants available right now.';
}
else {
    result = "We found ".concat(filteredRestaurants.length, " restaurants, the first is ").concat(filteredRestaurants[0].name, ".");
}
console.log(result);
