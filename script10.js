'use strict';

const lufthansa = {
	airline: 'lufthansa',
	iataCode: 'LH',
	bookings: [],
	book(flightNum, name) {
		console.log(
			`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
		);
		this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
	},
};
lufthansa.book(239, 'Syeda Alam');
lufthansa.book(635, 'Mir Alam');
console.log(lufthansa);

const eurowings = {
	name: 'Eurowings',
	iataCode: 'EW',
	bookings: [],
};
const book = lufthansa.book;

book(23, 'Aamina Alam');

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
