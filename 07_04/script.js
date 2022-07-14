/**
 * Challenge: Build and modify an array
 * - Build an array with 8 items
 * - Remove the last item
 * - Add the last item as the first item on the array
 * - Sort the items by alphabetical order
 * - Use the find() method to find a specific item in the array
 * - Remove the item you found using the find method from the array.
 */

// create an array
const myArr = [
  "LG TV",
  "Boogie Sofa",
  "Flowers",
  "Frames",
  "Books",
  "Curtains",
  10,
  14,
];

console.log(myArr);
// remove last item
// what is last item
let lastItem = myArr[myArr.length - 1];
myArr.pop();
console.log("remove last item", myArr);

// move last item to the first pos
myArr.unshift(lastItem);
console.log("move last item to the first pos", myArr);

// sorting array alpa
console.log(myArr.sort());

const found = myArr.find((element) => element === "Frames");
console.log("Bulunan elaman: ", found);

let i = 3;
let willDeleted = myArr[i];
console.log("Bu eleman silinecek: ", willDeleted);

// bir item'ı sildik
myArr.splice(3, 1);
console.log("index numarası 3 olan eleman silindi", myArr);
