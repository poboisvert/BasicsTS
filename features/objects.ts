const profile = {
  name: "PartyPeople",
  age: 18,
  coords: {
    lat: 0,
    lng: 10,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

// ES2015 - Destructuring
const { age }: { age: number } = profile; // Fetch from const profile
const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;

const { age, name }: { age: number; name: string } = profile; // Fetch from const profile
