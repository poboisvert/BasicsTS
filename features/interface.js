"use strict";
// Object
var civic = {
    name: "civic",
    year: 2000,
    broken: true,
    summary: function () {
        return "Name: " + this.name;
    },
};
//
//
//
// New case
var printCar = function (vehicule) {
    console.log("Name is " + vehicule.name);
};
printCar(civic);
// New case
var printCar_2 = function (vehicule) {
    console.log("Name is " + vehicule.name);
};
printCar_2(civic);
var printCar_3 = function (vehicule) {
    console.log(Vehicule.summary());
};
printCar_3(civic);
var printCar_4 = function (vehicule) {
    console.log("Name is " + vehicule.summary());
};
printCar_4(civic);
//
var drink = {
    color: "blue",
    alcool: true,
    sugar: 69,
    summary: function () {
        return "Hello the color is: " + this.color;
    },
};
var printSummary = function (item) {
    console.log(item.summary());
};
printSummary(drink);
printSummary(civic);
