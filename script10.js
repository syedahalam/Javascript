'use strict';

// closures

// const secureBooking = () => {
// 	let passengerCount = 0;

// 	return function () {
// 		passengerCount++;
// 		console.log(`${passengerCount} passengers`);
// 	};
// };

// const booker = secureBooking();

// booker();
// booker();
// booker();

// //////

// more closures
// example 1
// let f;

// const g = () => {
// 	const a = 23;
// 	f = function () {
// 		console.log(a * 2);
// 	};
// };

// const h = () => {
// 	const b = 777;
// 	f = function () {
// 		console.log(b * 2);
// 	};
// };
// g();
// f();
// console.dir(f);
// re assigning f function
// h();
// f();
// console.dir(f);
// ///////

// example 2

// const boardPassenger = (n, wait) => {
// 	const perGroup = n / 3;

// 	setTimeout(function () {
// 		console.log(`We are now boarding all ${n} passengers`);
// 		console.log(`There are 3 groups, each with ${perGroup} passengers`);
// 	}, wait * 1000);

// 	console.log(`Will start boarding in ${wait} seconds`);
// };
// const perGroup = 1000;
// boardPassenger(180, 3);

// const runOnce = () => {
// 	console.log('This will never run again');
// };
// runOnce();

// IIFE ->Immediately Involed function expression
// (function () {
// 	console.log('This will never run again');
// })();

// (() => console.log('This will never run again'))();

// const lufthansa = {
// 	airline: 'lufthansa',
// 	iataCode: 'LH',
// 	bookings: [],
// 	book(flightNum, name) {
// 		console.log(
// 			`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
// 		);
// 		this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
// 	},
// };
// lufthansa.book(239, 'Syeda Alam');
// lufthansa.book(635, 'Mir Alam');
// console.log(lufthansa);

// const eurowings = {
// 	airline: 'Eurowings',
// 	iataCode: 'EW',
// 	bookings: [],
// };
// const book = lufthansa.book;

// Call( method)
// book(23, 'Aamina Alam');
// book.call(eurowings, 32, 'Omer Alam');
// book.call(lufthansa, 45, 'Yahyaa Alam');

// const swiss = {
// 	airline: 'Swiss Air Lines',
// 	iataCode: 'LX',
// 	bookings: [],
// };
// book.call(swiss, 546, 'Mary Cooper');

// Apply() method

// const flightData = [657, 'George Cooper'];
// book.apply(swiss, flightData);
// console.log(swiss);

// book.call(swiss, ...flightData);

// bind() method

// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// const bookLX = book.bind(swiss);
// bookEW(23, 'Steven William');

// const bookEW23 = book.bind(eurowings, 23);
// bookEW23('Mohammad Alam');
// bookEW23('Mir Alam');

// event listener bind() method

// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
// 	console.log(this);
// 	this.planes++;

// 	console.log(this.planes);
// };
// lufthansa.buyPlane();

// document
// 	.querySelector('.buy')
// 	.addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial APplication

// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23);
// addVat=value=>value+value*0.23

// console.log(addVAT(100));
// console.log(addVAT(23));

// const addTaxRate = (rate) => (value) => value + value * rate;
// const addVAT2 = addTaxRate(0.23);
// console.log(addVAT2(100));

// challenge # 1

// const poll = {
// 	question: 'What is you favorite programming language?',
// 	options: ['0:Javascript', '1:Python', '2:Rust', '3:C++'],
// 	answers: new Array(4).fill(0),
// 	registerNewAnswer() {
// 		const answer = Number(
// 			prompt(
// 				`${this.question}\n${this.options.join('\n')}\n(Write an option number)`
// 			)
// 		);

// 		console.log(answer);
//Register answer
// 		typeof answer === 'number' &&
// 			answer < this.answers.length &&
// 			this.answers[answer]++;
// 		this.displayResults();
// 		this.displayResults('string');
// 	},
// 	displayResults(type = 'array') {
// 		if (type === 'array') {
// 			console.log(this.answers);
// 		} else if (type === 'string') {
// 			console.log(`Polll results are ${this.answers.join(', ')}`);
// 		}
// 	},
// };
// poll.registerNewAnswer();

// document
// 	.querySelector('.poll')
// 	.addEventListener('click', poll.registerNewAnswer.bind(poll));

// poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
// prompt('What ia ur favorite programming language?');

// higher order function/////////////

// const greet = (greeting) => (name) => console.log(`${greeting} ${name}`);
// greet('Hello')('Humna');

// const oneWord = (str) => {
// 	return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = (str) => {
// 	const [first, ...others] = str.split(' ');
// 	return [first.toUpperCase(), ...others].join(' ');
// };
// higher order function
// const transformer = (str, fn) => {
// 	console.log(`Original sting:${str}`);
// 	console.log(`transformed string:${fn(str)}`);

// 	console.log(`Transformed by:${fn.name}`);
// };
// transformer('javascript is the best', upperFirstWord);
// transformer('javascript is the best', oneWord);

// console.log(upperFirstWord('humna is the best'));
// console.log(oneWord('humna is the best'));
// ////////////////////
// const bookings = [];
// const createBooking = (
// 	flightNum,
// 	numPassengers = 1,
// 	price = 199 * numPassengers
// ) => {
// 	const booking = {
// 		flightNum,
// 		numPassengers,
// 		price,
// 	};
// 	console.log(flightNum, numPassengers, price);
// 	bookings.push(booking);
// };
// createBooking('LH123', 2);

// const flight = 'LH234';
// const humna = {
// 	name: 'Syeda Alam',
// 	passport: 123456,
// };
// const checkIn = (flightNum, passenger) => {
// 	flightNum = 'LH999';
// 	passenger.name = 'Mrs.' + passenger.name;

// 	if (passenger.passport === 123456) {
// 		alert('Check in');
// 	} else {
// 		alert('Wrong Passport');
// 	}
// };
// checkIn(flight, humna);
// console.log(flight);
// console.log(humna);

// const newPassport = (person) => {
// 	person.passport = Math.trunc(Math.random() * 1000000);
// };
// newPassport(humna);
// checkIn(flight, humna);
