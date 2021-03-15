// TS Interface
interface Icar {
  name: string;
  year: number;
  broken: boolean;
  summary(): string;
}

// Object
const civic = {
  name: "civic",
  year: 2000,
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};
//
//
//
// New case
const printCar = (vehicule: {
  name: string;
  year: number;
  broken: boolean;
}) => {
  console.log(`Name is ${vehicule.name}`);
};

printCar(civic);

// New case
const printCar_2 = (vehicule: Icar) => {
  console.log(`Name is ${vehicule.name}`);
};

printCar_2(civic);

const printCar_3 = (vehicule: Icar) => {
  console.log(Vehicule.summary());
};

printCar_3(civic);

// New case
interface Template {
  summary(): string;
}

const printCar_4 = (vehicule: Template) => {
  console.log(`Name is ${vehicule.summary()}`);
};

printCar_4(civic);

//
const drink = {
  color: "blue",
  alcool: true,
  sugar: 69,
  summary(): string {
    return `Hello the color is: ${this.color}`;
  },
};

const printSummary = (item: Tempalte): void => {
  console.log(item.summary());
};

printSummary(drink);
printSummary(civic);
