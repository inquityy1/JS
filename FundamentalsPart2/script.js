/* 
'use strict';

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;

if (hasDriversLicense) console.log('I can drive :D');

// const interface = 'Audio';
// const private = 534;
// const if = 23;


function logger() {
	console.log('My name is jonas');
}

// Calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
	const juice = `Juice with ${apples} apples and ${oranges} oranges`;
	return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);



// Function declaration
function calcAge1(birthYear) {
	return 2037  - birthYear;
}

const age1 = calcAge1(2001);

// function expression
const calcAge2 = function (birthYear) {
	return 2037  - birthYear;
}

const age2 = calcAge2(2001);

console.log(age1, age2);


// function expression
const calcAge2 = function (birthYear) {
	return 2037  - birthYear;
}

// Arrow function
const calcAge3 = birthYear => 2021 - birthYear;
const age3 = calcAge3(2001);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
	const age = 2021 - birthYear;
	const retirement = 65 - age;
	//return retirement;
	return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(2001, 'Nebojsa'));
console.log(yearsUntilRetirement(2008, 'Nemanja'));
*/

function cutFruitPieces(fruit) {
	return fruit * 4;
}

function fruitProcessor(apples, oranges) {
	const applePieces = cutFruitPieces(apples);
	const orangePieces = cutFruitPieces(oranges);
	
	const juice = `Juice with ${applePieces} piece of apples and ${orangePieces} piece of oranges`;
	return juice;
}
fruitProcessor(2, 3);

console.log(fruitProcessor(2, 3));
















