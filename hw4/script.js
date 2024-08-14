// Task 1

/*for (let i = 0; i < 11; i++) {
  if (i === 0) {
    console.log("0 - это ноль");
  } else if (i % 2 === 0) {
    console.log(`${i} - четное число`);
  } else {
    console.log(`${i} - нечетное число`);
  }
}*/

//Task 2

/*let array = [1, 2, 3, 4, 5, 6, 7];
array.splice(3, 2);
console.log(array);*/

//Task 3
/*
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
let array = [];
let sum = 0;
let min;
for (let i = 0; i < 5; i++) {
  array.push(getRandomNumber(1, 9));
}
for (let i = 0; i < 5; i++) {
  sum = sum + array[i];
  if (min < array[i]) {
    min = array[i];
  }
}
console.log(array);
console.log(`Сумма элементов массива: ${sum}`);
for (let i = 0; i < 5; i++) {
  if (array[i] === 3) {
    console.log("Есть 3");
    break;
  } else {
    console.log("Троек нет");
  }
}
*/

//Task 4
let line = "x";
for (let i = 0; i < 20; i++) {
    console.log(line);  
    line = line+"x";
}