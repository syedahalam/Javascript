'use strict';
const bookings = [];
const createBooking = (
	flightNum,
	numPassengers = 1,
	price = 199 * numPassengers
) => {
	const booking = {
		flightNum,
		numPassengers,
		price,
	};
	console.log(flightNum, numPassengers, price);
	bookings.push(booking);
};
// createBooking('LH123', 2);

const flight = 'LH234';
const humna = {
	name: 'Syeda Alam',
	passport: 123456,
};
const checkIn = (flightNum, passenger) => {
	flightNum = 'LH999';
	passenger.name = 'Mrs.' + passenger.name;

	if (passenger.passport === 123456) {
		alert('Check in');
	} else {
		alert('Wrong Passport');
	}
};
checkIn(flight, humna);
console.log(flight);
console.log(humna);

const newPassport = (person) => {
	person.passport = Math.trunc(Math.random() * 1000000);
};
newPassport(humna);
checkIn(flight, humna);
