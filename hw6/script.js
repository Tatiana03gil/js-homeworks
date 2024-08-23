// task 1
const superLinkEl = document.getElementById("super_link");
console.log(superLinkEl);
// task 2
let cardLinkArr = document.querySelectorAll(".card-link");
cardLinkArr.forEach((element) => {
  element.textContent = "Ссылка";
});
//task 3
const cardBodyEl = document.querySelector(".card-body");
const cardLinksEl = cardBodyEl.querySelectorAll(".card-link");
console.log(cardLinksEl);
//task 4
const dataNumberEl = document.querySelector('[data-number="50"]');
console.log(dataNumberEl);
//task 5
const titleEl = document.querySelector("title");
const titleContext = titleEl.textContent;
console.log(titleContext);
//task 6
const cardTitleEl = document.querySelector(".card-title");
const cardTitleParent = cardTitleEl.parentNode;
console.log(cardTitleParent);
//task 7
let pEl = document.createElement("p");
pEl.textContent = "Привет";
let parentNode = document.querySelector(".card");
parentNode.insertBefore(pEl, parentNode.firstElementChild);
//task 8
document.querySelector("h6").remove();
