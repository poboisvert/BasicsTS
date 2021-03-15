const drink = {
  color: "red",
  cabonated: true,
  sugar: 500,
};
const pepsiRed = ["red", true, 500]; // Mouse Over - we can swap the order of properties

const pepsiRed_2: [string, boolean, number] = ["red", true, 500];

pepsiRed_2[0] = 40; // Error

type Drink = [string, boolean, number];

const cola: Drink = ["brown", true, 500];
const tea: Drink = ["yellow", false, 20];

// Tuples
const carSpecs: [number, number] = [400, 219];
// Object
const carSpecs_2 = { torque: 400, maxSpeed: 219 };
