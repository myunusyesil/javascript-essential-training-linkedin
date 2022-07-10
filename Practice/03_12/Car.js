/**
 * Creating classes:
 *
 * Class declaration: class Name {}
 * Class expression:  const Name = class {}
 */

class Car {
  constructor(
    // Defines parameters:
    brand,
    color,
    year,
    kmC,
    dia,
    quantity,
    brandT,
    doorStatus
  ) {
    // Define properties:
    this.brand = brand;
    this.color = color;
    this.year = year;
    this.kmCoverage = kmC;
    this.tyres = {
      diameter: dia,
      quantity: quantity,
      brand: brandT,
    };
    this.doorStatus = doorStatus;
  }
  // Add methods like normal functions:
  toggleDoors(status) {
    this.doorStatus = status;
  }
  changeBrand(brand) {
    this.brand = brand;
  }
}

export default Car;
