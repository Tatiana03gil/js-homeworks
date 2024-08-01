// task 1

let num1 = Number(prompt("Введите первое число:"));
let num2 = Number(prompt("Введите второе число:"));

console.log((num1<=1 && num2>=3) ? 'Условия соблюдены' : 'Условия не соблюдены');

//task 2

let test = true;
console.log((test === true) ? '+++' : '---');

//task 3

let day = Number(prompt("Введите число от 1 до 31"));
if (day >= 1 && day <= 31) {
  if (day < 11) {
    console.log("Первая декада");
  } else if (day > 10 && day < 21) {
    console.log("Вторая декада");
  } else console.log("Третья декада");
} else console.log("За пределом интервала");

//task 4

let num = Number(prompt("Введите положительное целое число"));

let units = num%10;
let tens = (num-units)%100/10;
let hundreds = (num-units-tens*10)%1000/100;

console.log(`В числе ${num} количество сотен: ${hundreds}, десятков: ${tens}, единиц: ${units}`);
