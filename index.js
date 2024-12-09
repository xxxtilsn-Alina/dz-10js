// 1. Напиши скрипт який при кліку на кнопку буде виводити на екран повідомлення “Hello World!”.
//  Використовуй колбек в вигляді стрілки

const massage = (buttons) => {
  const mes = alert("Ок?");
  if (mes === undefined) {
    alert("Hello world!");
  }
  return buttons;
};

console.log(massage());

// 2. Створи програму, яка генерує випадкове число від 1 до 100.
//  Користувач повинен вгадати число, введенням його в текстове поле.
//  При кліку на кнопку "Перевірити" програма повинна повідомити користувача, чи є їх відповідь правильною.2

const random = (matsh) => {
  return matsh;
};

const Numbers = (what) => {
  const who = prompt("Вгадай число");
  for (let i = 1; i <= who.length; i++) {
    if (Number(who[i]) === what) {
      alert("Вітаю, все вірно");
    } else {
      alert("Спробуй ще раз");
    }
  }
  return what;
};

console.log(Numbers(random(Math.ceil(Math.random() * (100 - 1) + 1))));

// 3. Створи програму, яка відображає повідомлення про те, скільки разів користувач клікнув на сторінці.

// 4. Напиши функцію, яка приймає масив чисел і колбек-функцію.
// Функція повинна застосовувати колбек-функцію до кожного елементу масиву та повертати новий масив,
// що містить результати застосування колбек-функції до кожного елементу.
const arr = [1, 2, 3, 4, 5];
const callbackElement = (arr, callBack) => {
  const arrResult = [];
  for (let i = 0; i < arr.length; i++) {
    arrResult.push(callBack(arr[i]));
  }
  return arrResult;
};

const squreCallback = (manipulation) => {
  return manipulation * manipulation;
};

const result = callbackElement(arr, squreCallback);
console.log(result);

// 5. Розрахунок дисконтної ціни

// Створіть функцію, яка розраховує дисконтну ціну на товар з урахуванням знижки.
// Функція повинна приймати вартість товару та відсоток знижки як аргументи.
// Використайте стрілкову функцію та колбек.

const showPrice = (price, discount, callback) => {
  const discounPrice = callback(price, discount);
  return discounPrice;
};

const caclculatePrice = (price, discount) => {
  const division = discount / 100;
  const subtraction = 1 - division;
  const mult = price * subtraction;
  return mult;
};

console.log(showPrice(100, 10, caclculatePrice));
