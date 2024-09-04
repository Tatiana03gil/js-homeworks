// Task 1

const formInputEl = document.querySelector('input[id="from"]');
const spanEl = document.querySelector("span");
formInputEl.addEventListener("input", (event) => {
  spanEl.textContent = formInputEl.value;
});

// Task 2

const messageBtnEl = document.querySelector(".messageBtn");
const messageEl = document.querySelector(".message");

messageBtnEl.addEventListener("click", (event) => {
  messageEl.classList.add("animate_animated", "animate_fadeInLeftBig");
  messageEl.style.visibility = "visible";
});

// Task 3

const formFieldEls = document.querySelectorAll(".form-control");
const formEl = document.querySelector("form");
const formBtnEl = formEl.querySelector("button");
console.log(formBtnEl);

formFieldEls.forEach((element) => {
  element.addEventListener("input", (event) => {
    if (element.value === "") {
      element.classList.add("error");
      element.style.border = "2px solid red";
    } else {
      element.classList.remove("error");
      element.style.border = "none";
    }
  });
});

const allFieldsFilled = [...formFieldEls].every((field) => field.value !== "");

if (allFieldsFilled) {
  formBtnEl.removeAttribute("disabled");
} else {
  formBtnEl.setAttribute("disabled", true);
}
