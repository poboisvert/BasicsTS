"use strict";
// the function needs add = (a: number, b: number)
// the function return :number
// With arrow
var add = function (a, b) {
    return a + b; // if no return a+b; we will have : number with an error
};
var sub = function (a, b) {
    return a - b; // if no return a+b; we will have : number with an error
};
// Function NO ARROW
function divide(z, y) {
    return z / y;
}
function mult(a, b) {
    return a * b;
}
var logger = function (message) {
    console.log(message);
};
var throwError = function (message) {
    //:never will never send back
    if (!message) {
        throw new Error(message);
    }
};
var forecast = {
    date: new Date(),
    weather: "sunny",
};
// CAS 1 - ES2015
var logWeather = function (forecast) {
    console.log(forecast.date);
    console.log(forecast.weather);
}; //{date:Date, weather:string} is the possible answer
// To call
logWeather(forecast);
// CASE 2 - ES2015
var logWeather_1 = function (_a) {
    var date = _a.date, weather = _a.weather;
    console.log(date);
    console.log(weather);
};
logWeather_1(forecast);
