'use strict';

// ///////////// Arrays /////////////

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

	order: function (starterIndex, mainIndex) {
		return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
	},
	orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
		console.log(
			`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
		);
	},

	orderPasta: function (ing1, ing2, ing3) {
		console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
	},

	orderPizza: function (mainIngredient, ...otherIngredients) {
		console.log(mainIngredient, otherIngredients);
	},
};

// const rest1 = {
// 	name: 'Capri',
// 	numGuests: 0,
// 	// numGuests: 20,
// };
// const rest2 = {
// 	name: 'La Piazza',
// 	owner: 'Giovanni Rossi',
// };

// OR assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';

// rest1.owner &&= '<ANONYMOUS>';
// rest2.owner &&= '<ANONYMOUS>';

// console.log(rest1);
// console.log(rest2);

// nullish ///////////////

// restaurant.numGuests = 0;

// const guests = restaurant.numGuests || 10;
// console.log(guests);

// // nullish values are null and undefined
// const guestsCorrect = restaurant.numGuests ?? 10;
// console.log(guestsCorrect);

// console.log('------------or-------------||-------');
//  or and and || and &&
// use any data type, return any data type , short circuiting
// console.log(3 || 'humna');
// console.log('' || 'syeda');
// console.log(true || 0);
// console.log(0 || true);
// console.log(undefined || null);

// console.log(undefined || 0 || '' || 'hello' || 23 || null);
// console.log(undefined || 0 || '' || 23 || 'hello' || null);

// restaurant.numGuests = 23;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// console.log('------------AND-------------&&-------');
// console.log(0 && 'humna');
// console.log(7 && 'humna');

// console.log('hello' && 23 && null && 'humna');

// if (restaurant.orderPizza) {
// 	restaurant.orderPizza('mushrooms', 'spinach');
// }
// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'onions', 'garlic');

//  spread and rest operators///////
// restaurant.orderPizza('mushrooms', 'onions', 'olives', 'spinach');
// restaurant.orderPizza('mushrooms');

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// copy array
// const mainMenuCopy = [...restaurant.mainMenu];

// join 2 arrays or more
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// const str = 'humna';
// const letters = [...str, ' ', 's.'];
// console.log(letters);
// console.log(...str);

// real world example
// const ingredients = [
// 	prompt("Let's make pasta! Ingredient 1 is ?"),
// 	prompt("Let's make pasta! Ingredient 2 is ?"),
// 	prompt("Let's make pasta! Ingredient 3 is ?"),
// ];
// console.log(ingredients);

// restaurant.orderPasta(...ingredients);

// objects

// const newRestaurant = {
// 	foundingYear: 1998,
// 	...restaurant,
// 	founder: 'Guiseppe',
// };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Ristiranto Roma';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

// const [pizza, , risotto, ...otherFood] = [
// 	...restaurant.mainMenu,
// 	...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

// //////// rest operator //////////
// spread bcoz of the right side of assignment operator
// const arr = [1, 2, ...[3, 4]];

// rest opeartor left side
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// rest operatot for objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// functions
// const add = function (...numbers) {
// 	let sum = 0;
// 	for (let i = 0; i < numbers.length; i++) sum += numbers[i];
// 	// console.log(sum);
// };
// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);

// const x = [23, 5, 7];
// add(...x);

// object destructuring

// restaurant.orderDelivery({
// 	time: '22:30',
// 	address: 'Via del Sole 21',
// 	mainIndex: 2,
// 	starterIndex: 2,
// });

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
// 	name: restaurantName,
// 	openingHours: hours,
// 	categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// mutating variables
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

// Arrays destructuring////////////
// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// const temp=main
// main=secondary
// secondary=temp
// console.log(main, secondary)

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// const nested = [2, 3, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);

// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// default value
// const [p, q, r] = [8, 9];
// console.log(p, q, r);

//
// ////////// challenge #1 /////////////////

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
