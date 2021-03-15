// Init
class Mobile {
  constructor(public color: string) {}

  // Always a M not m
  public drive(): void {
    console.log("burp brup");
  } // Blueprint of what the object should be
  public honk(): void {
    console.log("MUU MUUUUUU");
  }
}

const mobile = new Mobile("black"); // mobile

// mobile.drive();
// mobile.honk();
// RUN ts-node classes.ts

// All mothods Mobile into CAR
class Mobile2 extends Mobile {
  constructor(public headphones: number, color: string) {
    super(color);
  }
}

class Mobile3 extends Mobile {
  public driveMobile(): void {
    // We override driver() - override super class / parent
    console.log("Mobile3 Extends");
  }

  startMobile(): void {
    this.drive();
  }
}

const Car = new Mobile2(2, "black");
Car.drive();

const Car2 = new Mobile3("black");
// Car2.drive();
Car2.driveMobile();
// RUN ts-node classes.ts

// Constructor
class MobileColor {
  // Constructor
  constructor(public color: string) {}
}

const mobileColor = new MobileColor("black"); // mobile

console.log(mobileColor.color);
