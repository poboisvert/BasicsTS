// the function needs add = (a: number, b: number)
// the function return :number
// With arrow
const add = (a: number, b: number): number => {
  return a + b; // if no return a+b; we will have : number with an error
};

const sub = (a: number, b: number): number => {
  return a - b; // if no return a+b; we will have : number with an error
};

// Function NO ARROW
function divide(z: number, y: number): number {
  return z / y;
}

function mult(a: number, b: number): number {
  return a * b;
}

const logger = (message: string): void => {
  console.log(message);
};

const throwError = (message: string): void => {
  //:never will never send back
  if (!message) {
    throw new Error(message);
  }
};

const forecast = {
  date: new Date(),
  weather: "sunny",
};


// CAS 1 - ES2015
const logWeather = (forecast:{date:Date, weather:string}): void {
    console.log(forecast.date)
    console.log(forecast.weather)
} //{date:Date, weather:string} is the possible answer

// To call
logWeather(forecast)

// CASE 2 - ES2015
const logWeather_1 = ({date, weather}:{date:Date, weather:string}) => {
    console.log(date)
    console.log(weather)
}
logWeather_1(forecast)