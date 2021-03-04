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


const calcAge = function(year) {
	return 2037 - year;
}

const yearsUntilRetirement = function (birthYear, firstName) {
	const age = calcAge(birthYear);
	const retirement = 65 - age;
	
	if(retirement > 0) {
		console.log(`${firstName} retires in ${retirement} years`);
		return retirement;
	} else {
		console.log(`${firstName} has alredy retired 😎`);
		return -1;
	}
}

console.log (yearsUntilRetirement(2001, 'Nebojsa'));
console.log (yearsUntilRetirement(1950, 'Nemanja'));


// full version of => 

// const calcAverage = (A, B, C) => {
//	const average = (A + B + C) / 3;
//	return average;
// }
// console.log(calcAverage(3, 3, 15));

// shortcut

console.log(calcAverage2(3, 3 , 15));


// both team average

let scoreDolphins = calcAverage2(44, 23, 71);
let scoreKoalas = calcAverage2(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

// who won the trophy 

const checkWinner = function(avgDolphins, avgKoalas) {
	if (avgDolphins >= avgKoalas * 2) {
		console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
	} else if (avgKoalas >= avgDolphins * 2) {
		console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
	} else {
		console.log('No team wins...');
	}
}
checkWinner(scoreDolphins, scoreKoalas);

// test 2

scoreDolphins = calcAverage2(85, 54, 41);
scoreKoalas = calcAverage2(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);



const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'jay';
console.log(friends);
// friends = ['Bob', 'alice']

const firstName = 'Jonas';
const jonas = [
	firstName,
	'Schmedtmann',
	2037 - 1991,
	'teacher',
	friends
];
console.log(jonas);
console.log(jonas.length);

// Exercise
const calcAge = function(birthYear) {
	return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
	calcAge(years[0]),
	calcAge(years[1]),
	calcAge(years[years.length - 1])
];
console.log(ages);


const friends = ['Michael', 'Steven', 'Peter'];

// add elements
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

// Remove elements
friends.pop(); //Last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift();
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('sdsa'));

console.log(friends.includes('Steven'));
console.log(friends.includes('sdsa'));

if (friends.includes('Steven')) {
	console.log('You have frend');
}



// const calcBill = function (bill) {
//	return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }

function calcBill(bill) {
	if (bill >= 50 && bill <= 300) {
		return bill * 0.15;
	} else {
		return bill * 0.2;
	}
}

const bills = [125,555,44];
const tips = [
	calcBill(bills[0]),
	calcBill(bills[1]),
	calcBill(bills[2])
];
console.log(bills, tips);

const totals = [
	tips[0] + bills[0],
	tips[1] + bills[1],
	tips[2] + bills[2]
]
console.log(totals);



const jonasArray = [
	'Nebojsa',
	'Nikolic',
	2037 - 2001,
	'Teacher'
	['Michael', 'Peter', 'Steven']
];

const jonas = {
	firstName: 'Nebojsa',
	lastName: 'Nikolic',
	age: 2037 - 2001,
	job: 'Teacher',
	friends: ['Michael', 'Peter', 'Steven']
};

console.log(jonas);


const nebojsa = {
	firstName: 'Nebojsa',
	lastName: 'Nikolic',
	age: 2037 - 2001,
	job: 'Teacher',
	friends: ['Michael', 'Peter', 'Steven']
};

console.log(nebojsa);

console.log(nebojsa.lastName);
console.log(nebojsa['lastName']);

const nameKey = 'Name';
console.log(nebojsa['first' + nameKey]);
console.log(nebojsa['last' + nameKey]);

//	not working
//console.log(nebojsa.'last' + nameKey);

const intrestedIn = prompt('What do you want to know about Nebojsa? Choose brtween firstName, age, job, lastName and friends');

if (nebojsa[intrestedIn]) {
console.log(nebojsa[intrestedIn]);
} else {
	console.log('Wrong request! Choose brtween firstName, age, job, lastName and friends');	
}

nebojsa.location = 'Portugal';
nebojsa['twitter'] = '@JoeMama'
console.log(nebojsa);

// Challenge
// Nebojsa has 3 friends, and his best friend is called Michael
// make it in dinamic way

console.log(`${nebojsa.firstName} has ${nebojsa.friends.length} friends, and his best friend is called ${nebojsa.friends[0]}`);



const nebojsa = {
	firstName: 'Nebojsa',
	lastName: 'Nikolic',
	birthYear: 2001,
	job: 'Teacher',
	friends: ['Michael', 'Peter', 'Steven'],
	hasDriversLicense: false,
	
//	calcAge: function(birthYear) {
//		return 2037 - birthYear;
//	}
	
//	calcAge: function() {
//		console.log(this);
//		return 2037 - this.birthYear;
//	}

	calcAge: function() {
		this.age = 2037 - this.birthYear;
		return this.age;
	},
	
	getSummary: function() {
		return `${this.firstName} is a ${this.calcAge()}-year old ${nebojsa.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`;
	}
};

console.log(nebojsa.calcAge());

console.log(nebojsa.age);
console.log(nebojsa.age);
console.log(nebojsa.age);

// Challenge
// "Nebojsa is a 36 year old teacher, and he has a/no driver's license"

console.log(nebojsa.getSummary());



const mark = {
	fullName: 'Mark Miller',
	mass: 78,
	height: 1.69,
	
//	calcBMI: function() {
//		return (this.mass / this.height ** 2).toFixed(1);
//	}

	calcBMI: function() {
		this.bmi = this.mass / this.height ** 2;
		return this.bmi;
	}
}

const john = {
	fullName: 'John Smith',
	mass: 92,
	height: 1.95,
	
//	calcBMI: function() {
//		return (this.mass / this.height ** 2).toFixed(1);
//	}

	calcBMI: function() {
		this.bmi = this.mass / this.height ** 2;
		return this.bmi;
	}
}

mark.calcBMI();
john.calcBMI();

console.log(mark.calcBMI());
console.log(john.calcBMI());

// console.log(`${(mark.calcBMI() > john.calcBMI()) ? mark.fullName : john.fullName}'s BMI (${(mark.calcBMI() > john.calcBMI()) ? mark.calcBMI() : john.calcBMI()}) is higher than ${(john.calcBMI() > mark.calcBMI()) ? mark.fullName : john.fullName}'s (${(john.calcBMI() > mark.calcBMI()) ? mark.calcBMI() : john.calcBMI()}) BMI `);

if (mark.bmi > john.bmi) {
	console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`)
} else if (john.bmi > mark.bmi) {
	console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`)
} else {
	console.log('They have same BMI')
}



// for loop keeps running while condition is true
for(let rep = 5; rep <= 10; rep++) {
	console.log(`Lifting weights repetition ${rep} 😁`);
}


const nebojsa = [
	'Nebojsa',
	'Nikolic',
	2037 - 2001,
	'teacher',
	['Michael', 'Peter', 'Steven'],
	true
];
const types = [];

// console.log(jonas[0])
// console.log(jonas[1])
//...
// console.log(jonas[4])
// console.log(jonas[5]) does NOT exist

for (let i = 0; i < nebojsa.length; i++) {
	// reading from jonas array
	console.log(nebojsa[i], typeof nebojsa[i]);

	// filling types array
	//types[i] = typeof nebojsa[i];
	types.push(typeof nebojsa[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
	ages.push (2037 - years[i]);
}
console.log(ages);

// continue and break
console.log('--- ONLY STRINGS ---');
for (let i = 0; i < nebojsa.length; i++) {
	if(typeof nebojsa[i] !== 'string') continue;
	
	console.log(nebojsa[i], typeof nebojsa[i]);
}

console.log('--- BREAK WITH NUMBER ---');
for (let i = 0; i < nebojsa.length; i++) {
	if(typeof nebojsa[i] === 'number') break;
	
	console.log(nebojsa[i], typeof nebojsa[i]);
}



const nebojsa = [
	'Nebojsa',
	'Nikolic',
	2037 - 2001,
	'teacher',
	['Michael', 'Peter', 'Steven'],
	true
];

// 0, 2, ..., 4
// 4, 3, ..., 0

for(let i = nebojsa.length -1; i >= 0; i--) {
	console.log(i, nebojsa[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
console.log(`--------- Starting ${exercise}`);

	for (let rep = 1; rep <= 6; rep++) {
		console.log(`exercise ${exercise}: Lifting weight repetition ${rep}`)
	}
}
*/

for (let rep = 1; rep <= 10; rep++) {
	console.log(`Lifting weight repetition ${rep}`);
}

let rep = 1;
while (rep <= 10) {
	console.log(`Lifting weight repetition ${rep}`);
	rep++;
}








