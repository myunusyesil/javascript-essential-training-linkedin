/**
 * Practice: Play with event listeners
 * - Use an event listener and CSS either inline or through an added class to draw a highlight around the entire grid when you hover over it with your mouse.
 * - Add an event listener to each grid cell to highlight that cell when you hover your mouse over it.
 * - Add an event listener to each grid cell to change its background color when it is clicked.
 * - Add an event listener to a specific key on the keyboard to change the background color of the whole page - from dark to light and back again.
 */

const grid = document.querySelector(".grid");
const cells = document.querySelectorAll(".cell");

// console.log(grid);

grid.addEventListener("mouseover", function (e) {
  const classes = e.currentTarget.classList;
  classes.add("grid-border");
  // console.log(classes);
});

grid.addEventListener("mouseleave", function (e) {
  e.currentTarget.classList.remove("grid-border");
});

grid.addEventListener("click", function (e) {
  e.currentTarget.classList.add("grid-selected");
});

document.addEventListener(
  "keydown",
  (event) => {
    var name = event.key;
    var code = event.code;
    // Alert the key name and key code on keydown
    // alert(`Key pressed ${name} \r\n Key code value: ${code}`);
    if (name == "a") {
      document.body.classList.toggle("background-toggle");
      grid.classList.remove("grid-selected");
    }
    // console.log(document.body.classList);
  },
  false
);

cells.forEach((cell) => {
  cell.addEventListener("mouseover", (e) => {
    var randomColor = colorPicker();
    e.currentTarget.style.backgroundColor = randomColor;
  });
});

cells.forEach((cell) => {
  cell.addEventListener("click", (e) => {
    var randomColor = colorPicker();
    e.currentTarget.style.backgroundColor = randomColor;
  });
});

cells.forEach((cell) => {
  cell.addEventListener("mouseleave", (e) => {
    e.currentTarget.style.backgroundColor = "#e6e6e6";
  });
});

const colorArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

function colorPicker() {
  var hex = ["#"];

  for (let index = 0; index < 6; index++) {
    let randomIndex = Math.floor(Math.random() * 15);
    hex += colorArr[randomIndex];
  }
  // console.log(hex);
  return hex;
}
