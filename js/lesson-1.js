// const login = prompt('login'); // string or null
// alert('Success!') // undefined
// const isAgree = confirm('Are you agree?') // true or false

//----- task-1 -----//
// Запропонуйте користувачу ввести число за допомогою prompt().
// Збережіть введене значення у змінну number.
// Перевірте, чи дорівнює змінна number числу 10:
//    Якщо так – виведіть повідомлення 'Вірно' у alert().
//    Якщо ні – виведіть 'Невірно'.

// Підказка: prompt завжди повертає рядок (String), тому перед перевіркою
// перетворіть значення на число за допомогою Number().

// const number = Number(prompt('Type number'));
// console.log(number);

// number === 10 ? alert('Right') : alert('Wrong');

// alert(number === 10 ? 'Right' : 'Wrong');

//----- task-2 -----//
// У змінній min лежить випадкове число від 0 до 59.
// Визначте, в яку чверть години потрапляє
// це число (у першу, другу, третю чи четверту).
// Виведіть в alert відповідне повідомлення, наприклад:
// "10 входить в першу чверть"

// const min = Math.floor(Math.random() * (59 - 0) + 0);
// if (min <= 15) {
//   alert(`${min} входить в першу чверть`);
// } else if (min <= 30) {
//   alert(`${min} входить в другу чверть`);
// } else if (min <= 45) {
//   alert(`${min} входить в третю чверть`);
// } else {
//   alert(`${min} входить в четверту чверть`);
// }

//----- task-3 -----//
// Змінна num може набувати 4 значення: '1', '2', '3' або '4'
// (запитуй це значення у користувача через prompt).
// Якщо вона має значення '1', то у змінну result запишіть 'зима',
// якщо має значення '2' - 'весна' і так далі.
// Розв'яжіть завдання через switch-case.
// Не забудьте про дефолтне значення, на випадок, якщо користувач
// введе в prompt щось інше. В такому випадку result має набувати значення:
// "Вибачте, але ви маєте ввести значення від 1 до 4 включно".
// Значення змінної result виведіть в консоль.

// const num = Number(prompt('Type number from 1 to 4'));
// let result;
// switch (num) {
//   case 1:
//     result = 'Winter';
//     break;
//   case 2:
//     result = 'Spring';
//     break;
//   case 3:
//     result = 'Summer';
//     break;
//   case 4:
//     result = 'Winter';
//     break;
// }
// console.log(result);

//----- task-4 -----//
// Отримуйте від користувача число (кількість хвилин) через prompt
// і виводьте у консоль рядок у форматі годин та хвилин.
// Приклад: користувач вводить в prompt '70' -> в консолі відобразиться '01:10'.
// Корисне посилання для відображення годин та хвилин у потрібному форматі ('01' замість '1'):
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart#examples

// const number = Number(prompt('Enter number of minutes'));

// const hours = String(Math.floor(number / 60));
// const minutes = String(number % 60);

// const timeResult = `${hours.padStart(2, '0')} : ${minutes.padStart(2, '0')}`;
// console.log(timeResult);

//----- task-5 -----//
// Напишіть код, який запитуватиме у користувача
// логін за допомогою prompt і виводить результат в консоль браузера

// Після цього додайте перевірку введеного користувачем значення:
// Якщо відвідувач вводить "Адмін",
// то prompt запитує пароль (не забудьте зберігти його у змінну для подальшої перевірки).
// Якщо нічого не ввели або натиснули Cancel,
// Вивести в alert строку "Скасовано"
// В іншому випадку вивести в alert рядок "Я вас не знаю"

// Пароль перевіряти так:
// Якщо введено пароль "Я головний",
// то вивести в alert рядок "Добрий день!",
// в іншому випадку вивести в alert рядок "Невірний пароль!"

// const login = prompt('Please enter login');

// if (login === 'Admin') {
//   const password = prompt('Please enter the password:');
//   alert(password === 'Admin007' ? 'Hello, Admin' : 'Wrong password');
// }

//----- task-6 -----//

// Використайте цикл while, щоб вивести в console всі числа від 0 до 20 включно.

let num = 0;

while (num <= 20) {
  console.log(num);
  num += 1;
}

//----- task-7 -----//

// Напишіть функцію getNumbers(min, max), що приймає 2 параметри -
// мінімальне і максимальне число відповідно.
// Напишіть цикл всередині функції, який виводить у консоль
// всі числа від max до min за спаданням.
// Окрім цього, підрахуйте суму всіх парних чисел в цьому циклі
// і поверніть її з функції.

function getNumbers(min, max) {
  let totalEvenNumbers = 0;
  for (let i = max; i >= min; i--) {
    console.log(i);

    if (i % 2 === 0) {
      totalEvenNumbers += i;
    }
  }
  return totalEvenNumbers;
}

console.log(getNumbers(4, 29));

//----- task-8 -----//

// Напишіть функцію min(a, b), яка приймає 2 числа і повертає меньше з них.
// Потрібно додати перевірку, що функція отримує саме числа, в іншому випадку
// повертати з функції рядок - 'Not a number!'.

function min(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return 'Not a number';
  }
  return a < b ? a : b;
}

console.log(min(25, 8));
console.log(min(9, 46));

//----- task-9 -----//

// Напишіть функцію isAdult(age), яка  приймає число - вік користувача і повертає true,
// якщо параметр age більше чи дорівнює 18.
// В іншому випадку вона запитує підтвердження через confirm
// і повертає його результат (true/false).

function isAdult(age) {
  if (age >= 18) {
    return true;
  } else {
    return confirm('Are you agree?');
  }
}
// console.log(isAdult(58));
// console.log(isAdult(17));

//----- task-10 -----//

// Напишіть функцію fizzBuzz(num), яка приймає число і перевіряє кожне число від 1 до num:
// Якщо число ділитися  без остачі на 3 - виводить в консоль 'fizz',
// якщо ділиться  без остачі на 5 - виводить в консоль 'buzz',
// якщо ділиться  без остачі і на 3, і на 5 - виводить в консоль 'fizzbuzz'.

function fizzBuzz(num) {
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('fizzbuzz');
    } else if (i % 3 === 0) {
      console.log('fizz');
    } else if (i % 5 === 0) {
      console.log('buzz');
    }
  }
}

fizzBuzz(25);

//----- task-11 -----//
// Напишіть цикл, який пропонує ввести
// число більше 100 через prompt.
// Якщо користувач ввів інше число - попросити
// ввести ще раз.
// Цикл повинен питати число, доки користувач не
// введе число більше 100, чи не натисне кнопку
// Cancel в prompt

// let enteredNumber;
// do {
//   enteredNumber = prompt('Enter number more than 100');
// } while (enteredNumber && enteredNumber <= 100);

// if (enteredNumber === null) {
//   console.log('Come back later!');
// }

// if ('' || !Number(enteredNumber)) {
//   console.log('This is an incorrect entry!');
// }
// console.log(enteredNumber);

//----- task-12 -----//
// Напишіть функцію, яка приймає адресу сайта url та перевіряє чи закінчується значення
// параметра символом /. Якщо ні, додайте до кінця
// значення url цей символ і поверніть оновлене значення з функції, але тільки в тому випадку,
// якщо в url є підрядок "my-site".
// В іншому випадку поверніть з функції адресу в незмінному вигляді

const url = 'https://my-site.com/about';

function correctUrl(url) {
  let correctedUrl = '';

  if (url.includes('my-site') && !url.endsWith('/')) {
    correctedUrl = `${url.slice(0)}/`;
  }
  return correctedUrl;
}

console.log(correctUrl(url));
