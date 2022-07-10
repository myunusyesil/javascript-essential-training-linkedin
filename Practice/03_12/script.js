/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

// Car object oluşturdum, ve property'lere değerler atadım. 1 adet method tanımladım.

import Car from "./Car.js";

const newCar = new Car("bmw", "red", 2022, 12000, 17, 4, "michelin", "open");

console.log("The newCar object:", newCar);
newCar.changeBrand("volvo");
console.log(newCar.brand);
