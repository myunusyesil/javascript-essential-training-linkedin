/**
 * Challenge: Create an advanced function.
 * - Loop through backpackObjectArray to create an article with the class "backpack".
 * - Give the article the ID of the current backpack object.
 * - Set the inner HTML of the article to the existing HTML output provided in const content.
 * - Append each backpack object to the <main> element.
 */
import Backpack from "./components/Backpack.js";

import backpackObjectArray from "./components/data.js";

const advancedFunction = function () {
  backpackObjectArray.forEach((element) => {
    const newArticle = document.createElement("article");
    newArticle.classList.add("backpack");
    newArticle.setAttribute("ID", element.id);
    newArticle.innerHTML = createContent(element);
    console.log(newArticle);
    const main = document.querySelector(".maincontent");
    main.append(newArticle);
    // return newArticle;
  });
};

// const everydayPack = new Backpack(
//   "pack01",
//   "Everyday Backpack",
//   30,
//   "grey",
//   15,
//   26,
//   26,
//   false,
//   "December 5, 2018 15:00:00 PST",
//   "../assets/images/everyday.svg"
// );

const createContent = function (objName) {
  const content = `
    <figure class="backpack__image">
      <img src=${objName.image} alt="" />
    </figure>
    <h1 class="backpack__name">${objName.name}</h1>
    <ul class="backpack__features">
      <li class="packprop backpack__volume">Volume:<span> ${
        objName.volume
      }l</span></li>
      <li class="packprop backpack__color">Color:<span> ${
        objName.color
      }</span></li>
      <li class="backpack__age">Age:<span> ${objName.backpackAge()} days old</span></li>
      <li class="packprop backpack__pockets">Number of pockets:<span> ${
        objName.pocketNum
      }</span></li>
      <li class="packprop backpack__strap">Left strap length:<span> ${
        objName.strapLength.left
      } inches</span></li>
      <li class="packprop backpack__strap">Right strap length:<span> ${
        objName.strapLength.right
      } inches</span></li>
      <li class="feature backpack__lid">Lid status:<span> ${
        objName.lidOpen ? "open" : "closed"
      }</span></li>
    </ul>
`;
  // console.log(content);
  return content;
};
// const main = document.querySelector(".maincontent");

// const newArticle = document.createElement("article");
// newArticle.classList.add("backpack");
// newArticle.setAttribute("id", "everyday");
// newArticle.innerHTML = content;

advancedFunction();
