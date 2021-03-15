import faker from "faker";

export class Company {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };
  constructor() {
    // Usually at the top
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()), // Convert String to Numbers parseFloat
      lng: parseFloat(faker.address.longitude()),
    };
  }
  markerContent(): string {
    return `
    <h3>
    Comapny is ${this.companyName} 
    and say ${this.catchPhrase}
    </h3>
    `;
  }
}
