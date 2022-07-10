/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const car = {
  brand: "audi",
  color: "white",
  year: 2019,
  kmCoverage: 42000,
  tyres: {
    diameter: 16,
    quantity: 4,
    brand: "bridgestone",
  },
  doorStatus: "open",
  toogleDoors: function (status) {
    this.doorStatus = status;
    console.log("door status is change to: ", status);
  },
};

car.toogleDoors("close");
console.log(car.doorStatus);
