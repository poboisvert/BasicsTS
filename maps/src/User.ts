import faker from "faker";
import Mappable from "./CustomMap";

export class User implements Mappable {
  // User compatible with Mappable
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    // Usually at the top
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()), // Convert String to Numbers parseFloat
      lng: parseFloat(faker.address.longitude()),
    };
  }
  markerContent(): string {
    return `
    <h1>
    User is ${this.name}
    </h1>
    `;
  }
}
