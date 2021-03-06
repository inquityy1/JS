/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log('Jonas');
console.log('23');

let firstName = 'Shone';

console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name convention
let jonas_matilda = 'JM';
let $function = 27;

let person = 'jonas';
let PI = 3.1415;

let myFirstJob = 'Coder';
let myCurrentJob = 'Teacher';

let job1 = 'programmer';
let job2 = 'teacher';

console.log(myFirstJob);


// Booleans
let javascriptIsFun = true;
console.log(javascriptIsFun);

// Typeof
console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);


// null is not an object its bug :3
console.log(typeof null);


let age = 30;
age = 31;

const birthYear = 1991;
//birthYear = 1990;
//const job;

var job = 'programmer';
job = 'teacher';

lastName = 'Nikolic';
console.log(lastName);


// Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 2, 2 ** 3);
// 2 ** 3 means 2 * 2 * 2

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);

// Assignment operators
let x = 10 + 5;
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--; // x = x - 1
x--;
console.log(x);

// Comparison operators we have >, <, >=, <=
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);


const now = 2037
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

console.log(25 - 10 - 5);

let x, y;
x = y = 25-10-5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);


const johnsMassBefore = 92;
const johnsMassAfter = 85;
const johnsHeightBefore = 1.95;
const johnsHeightAfter = 1.76;

const marksMassBefore = 78;
const marksMassAfter = 95;
const marksHeightBefore = 1.69;
const marksHeightAfter = 1.88;

const johnsFirstTestBMI = johnsMassBefore / johnsHeightBefore ** 2;
const johnsSecondTestBMI = johnsMassAfter / (johnsHeightAfter * johnsHeightAfter);

const marksFirstTestBMI = marksMassBefore / marksHeightBefore ** 2;
const marksSecondTestBMI = marksMassAfter / (marksHeightAfter * marksHeightAfter);

const firstTestComparisonBMI = johnsFirstTestBMI > marksFirstTestBMI;
const secondTestComparisonBMI = johnsSecondTestBMI > marksSecondTestBMI;

console.log(johnsFirstTestBMI, johnsSecondTestBMI);
console.log(marksFirstTestBMI, marksSecondTestBMI);
console.log(firstTestComparisonBMI, secondTestComparisonBMI);


const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log('string with \n\ multiple \n\ lines');

console.log(`string
multiple
lines`);

// first example
const age = 15;

if(age >= 18) {
	console.log('Sarah can start drivin license :3');
} else {
	const yearsLeft = 18 - age;
	console.log(`Sarah is too young. Wait another ${yearsLeft} years :/`);
}


// second example
const birthYear = 2028;

let century;
if(birthYear <= 2000) {
	century = 20;
} else {
	century = 21;
}
console.log(century);


const johnsMassBefore = 92;
const johnsMassAfter = 85;
const johnsHeightBefore = 1.95;
const johnsHeightAfter = 1.76;

const marksMassBefore = 78;
const marksMassAfter = 95;
const marksHeightBefore = 1.69;
const marksHeightAfter = 1.88;

const johnsFirstTestBMI = (johnsMassBefore / johnsHeightBefore ** 2).toFixed(1);
const johnsSecondTestBMI = (johnsMassAfter / (johnsHeightAfter * johnsHeightAfter)).toFixed(1);

const marksFirstTestBMI = (marksMassBefore / marksHeightBefore ** 2).toFixed(1);
const marksSecondTestBMI = (marksMassAfter / (marksHeightAfter * marksHeightAfter)).toFixed(2);

if (johnsFirstTestBMI > marksFirstTestBMI) {
console.log(`Jhons first test BMI ${johnsFirstTestBMI} is higher than Marks ${marksFirstTestBMI}`);
} else {
	console.log(`Jhons first test BMI ${johnsFirstTestBMI} is lower than Marks ${marksFirstTestBMI}`);
}

if (johnsSecondTestBMI > marksSecondTestBMI) {
	console.log(`Jhons second test BMI ${johnsFirstTestBMI} is higher than Marks ${marksFirstTestBMI}`);
} else {
	console.log(`Jhons second test BMI ${johnsFirstTestBMI} is lower than Marks ${marksFirstTestBMI}`);
}


// type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

//type coercion
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' * '2');
// + means that string + next string
console.log('23' + '2');
console.log('23' > '18');

let n = '1' + 1;
n = n - 1;
console.log(n);


// 5 falsy values: 0, '', undefined, null, NaN.

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(''));
console.log(Boolean('Jonas'));
console.log(Boolean({}));

const money = 0;

if(money) {
	console.log('Dont spand it all ;)');
} else {
	console.log('You should get a job!');
}

let height;
if(height) {
	console.log('YAY! height is defined');
} else {
	console.log('Height is UNDEFINED');
}


const age = '18';
if(age === 18) console.log('You just became an adult(strict)');

if(age == 18) console.log('You just became an adult(loose)');

const favourite = Number(prompt("What is your favorite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
	console.log('cool! 23 is an amaizing number!');
}else if(favourite === 7) {
	console.log('7 is also a cool number');
}else if(favourite === 9) {
	console.log('9 is also a cool number');
}else {
	console.log('number is not 23 or 7');
}

if(favourite !== 23) console.log('Why not 23?');


const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;

// if(shouldDrive) {
//	console.log('Sarah is able to drive!')
// } else {
//	console.log('Some else should drive...');
// }

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if(hasDriversLicense && hasGoodVision && !isTired) {
	console.log('Sarah is able to drive!')
} else {
	console.log('Some else should drive...');
}


const dolphinsScore = (96 + 108 + 89) / 3;
const koalasScore = (88 + 91 + 110) / 3;
console.log(dolphinsScore, koalasScore);

if (dolphinsScore > koalasScore) {
	console.log('dolphins won');
} else if (koalasScore > dolphinsScore) {
	console.log('koalas won');
} else {
	console.log('draw');
}


const dolphinsScore = (272 + 112 + 101) / 3;
const koalasScore = (129 + 95 + 123) / 3;
console.log(dolphinsScore, koalasScore);

if (dolphinsScore > koalasScore && dolphinsScore >= 100) {
	console.log('dolphins win the trophy');
} else if (koalasScore > dolphinsScore && koalasScore >= 100) {
	console.log('koalas win the trophy');
} else {
	console.log('draw');
}



const dolphinsScore = (97 + 112 + 81) / 3;
const koalasScore = (109 + 95 + 86) / 3;
console.log(dolphinsScore, koalasScore);

if (dolphinsScore === koalasScore && dolphinsScore >= 100 && koalasScore >= 100) {
	console.log('draw');
} else if (dolphinsScore < 100 || koalasScore < 100) {
	console.log('no one wins the trophy');
}


const day = 'monday';

switch(day) {
	case 'monday': // day === 'monday'
		console.log('Plan course structure');
		console.log('Go to coding meetup');
		break;
	case 'tuesday':
		console.log('prepare theory videos');
		break;
	case 'wednesday':
	case 'thursday':
		console.log('write code examples');
		break;
	case 'friday':
		console.log('Record videos');
		break;
	case 'saturday':
	case 'sunday':
		console.log('Enjoy the weekend :D');
		break;
	default:
		console.log('Not a valid day!');
}

if (day === 'monday') {
	console.log('Plan course structure');
	console.log('Go to coding meetup');
} else if (day === 'tuesday') {
	console.log('prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
	console.log('write code examples');
} else if (day === 'friday') {
	console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
	console.log('Enjoy the weekend :D');
} else {
	console.log('Not a valid day!');
}


3 + 4
1991
true && false && !false

if (23 > 10) {
	const str = '23 is bigger';
}

const me = 'Jonas';
console.log(`I'm ${2037 - 1991} years old ${me}`)


const age = 23;
//age >= 18 ? console.log('i like to dring wine 👀') : console.log('i like to dring water 😈');
//age >= 18 ? 'wine' : 'water';

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

let drink2;
if(age >= 18) {
	drink2 = 'wine';
} else {
	drink2 = 'water';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);
*/


const bill = 275;

const tip = bill >= 50 &&
			bill <= 300 ?
			bill * (15 / 100) :
			bill * (20 / 100);

totalValue = bill + tip;

console.log(`The bill was ${bill}, the tip was ${tip}, and total value ${totalValue}`);

























