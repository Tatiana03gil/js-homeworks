//Task 1

dropDownItems = document.querySelectorAll(".dropdown-item");
dropDownItems.forEach((element) => {
  element.classList.add("super-dropdown");
});

//Task 2
let buttonEl = document.querySelector(".btn");
if (buttonEl.classList.contains("btn-secondary")) {
  buttonEl.classList.remove("btn-secondary");
} else {
  buttonEl.classList.add("btn-secondary");
}

// Task 3
let menuEl = document.querySelector(".menu");
menuEl.classList.remove("dropdown-menu");
console.log(menuEl);

// Task 4

const dropdownEl = document.querySelector("div", ".dropdown");
dropdownEl.insertAdjacentHTML("afterend", '<a href="#">link</a>');

// Task 5

let dropdownMenuButtonEl = document.querySelector("#dropdownMenuButton");
dropdownMenuButtonEl.setAttribute("id", "superDropdown");

// Task 6
let unknownElement = document.querySelector(
  '[aria-labelledby="dropdownMenuButton"]'
);
unknownElement.dataset.dd = "3";

// Task 7

let toggleEL = document.querySelector(".dropdown-toggle");
toggleEL.removeAttribute("type");
console.log(toggleEL);
