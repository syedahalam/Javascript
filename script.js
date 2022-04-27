'use strict';

// ///////////// Arrays destructuring /////////////

const restaurant = {
	name: 'Classico Italiano',
	location: 'Via Angelo Tavanti 23, Firenze, Italy',
	categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
	starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
	mainMenu: ['Pizza', 'Pasta', 'Risotto'],

	openingHours: {
		thu: {
			open: 12,
			close: 22,
		},
		fri: {
			open: 11,
			close: 23,
		},
		sat: {
			open: 0,
			close: 24,
		},
	},

	order(starterIndex, mainIndex) {
		return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
	},
	orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
		console.log(
			`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
		);
	},

	orderPasta(ing1, ing2, ing3) {
		console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
	},

	orderPizza(mainIngredient, ...otherIngredients) {
		console.log(mainIngredient, otherIngredients);
	},
};

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

const game = {
	team1: 'Bayern Munich',
	team2: 'Borrussia Dortmud',
	players: [
		[
			'Neuer',
			'Pavard',
			'Martinez',
			'Alaba',
			'Davies',
			'Kimich',
			'Goretzka',
			'Coman',
			'Muller',
			'Gnarby',
			'Lewandowski',
		],
		[
			'Burki',
			'Schulz',
			'Hummels',
			'Akanji',
			'Hakimi',
			'Weigl',
			'Witsel',
			'Hazard',
			'Brandt',
			'Sancho',
			'Gotze',
		],
	],
	score: '4:0',
	scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
	date: 'Nov 9th, 2037',
	odds: {
		team1: 1.33,
		x: 3.25,
		team2: 6.5,
	},
};

// /////////// coding challenge # 2////////////
// 1
// for (const [index, player] of game.scored.entries()) {
// 	console.log(`Goal ${index + 1}: ${player}`);
// }

// 2
const val = Object.values(game.odds);
// console.log(val);
let sum = 0;
for (const odd of val) {
	sum += odd;
}
console.log(sum / val.length);

// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// for (const [index, day] of days.entries()) {
// 	console.log(`We are open for ${index + 1} and ${day} `);
// }

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
