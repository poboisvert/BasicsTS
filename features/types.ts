// ts-node types.ts

const today = new Date();

//
//
let test: number = 5; // OR
let test_2 = 5;
//
//

let nothingMuch: null = null;
let nothing: undefined = undefined;

// Object
let now: Data = new Data();

// Array
let colors: string[] = ["red", "blue"];

let Numbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, false];

// Classes
// Capital letter name for classes
class Car {}

// lower letter instance
let car: Car = new Car(); // New instance

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Function
// (i: number) => void is the description of this function
// i:number is what the function need
// void is the result TS
// then
// (i: number) => { -> the function
const LogNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// When use annotations

// CASE 1 - Functions returns the any type
const json = '{"x": 10, "y": 20}';
const coordinates: { y: number; y: number } = JSON.parse(json); // Mouse over coordinates and parse = any type
console.log(coordinates);

// CASE 2 - Declare variable and initialize on another line below
let words = ["black", "light", "grey"];
let foundWord: boolean; // Need to de declared

for (let i = 0; i < words.length; i++) {
  if (words[i] === "black") {
    foundWord = true;
  }
}

// CASE 3 - When type cannot be inferred
let numbers = [1, 2, 3, 4];
let about_two: boolean | number = false; // we add | number for the loop

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 3) {
    about_two = numbers[i];
  }
}
