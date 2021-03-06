'use strict';
/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 2001 && birthYear <= 2006) {
      var millenial = true;
      // Creating NEW variable with same name as outer scope's variable
      const firstName = 'Steven';

      // Reassigning outer scope's variable
      output = 'NEW OUTPUT';

      const str = `Oh, and you're a elite, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str);
    console.log(millenial);
    // console.log(add(2, 3)); just in case with no strict mode
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = 'Nebojsa';
calcAge(2001);
// console.log(age);
// printAge();

console.log(me);
// console.log(job);
// console.log(year);

var me = 'Nebojsa';
let job = 'teacher';
const year = 1991;

// Functions
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
console.log(addArrow);
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Example

if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);

// console.log(this);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  // console.log(this);
};
calcAge(2001);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  // console.log(this);
};
calcAgeArrow(2008);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
jonas.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge;
matilda.calcAge();

const f = jonas.calcAge;
f();

var firstName = 'Matilda';

const jonas = {
  firstName: 'nebojsa',
  year: 2001,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);

    // SOLUTION 1
    // const self = this; // self or that
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 2001 && self.year <= 2015);
    //   // console.log(this.year >= 2001 && this.year <= 2015);
    // };

    // SOLUTION 2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 2001 && this.year <= 2015);
    };
    isMillenial();
  },

  greet: function () {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};
jonas.greet();
jonas.calcAge();

// argument keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
// addArrow(2, 5, 8);

let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'Jonas',
  age: 30,
};
const friend = me;
friend.age = 27;

console.log('Friend', friend);
console.log('Me', me);
*/

// Primitive types
let lastName = 'Wiliams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

const jessica = {
  firstName: 'Jessica',
  lastName: 'Wiliams',
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage:', jessica);
console.log('After marriage:', marriedJessica);
// marriedJessica = {};

// Copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Wiliams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

console.log('Before marriage:', jessica2);
console.log('After marriage:', jessicaCopy);

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('Jhon');

console.log('Before marriage:', jessica2);
console.log('After marriage:', jessicaCopy);
