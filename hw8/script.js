// Task 1

document.addEventListener("DOMContentLoaded", () => {
  console.log("Все теги прогрузились");
});

// Task 2

window.addEventListener("load", function (event) {
  console.log("Cтраница загрузилась");
});

// Task 3

function click(event) {
  let target = event.target;
  if (target.classList.contains("super_element")) {
    console.log(
      `Класс "super_element" присутствует в элементе "${target.tagName.toLowerCase()}"`
    );
  } else {
    console.log(
      `Класс "super_element" отсутствует в элементе "${target.tagName.toLowerCase()}"`
    );
  }
}

bodyEl = document.querySelector("body");
bodyEl.addEventListener("click", click);

// Task 4

let textareaEl = document.querySelector("textarea");
textareaEl.addEventListener("mouseover", (event) => {
  console.log("Вы навели на textarea");
});

// Task 5

let ulEl = document.querySelector("ul");
ulEl.addEventListener("click", (event) => {
  let target = event.target;
  if (target.tagName === "BUTTON") {
    console.log(target.innerText);
  }
});

// Task 6

/*Это происходит из-за всплытия событий. Когда мы кликаем на кнопку внутри элемента <ul>, событие сначала срабатывает на самой кнопке, а потом это же событие поднимается вверх по дереву DOM и срабатывает на <ul>, потом на <body>, где находится обработчик из задания 3.*/

// Task 7

const listEls = document.querySelectorAll("li");
listEls.forEach((element, index) => {
  if ((index + 1) % 2 === 0) {
    element.style.backgroundColor = "lightblue";
  }
});
