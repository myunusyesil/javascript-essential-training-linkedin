/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at traversing the DOM using JavaScript.
 */

let desc = document.querySelector(".site-description");
desc.innerHTML = "deneme";

let button = document.querySelectorAll(".lid-toggle");
console.log(button);
button.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    console.log(e.currentTarget);
    e.currentTarget.style.backgroundColor = "green";
  });
});
