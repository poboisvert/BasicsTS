"use strict";
var carMakers = ["ladas", "hounday", "Tuyutas"];
var dates = [new Date(), new Date()];
var carsByMake = [["F150"], ["550i"], ["C63"]];
// inference extracting values
var car = carMakers[0];
var aCar = carMakers.pop();
carMakers.push(100); // see error since not a string
// Flexible types
var important = new Date();
important.push("1999-01-01");
important.push(1); // Error
