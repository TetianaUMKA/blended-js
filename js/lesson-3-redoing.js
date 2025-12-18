// -------- 1
const numbers = [1, 2, 3, 4, 5];

const getNewNumbersArray = numArray => numArray.map(num => num ** 2);
console.log(getNewNumbersArray(numbers)); // [1, 4, 9, 16, 25]

// -------- 2
const data = [
  { id: 1, values: [1, 2, 3] },
  { id: 2, values: [4, 5, 6] },
  { id: 3, values: [7, 8, 9] },
];

const getDataArray = data =>
  data.reduce((acc, obj) => {
    acc = acc.concat(obj.values);
    return acc;
  }, []);

const dataValuesInfo = getDataArray(data);
console.log(dataValuesInfo); // [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let newArray = [];
// const getNewArray = data =>
//   data.forEach(obj => (newArray = newArray.concat(obj.values)));

// getNewArray(data);

// console.log(newArray); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// -------- 3

const people = [
  { name: 'John', age: 27 },
  { name: 'Jane', age: 31 },
  { name: 'Bob', age: 19 },
];

const checkAge = (array, minAge) => array.some(person => person.age < minAge);

console.log(checkAge(people, 20)); //true

// -------- 4

const numbers2 = [2, 4, 6, 8, 10];

const checkEvenNumber = array => array.every(num => num % 2 === 0);

console.log(checkEvenNumber(numbers2)); // true

// -------- 5

const numbers3 = [2, 1, 6, 8, 9, 10, 12];

const findFirstOddNumber = array => array.find(num => num % 2 !== 0);

console.log(findFirstOddNumber(numbers3)); // 1

// ------- 6

const numbersArray = [4, 2, 5, 1, 3];

const sortNumbersIncrease = array => array.toSorted();

console.log(sortNumbersIncrease(numbersArray)); // [1, 2, 3, 4, 5]

// ------- 7

const stringArray = ['banana', 'orange', 'apple', 'pear'];

const sortFruitsNameByAlphabet = fruitsArray => fruitsArray.toSorted();

console.log(sortFruitsNameByAlphabet(stringArray));

const sortFruitsNameReverse = fruitsArray => fruitsArray.toSorted().reverse();

// const sortFruitsNameReverse = fruitsArray =>
//   fruitsArray.toSorted((a, b) => b.localeCompare(a));

console.log(sortFruitsNameReverse(stringArray));

// ------ 8

const users = [
  { name: 'John', age: 27 },
  { name: 'Jane', age: 31 },
  { name: 'Bob', age: 19 },
];

const sortUsersByAgeDecrease = usersArray =>
  usersArray.toSorted((user1, user2) => user2.age - user1.age);

console.log(sortUsersByAgeDecrease(users));

// ------ 9

const users2 = [
  { name: 'John', age: 27 },
  { name: 'Jane', age: 31 },
  { name: 'Bob', age: 19 },
];

const filterUsersbyAge = (users, age) => users.filter(user => user.age > age);

console.log(filterUsersbyAge(users2, 20));

// ------ 10

const numbers4 = [1, 2, 3, 4, 5];

const countSum = numbers =>
  numbers.reduce((acc, num) => {
    acc += num;
    return acc;
  }, 0);

console.log(countSum(numbers4));

// ------ 11

class Calculator {
  currentValue;

  number(value) {
    this.currentValue = value;
    return this;
  }

  getResult() {
    return this.currentValue;
  }

  add(value) {
    this.currentValue += value;
    return this;
  }

  subtract(value) {
    this.currentValue -= value;
    return this;
  }

  divide(value) {
    value !== 0
      ? (this.currentValue /= value)
      : alert('Sorry! Not correct operation!');

    return this;
  }

  multiply(value) {
    this.currentValue *= value;
    return this;
  }

  reset() {
    this.currentValue = 0;
    return this;
  }
}

const calc = new Calculator();

const result = calc
  .number(10)
  .add(5)
  .subtract(3)
  .multiply(4)
  .divide(2)
  .getResult();

console.log(result); // 24

const calc2 = new Calculator();

const result2 = calc2.number(24).add(37).multiply(56).getResult();

console.log(result2); // 3416

// ----- 12

class Client {
  #login;
  #email;

  get login() {
    return this.#login;
  }

  set login(newLogin) {
    this.#login = newLogin;
  }

  get email() {
    return this.#email;
  }

  set email(newEmail) {
    newEmail.includes('@')
      ? (this.#email = newEmail)
      : alert('Incorrect email!');
  }
}

const newClient = new Client();

console.log(Client);
console.log(newClient);

newClient.login = 'bestlogin';
console.log(newClient.login);

newClient.email = 'something@gmail.com';
console.log(newClient.email);

console.log(newClient);

// ----- 13

const personData = {
  name: 'Kevin',
  age: 32,
  gender: 'male',
  email: 'kevin@gmail.com',
};

class Person {
  constructor({ name, age, gender, email }) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.email = email;
  }

  getDetails() {
    return {
      name: this.name,
      age: this.age,
      gender: this.gender,
      email: this.email,
    };
  }
}

const newPerson = new Person(personData);
console.log(newPerson.getDetails());

const employeeData = {
  name: 'Ben',
  age: 48,
  gender: 'male',
  email: 'ben@gmail.com',
  salary: 34000,
  department: 'hr',
};

class Employee extends Person {
  constructor({ name, age, gender, email, salary, department }) {
    super({ name, age, gender, email });
    this.salary = salary;
    this.department = department;
  }

  getEmployeeDetails() {
    return { salary: this.salary, department: this.department };
  }
}

const newEmployee = new Employee(employeeData);

console.log(newEmployee);

console.log({
  ...newEmployee.getDetails(),
  ...newEmployee.getEmployeeDetails(),
});
