/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at adding, removing, or modifying
 * attributes, classes, and inline styles on elements.
 */

const header = document.querySelector(".siteheader");
console.log(header);

const content = `<div>
<ul>
  <li><a href="">Home</a></li>
  <li><a href="">About</a></li>
  <li><a href="">Services</a></li>
  <li><a href="">Contact</a></li>
</ul>
</div>`;

let navBar = document.createElement("nav");
navBar.classList.add("nav-bar");
navBar.innerHTML = content;
header.prepend(navBar);
