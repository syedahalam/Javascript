'use strict';

// ///////////// Arrays destructuring /////////////

// const restaurant = {
// 	name: 'Classico Italiano',
// 	location: 'Via Angelo Tavanti 23, Firenze, Italy',
// 	categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
// 	starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
// 	mainMenu: ['Pizza', 'Pasta', 'Risotto'],

// 	openingHours: {
// 		thu: {
// 			open: 12,
// 			close: 22,
// 		},
// 		fri: {
// 			open: 11,
// 			close: 23,
// 		},
// 		sat: {
// 			open: 0,
// 			close: 24,
// 		},
// 	},

// 	order(starterIndex, mainIndex) {
// 		return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
// 	},
// 	orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
// 		console.log(
// 			`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
// 		);
// 	},

// 	orderPasta(ing1, ing2, ing3) {
// 		console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
// 	},

// 	orderPizza(mainIngredient, ...otherIngredients) {
// 		console.log(mainIngredient, otherIngredients);
// 	},
// };
// Strings

// coding challenge 4 ///////////

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
const text = document.querySelector('textarea').value;

document.querySelector('button').addEventListener('click', function () {
	const text = document.querySelector('textarea').value;
	console.log(text);

	const rows = text.split('\n');
	console.log(rows);

	for (const [i, row] of rows.entries()) {
		const [first, second] = row.toLowerCase().trim().split('_');
		const output = `${first}${second.replace(
			second[0],
			second[0].toUpperCase()
		)}`;
		console.log(`${output.padEnd(20)}${'✅ '.repeat(i + 1)}`);
	}

	// console.log(rows[0].toUpperCase() + rows.slice(1));
});
// underscore_case;
//  first_name;
// Some_variable;
//  calculate_Age;
// delayed_departure;

// /////
const flights =
	'_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

for (const flight of flights.split('+')) {
	const [type, from, to, time] = flight.split(';');
	const output1 = `${type.startsWith('_Delayed') ? '🛑' : ''} ${type.replaceAll(
		'_',
		' '
	)} ${from.slice(0, 3).toUpperCase()} to ${to
		.slice(0, 3)
		.toUpperCase()} (${time.replace(':', 'h')})`.padStart(39);
	console.log(output1);
}

// split() and join()/////////////////////////

// console.log('a+very+nice+string'.split('+'));
// console.log('Syeda Humna Alam'.split(' '));

const [firstName, lastName] = 'Syeda Humna Alam'.split(' ');

const newName = ['Mrs. ' + firstName, lastName.toUpperCase()].join(' ');
// console.log(newName);

const passenger1 = 'jessica ann smith davis';

const capitalizeName = (name) => {
	const names = name.split(' ');
	const namesUpper = [];

	for (const n of names) {
		namesUpper.push(n[0].toUpperCase() + n.slice(1));
	}
	console.log(namesUpper.join(' '));
};
// capitalizeName('jessica ann smith davis');
// capitalizeName('syeda humna alam');

// ////////////////////////////////////////////////

// padding

const message = 'Go to Gate 23';
// console.log(message.padStart(25, '+').padEnd(35, '+'));

// console.log('humna'.padStart(25, '+'));

// //////// credit card app ///////////////////

const maskedCreditCard = (number) => {
	const str = number + '';
	const last = str.slice(-4);
	return last.padStart(str.length, '*');
};

// console.log(maskedCreditCard(657656767868));
// console.log(maskedCreditCard('676876876876'));

// ////////// repeat()

const messageRepeat = 'Bad weathers.... All Departures Delayed... ';
// console.log(messageRepeat.repeat(5));

// //////
const planeInLine = (n) => {
	console.log(`There are ${n} planes in line ${'🛩'.repeat(n)}`);
};
// planeInLine(15);
// planeInLine(3);
// planeInLine(12);

// /////////////////////// toUpperCase(), toLowerCase/////

const airline = 'TAP Air Portugal';
const plane = 'A320';

// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

// Fix capitalization in name
const passenger = 'hUmNA'; //Humna
// const passengerToLower = passenger.toLowerCase();
// console.log(passengerToLower);
// const passengerCorrectName =
// 	passengerToLower[0].toUpperCase() + passengerToLower.slice(1);
// console.log(passengerCorrectName);

const fixedName = (name) => {
	const fname = name[0].toUpperCase() + name.slice(1);

	console.log(fname);
};
// fixedName('humna');
// fixedName('hUMNA');

// comparing emails

const email = 'hello@humna.io';
const loginEmail = '  Hello@Humna.Io \n';

const toLower = loginEmail.toLowerCase();
// trim() method is to get rid of spaces and tabs
const trimmedEmail = toLower.trim();
// console.log(trimmedEmail);
// console.log(loginEmail.toLowerCase().trim());

// replacing
// const priceUS = '$288.97';
// const priceGB = priceUS.replace('$', '&').replace('.', ',');
// console.log(priceGB);

// const announcement =
// 	'Please all passengers come to boarding door 8, please report to door 8';
// console.log(announcement.replaceAll('door', 'gate'));
// console.log(announcement.replace(/door/g, 'gate'));

// boolean

// const plane1 = 'Airbus 320neo';
// console.log(plane1.includes('A320'));
// console.log(plane1.startsWith('Air'));
// console.log(plane1.startsWith('Airb'));

// if (plane1.startsWith('Airbus') && plane1.endsWith('neo')) {
// 	console.log('family');
// }
// practice

// const checkedBaggage = (items) => {
// 	const baggage=items.toLowerCase()
// 	if(baggage.includes('knife'||baggage.includes('gun'))){
// 		console.log('You r not allowed')
// 	}else{
// 		console.log('Welcome Aboard');
// 	}
// };
// checkedBaggage('I have a laptop, some Food and a pocket Knife');
// checkedBaggage('Socks, camera');
// checkedBaggage('Got some snacks and a gun for protection');

// console.log(plane[0]);
// console.log('B730'[0]);
// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));
// console.log(airline.indexOf('Portugal'));

// slice is for extraction
// console.log(airline.slice(4));
// start and end position index
// console.log(airline.slice(4, 7));

// getting  firest word till first space from airline
// console.log(airline.slice(0, airline.indexOf(' ')));
// getting last word after last space
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// console.log(airline.slice(-2));
// console.log(airline.slice(1, -1));

// const checkMiddleSeat = (seat) => {
// B and E are middle seats
// 	const s = seat.slice(-1);
// 	if (s === 'B' || s === 'E') console.log('U got the middle seat');
// 	else console.log('u got lucky');
// };
// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

// map iteration
// const question = new Map([
// 	['question', 'What is the best programming language in the world?'],
// 	[1, 'C'],
// 	[2, 'Java'],
// 	[3, 'Javascript'],
// 	['correct', 3],
// 	[true, 'Correct!'],
// 	[false, 'Try Again!'],
// ]);

// convert map to array
// console.log(question);

// convert Object to map
// console.log(Object.entries(restaurant.openingHours));
// const hoursMap = new Map(Object.entries(restaurant.openingHours));
// console.log(hoursMap);

// quiz app
// console.log(question.get('question'));
// for (const [key, value] of question) {
// 	if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }
// const answer = Number(prompt('Your answer'));
// const answer = 3;
// console.log(answer);

// console.log(question.get(question.get('correct') === answer));
// console.log(...question);
// console.log(question.entries());
// console.log(question.keys());
// console.log(question.values());

// sibling app
// const whoIsOlder = new Map([
// 	[1, 'Aamina'],
// 	[2, 'Yahyaa'],
// 	[3, 'Omer'],
// 	['correct', 1],
// 	[true, 'Correct'],
// 	[false, 'Try Again!'],
// ]);
// console.log(whoIsOlder);
// const questionOlder = 'Who is older in siblings?';
// console.log(questionOlder);
// const answerOlder = Number(
// 	prompt('"1" for Aamina, "2" for Yahyaa, "3" for Omer')
// );
// console.log(answerOlder);
// console.log(whoIsOlder.get(whoIsOlder.get('correct') === answerOlder));
// map
// const rest = new Map();
// rest.set('name', 'Classicano Italiano');
// console.log(rest);
// rest.set(1, 'Firenze, Italy');
// rest.set(2, 'Lisbon, Portugal');
// console.log(rest);

// rest
// 	.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
// 	.set('open', 11)
// 	.set('close', 23)
// 	.set(true, 'We are open :D')
// 	.set(false, 'We are close :(');

// console.log(rest.get('name'));
// console.log(rest.get(true));
// console.log(rest.get(1));

// const time = 21;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// console.log(rest.has('categories'));
// rest.delete(2);
// console.log(rest);
// console.log(rest.size);
// rest.clear();
// const arr = [1, 2];
// rest.set(arr, 'Test');
// rest.set(document.querySelector('h1'), 'heading');
// console.log(rest);
// console.log(rest.get(arr));
// sets
// const orderSet = new Set([
// 	'Pasta',
// 	'Pizza',
// 	'Rissoto',
// 	'Pasta',
// 	'Pizza',
// 	'Pasta',
// ]);
// console.log(orderSet);
// console.log(new Set('humnaam').size);

// console.log(orderSet.size);
// console.log(orderSet.has('Pizza'));
// console.log(orderSet.has('pizza'));
// orderSet.add('Garlic Bread');
// console.log(orderSet);
// orderSet.delete('Pizza');
// console.log(orderSet);

// for (const order of orderSet) console.log(order);

// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);
// console.log(
// 	new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
// );

// Object properties
// const properties = Object.keys(restaurant.openingHours);
// console.log(properties);
// let openStr = `We are open ${properties.length} days: `;

// for (const day of properties) {
// 	openStr += `${day}, `;
// }
// console.log(openStr);

// const values = Object.values(restaurant.openingHours);
// console.log(values);

// const entries = Object.entries(restaurant.openingHours);
// console.log(entries);

// for (const [key, { open, close }] of entries)
// 	console.log(`On ${key} we open at ${open} and close at ${close}`);

// methods to be checked if exist or not?
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exists');

// arrays
// const users = [
// 	{
// 		name: 'humna',
// 		email: 'huhuh@khk.com',
// 	},
// ];
// console.log(users[0]?.name ?? 'not present');
// if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

// with optional chaining
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);

// example:
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// for (const open of days) {
// 	console.log(open);
// 	const opens = restaurant.openingHours[open]?.open ?? 'closed';
// 	console.log(`On ${open}, we open at ${opens}`);
// }

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// for (const item of menu) console.log(item);
// for (const item of menu.entries()) console.log(`${item[0] + 1}:${item[1]}`);

// for (const [i, el] of menu.entries()) console.log(`${i + 1}:${el}`);

// const rest1 = {
// 	name: 'Capri',
// 	numGuests: 0,
// };
// const rest2 = {
// 	name: 'La Piazza',
// 	owner: 'Giovanni Rossi',
// };
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// OR assignment operator
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// console.log(rest1);
// console.log(rest2);

// rest2.owner &&= '<ANONYMOUS>';
// console.log(rest2);

// rest pattern
// const arr = [1, 2, ...[3, 4]];
// console.log(arr);

// rest on left side
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, , rosseto, ...otherfood] = [
// 	...restaurant.mainMenu,
// 	...restaurant.starterMenu,
// ];
// console.log(pizza, rosseto, otherfood);

// objects rest
// const { sat, ...weekDays } = restaurant.openingHours;
// console.log(weekDays);

// functions
// const add = function (...numbers) {
// 	let sum = 0;
// 	for (let i = 0; i < numbers.length; i++) sum += numbers[i];
// 	console.log(sum);
// };
// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);

// const x = [23, 5, 7];
// add(...x);

// restaurant.orderPizza('mushrooms', 'onions', 'olives', 'spinach');

// spread operator
// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const newArr = [1, 2, ...arr];
// console.log(newArr);

// when we want elements without an array
// console.log(...newArr);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);
// console.log(...newMenu);

// copy array
// const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy);

// join 2 arrays
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// iterable are arrays, strings, maps and sets but not objects
// const str = 'humna';
// const letters = [...str, '', 'a.'];
// console.log(...letters);
// console.log(...str);

// const ingredients = [
// 	prompt("let's make pasta! Ingredient 1?"),
// 	prompt('Ingredient 2?'),
// 	prompt('Ingredient 3?'),
// ];
// console.log(ingredients);

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);

// restaurant.orderPasta(...ingredients);

// objects
// const newRestaurant = { ...restaurant, founder: 'humna', foundingYear: 1998 };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'hotel';
// console.log(restaurantCopy.name);

// objects destructuring
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
// 	name: restaurantName,
// 	openingHours: hours,
// 	categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// restaurant.orderDelivery({
// 	address: 'Via del',
// 	starterIndex: 1,
// });

// default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// mutating variables of objects
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);

// nested objects
// const {
// 	fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

// array destructuring
// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

//
// let temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// returning value from function
// const [starter, mainMenu] = restaurant.order(2, 0);
// console.log(starter, mainMenu);

// const nested = [2, 4, [5, 6]];
// const [q, s, [t, r]] = nested;
// console.log(q, s, t, r);

// default vales
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

// ////////// coding challenges /////////////////

// const game = {
// 	team1: 'Bayern Munich',
// 	team2: 'Borrussia Dortmud',
// 	players: [
// 		[
// 			'Neuer',
// 			'Pavard',
// 			'Martinez',
// 			'Alaba',
// 			'Davies',
// 			'Kimich',
// 			'Goretzka',
// 			'Coman',
// 			'Muller',
// 			'Gnarby',
// 			'Lewandowski',
// 		],
// 		[
// 			'Burki',
// 			'Schulz',
// 			'Hummels',
// 			'Akanji',
// 			'Hakimi',
// 			'Weigl',
// 			'Witsel',
// 			'Hazard',
// 			'Brandt',
// 			'Sancho',
// 			'Gotze',
// 		],
// 	],
// 	score: '4:0',
// 	scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
// 	date: 'Nov 9th, 2037',
// 	odds: {
// 		team1: 1.33,
// 		x: 3.25,
// 		team2: 6.5,
// 	},
// };

// mapping
// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze, Italy');
// rest.set(2, 'Lisbon, Portugal');
// console.log(rest);

// /////////// coding challenge # 2////////////
///////////////// 1
// for (const [index, player] of game.scored.entries()) {
// 	console.log(`Goal ${index + 1}: ${player}`);
// }

//////////////// 2
// const val = Object.values(game.odds);
// // console.log(val);
// let sum = 0;
// for (const odd of val) {
// 	sum += odd;
// }
// console.log(sum / val.length);

// ///////////// 3

// console.log(odd);
// console.log(game.odds);
// console.log(`Odd of victory ${game.team1}: `);

// /////////// coding challenge # 1////////////
// (1)
// const [players1, players2] = game.players;
// console.log(players1, players2);

// (2)
// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

// (3)
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// 4
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);

// (5)
// const {
// 	odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);

// (6)
// const printGoals = function (...playerNames) {
// console.log(...playerNames);
// 	console.log(
// 		`${playerNames.length} players are playing , named ${playerNames} `
// 	);
// };
// printGoals('Davis', 'Muller', 'lewandoski', 'Kimich');
// printGoals('Davis', 'Muller');
// printGoals(game.scored);

// (7)
// team1 < team2 && console.log(`team 1 won`);
// team1 > team2 && console.log(`team 2 won`);

// codinng challenge 3
// const gameEvents = new Map([
// 	[17, 'GOAL'],
// 	[36, 'Substitution'],
// 	[47, 'GOAL'],
// 	[61, 'SUubstitution'],
// 	[64, 'Yellow card'],
// 	[69, 'Red card'],
// 	[70, 'Substitution'],
// 	[72, 'Substitution'],
// 	[76, 'GOAL'],
// 	[88, 'GOAL'],
// 	[92, 'Yellow card'],
// ]);
// const staffUnique = [...new Set(staff)];
// const events = [...new Set(gameEvents)];
// console.log(events);

// ////// coding challenge
