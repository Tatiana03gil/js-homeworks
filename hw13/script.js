/*Задание №1
Нахождение минимального числа в массиве
Дан массив const arr = [1, 5, 7, 9]. Используя метод Math.min и оператор
распространения (spread operator), найдите минимальное число в массиве. Решение
должно быть написано в одной строке.*/

const arr = [1, 5, 7, 9];
console.log(Math.min(...arr));

/*Создание счетчика
Напишите функцию createCounter, которая создает счетчик и возвращает объект с
тремя методами: increment, decrement и getValue. Метод increment должен
увеличивать значение счетчика на 1, метод decrement должен уменьшать значение
счетчика на 1, а метод getValue должен возвращать текущее значение счетчика.
Значение счетчика должно быть доступно только через методы объекта, а не
напрямую.
Подсказка: Функция createCounter возвращает объект с методами для увеличения
и уменьшения счетчика. Приватная переменная count доступна только через методы
объекта, что обеспечивает инкапсуляцию данных.
*/

function createCounter() {
  let count = 0;
  return {
    increment() {
      count += 1;
    },
    decrement() {
      count -= 1;
    },
    getValue() {
      return count;
    },
  };
}

/*Рекурсивный поиск элемента по классу
Напишите рекурсивную функцию findElementByClass, которая принимает корневой
элемент дерева DOM и название класса в качестве аргументов и возвращает первый
найденный элемент с указанным классом в этом дереве.*/

function findElementByClass(root, className) {
  if (root.classList && root.classList.contains(className)) {
    return root;
  }

  for (let child of root.children) {
    let result = findElementByClass(child, className);
    if (result) {
      return result;
    }
  }
}
