"use strict";
// ts-node types.ts
var today = new Date();
//
//
var test = 5; // OR
var test_2 = 5;
//
//
var nothingMuch = null;
var nothing = undefined;
// Object
var now = new Data();
// Array
var colors = ["red", "blue"];
var Numbers = [1, 2, 3];
var truths = [true, false];
// Classes
// Capital letter name for classes
var Car = /** @class */ (function () {
    function Car() {
    }
    return Car;
}());
// lower letter instance
var car = new Car(); // New instance
// Object literal
var point = {
    x: 10,
    y: 20,
};
// Function
// (i: number) => void is the description of this function
// i:number is what the function need
// void is the result TS
// then
// (i: number) => { -> the function
var LogNumber = function (i) {
    console.log(i);
};
// When use annotations
// CASE 1 - Functions returns the any type
var json = '{"x": 10, "y": 20}';
var coordinates = JSON.parse(json); // Mouse over coordinates and parse = any type
console.log(coordinates);
// CASE 2 - Declare variable and initialize on another line below
var words = ["black", "light", "grey"];
var foundWord; // Need to de declared
for (var i = 0; i < words.length; i++) {
    if (words[i] === "black") {
        foundWord = true;
    }
}
// CASE 3 - When type cannot be inferred
var numbers = [1, 2, 3, 4];
var about_two = false; // we add | number for the loop
for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] > 3) {
        about_two = numbers[i];
    }
}
