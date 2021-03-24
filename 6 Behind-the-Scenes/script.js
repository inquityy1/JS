'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    const output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 2001 && birthYear <= 2006) {
      var millenial = true;
      const str = `Oh, and you're a elite, ${firstName}`;
      console.log(str);
    }
    // console.log(str);
    console.log(millenial);
  }
  printAge();

  return age;
}

const firstName = 'Nebojsa';
calcAge(2001);
// console.log(age);
// printAge();
