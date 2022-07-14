/**
 * Practice: Pass values between functions
 *
 * - Create two functions
 * - Main function creates article element with data from object
 * - Helper function creates.
 */

// function decleration .title class'ı olan elamnın içeriğini değiştirdik.
function changeTitle(header) {
  const title = document.querySelector(".title");
  title.innerHTML = header;
}
changeTitle("Bu değiştirilmiş başlıktır");

// fuction expression, main tag'ine class ekledik.
const addClass = function (classNam) {
  const main = document.querySelector("main");
  console.log(main);
  main.classList.add(classNam);
};
// addClass("ahmet");

// arrow function
var header = "Bu bir üst başlıktır: h1";

const addHeader = (header) => {
  const main = document.querySelector("main");
  const newHeader = document.createElement("h1");
  newHeader.innerHTML = header;
  main.prepend(newHeader);
};

addHeader(header);
