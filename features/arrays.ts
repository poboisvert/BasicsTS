const carMakers: string[] = ["ladas", "hounday", "Tuyutas"];

const dates = [new Date(), new Date()];

const carsByMake: string[][] = [["F150"], ["550i"], ["C63"]];

// inference extracting values
const car = carMakers[0];
const aCar = carMakers.pop();

carMakers.push(100); // see error since not a string

// Flexible types
const important: (Date | string)[] = new Date();

important.push("1999-01-01");
important.push(1); // Error
