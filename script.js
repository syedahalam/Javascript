'use strict';
// let js = 'amazing';
// console.log(js);
// if (js === 'amazing') alert('JS is fun');

// Challenge 1
// const markWeight = 78;
// const johnWeight = 92;

// const markHeight = 1.69;
// const johnHeight = 1.95;

// const mBmi = 78 / 1.69 ** 2;
// const jBmi = 92 / 1.95 ** 2;

// const isMarkHigherBMI = mBmi > jBmi;
// console.log(isMarkHigherBMI);

// ///////////////////////

// const markWeight = 95;
// const johnWeight = 92;

// const markHeight = 1.88;
// const johnHeight = 1.95;

// const mBmi = 95 / 1.88 ** 2;
// const jBmi = 92 / 1.95 ** 2;

// const markHigherBMI = mBmi > jBmi;
// console.log(markHigherBMI);
// ////////////////

// console.log('String with \n\
// multiple \n\
// lines');

// console.log('hi \n u \n ?');

// console.log(`string
// multiple
// lines`);
////////////////////////////////////
// if else /////
// coding challenge 2

// if (mBmi > jBmi) {
// 	console.log(`Mark's BMI ${mBmi} is greater than John's ${jBmi}`);
// } else {
// 	console.log(`John's BMI is greater than Mark's`);
// }
////////////////////////////

// type conversion
// console.log('23' + '10');
// console.log('23' - '10');

////////////////falsy values-> 0, undefined, null, nan, ''

////BOOLEAN //////////////////////
//challenge 3///////////////////////////
////TEST DATA
const dScore1 = 96;
const dScore2 = 108;
const dScore3 = 89;
const averageDolphinScore = (dScore1 + dScore2 + dScore3) / 3;

const kScore1 = 88;
const kScore2 = 91;
const kScore3 = 110;
const averageKoalasScore = (kScore1 + kScore2 + kScore3) / 3;

//////////////////

////TEST DATA BONUS 1
// const dScore1 = 97;
// const dScore2 = 112;
// const dScore3 = 101;
// const averageDolphinScore = (dScore1 + dScore2 + dScore3) / 3;

// const kScore1 = 109;
// const kScore2 = 95;
// const kScore3 = 123;
// const averageKoalasScore = (kScore1 + kScore2 + kScore3) / 3;

///////////////////////////////

////TEST DATA BONUS 2
// const dScore1 = 97;
// const dScore2 = 112;
// const dScore3 = 101;
// const averageDolphinScore = (dScore1 + dScore2 + dScore3) / 3;

// const kScore1 = 109;
// const kScore2 = 95;
// const kScore3 = 106;
// const averageKoalasScore = (kScore1 + kScore2 + kScore3) / 3;

// console.log(`The average score for Dolphon's Team is ${averageDolphinScore}`);
// console.log(`The average score for Koala's Team is ${averageKoalasScore}`);

// if (averageDolphinScore > averageKoalasScore) {
// 	console.log(`Dolhin's are the winners`);
// } else if (averageDolphinScore === averageKoalasScore) {
// 	console.log(`Match tied!`);
// } else if (averageKoalasScore > averageDolphinScore) {
// 	console.log(`Koala's are the winners!`);
// }

// if (averageDolphinScore > 100 && averageDolphinScore > averageKoalasScore) {
// 	console.log(
// 		`Dolphin's are the winner and met all requirements of the game! CONGRATULATIONS!`
// 	);
// } else if (
// 	averageKoalasScore > 100 &&
// 	averageKoalasScore > averageDolphinScore
// ) {
// 	console.log(
// 		`Koala's are the winners and have met all the game requirements, CONGRATULATIONS!`
// 	);
// } else if (
// 	averageDolphinScore === averageKoalasScore &&
// 	(averageDolphinScore && averageKoalasScore) > 100
// ) {
// 	console.log(
// 		'Both the teams are winners, Game tied! CONGRATULATIONS TO BOTH!'
// 	);
// } else {
// 	console.log(
// 		`Both teams are losers 😛 because their scores are less than 100`
// 	);
// }
/////////////////////////////////////////////////////
///////////////////////CODING CHALLENGE 4////////////////////////////
// const bill = 400;
// const bill = 275;
// const bill = 430;
// const tip1 = 0.15;
// const tip2 = 0.2;
// // if (bill > 50 && bill < 300) {
// // 	console.log(`${tip1 * bill}`);
// // } else {
// // 	console.log(`tip = ${tip2 * bill}`);
// // }

// bill > 50 && bill < 300
// 	? console.log(
// 			`The bill was ${bill}, the tip was ${
// 				tip1 * bill
// 			} and the total bill (bill+tip) is ${bill + tip1 * bill}`
// 	  )
// 	: console.log(
// 			`The bill was ${bill}, the tip was ${
// 				tip2 * bill
// 			} and the total bill (bill+tip) is ${bill + tip2 * bill}`
// 	  );
/////////////////////////////////////////////////////////////////
//checking strict mode

// const interface = 'Audio';
// const private = 534;
// const if = 'hi';

/////////////////////////////Functions////////////////////////////
// function calAge(birthYear) {
// 	const age = 2022 - birthYear;
// 	return age;
// }
// const yourAge = calAge(1980);
// console.log(yourAge);

////////////Function Expression
// const calAge2 = function (birthYear) {
// 	return 2022 - birthYear;
// };
// const age2 = calAge2(1980);
// console.log(age2);

// /////////////////////////////////// Arrow Function////////////

// const calcAge3 = (birthYear) => 2022 - birthYear;
// console.log(calcAge3(1980));

// const yearsUntilRetirement = (birthYear) => {
// 	const age = 2022 - birthYear;
// 	const ret = 65 - age;
// 	return ret;
// };
// console.log(yearsUntilRetirement(1980));

///////////////////////////Higher order functions/////////////

// const cutFruitPieces = (fruit) => {
// 	return fruit * 4;
// };

// const foodProcessor = (apples, oranges) => {
// 	const applePieces = cutFruitPieces(apples);
// 	const orangePieces = cutFruitPieces(oranges);

// 	const juice = `Juice with ${apples} apples and ${applePieces} apples pieces and ${oranges} oranges and ${orangePieces} orange pieces`;
// 	return juice;
// };

// console.log(foodProcessor(2, 3));

////////////////////////////////////////////////////////////

// const calcAge = (birthYear) => {
// 	return 2022 - birthYear;
// };

// const yearsUntilRetirement = (birthYear) => {
// 	const ret = 65 - calcAge(1980);
// 	return ret;
// };
// console.log(yearsUntilRetirement(1980));

////////////////////Coding Challenge 1 /////////////////////////
// const calcAverage = (s1, s2, s3) => {
// 	return (s1 + s2 + s3) / 3;
// };
// // const avgDolphin = calcAverage(44, 23, 71);
// // const avgKoalas = calcAverage(65, 54, 49);

// //data 2

// const avgDolphin = calcAverage(85, 54, 41);
// const avgKoalas = calcAverage(23, 34, 27);

// //Check winner

// const checkWinner = (avgDolphin, avgKoalas) => {
// 	if (avgDolphin > avgKoalas * 2) {
// 		console.log(`Dolphins win (${avgDolphin} vs ${avgKoalas}.)`);
// 	} else if (avgKoalas > avgDolphin * 2) {
// 		console.log(`Koalas win (${avgKoalas} vs ${avgDolphin}.)`);
// 	} else {
// 		console.log('No team wins!');
// 	}
// };
// checkWinner(avgDolphin, avgKoalas);
//////////////////////////////
///////////////////Arrays/////////////////////////////

// const calcAge = (birthyear) => 2022 - birthyear;

// const birthYears = [1980, 1967, 2002, 2010, 2018];
// console.log(calcAge(birthYears[0]));

// const friends = ['Maria', 'Azwer', 'Madho', 'Kukkoo'];

////////////////Coding Challenge # 2 -- Arrays ////////////////

// tipCalc(100);

// const bills = [125, 555, 44];
// const tips = [tipCalc(bills[0]), tipCalc(bills[1]), tipCalc(bills[2])];

// console.log(bills, tips);

// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(bills, tips, total);
///////////////////////////////////

/////////////////////////OBJECTS/////////////////////////
// const mana = {
// 	firstName: 'Syeda',
// 	lastName: 'Alam',
// 	job: 'Developer',
// };
// console.log(humna.firstName);
// console.log(humna['lastName']);
// const knowMe = prompt('What do u wanna know? First Name, Last Name or job?');
// console.log(humna[knowMe]);

// humna.location = 'New Jersey';
// console.log(humna);
// humna['kids'] = 3;
// console.log(humna);

////////////Challenge Objects

// const humna = {
// 	name: 'Syeda',
// 	total: 4,
// 	friends: ['Maria', 'Azwer', 'Madho', 'Kukkoo'],
// };
// console.log(
// 	`${humna.name} has ${humna.friends.length} friends, and her best friend ia called ${humna.friends[2]}.`
// );
//////////////////////////////////////////////////////////
const person = {
	firstName: 'Syeda',
	lastName: 'Alam',
	job: 'Developer',
	hasDriverLicense: true,
	birthYear: 1980,

	// calcAge: function (birthYear) {
	// 	return 2022 - birthYear;
	// },

	// calcAge: function () {
	// 	return 2022 - this.birthYear;
	// },

	calcAge: function () {
		this.age = 2022 - this.birthYear;
		return this.age;
	},

	getSummary: function () {
		return `${
			this.firstName
		} is a ${this.calcAge()}-years old teacher, and she ${
			this.hasDriverLicense ? 'has' : 'hasnot'
		} driver's license.`;
	},
};
// console.log(person.calcAge());
// console.log(person.age);

// console.log(person.getSummary());

////////////////////completed/////////////

///////////////Challenge 3///////////////////

// const mark = {
// 	fullName: 'Mark Miller',
// 	mass: 78,
// 	height: 1.69,

// 	calcBMI: function () {
// 		return this.mass / this.height ** 2;
// 	},
// };
// console.log(mark.calcBMI());

// const john = {
// 	fullName: 'John Smith',
// 	mass: 92,
// 	height: 1.95,

// 	calcBMI: function () {
// 		this.bmi = this.mass / this.height ** 2;
// 		return this.bmi;
// 	},
// };
// console.log(john.calcBMI());

// // console.log(`${mark.calcBMI()`}>`${john.calcBMI()}`?${mark.fullName}'s BMI (${mark.calcBMI()}) is higher than ${mark.fullName}'s (${mark.calcBMI()})`:`${john.fullName}'s BMI (${john.calcBMI()}) is higher than ${john.fullName}'s (${john.calcBMI()})`;

// if (`${mark.calcBMI()}` > `${john.calcBMI()}`) {
// 	console.log(
// 		`${mark.fullName}'s BMI (${mark.calcBMI()}) is higher than ${
// 			john.fullName
// 		}'s (${john.calcBMI()})`
// 	);
// } else {
// 	console.log(
// 		`${john.fullName}'s BMI (${john.calcBMI()}) is higher than ${
// 			mark.fullName
// 		}'s (${mark.calcBMI()})`
// 	);
// }

///////////////////completed////////////////

////////////////////////////////////////////FOR LOOP///////////////////////////////
// for (let i = 1; i <= 10; i++) {
// 	console.log(`good ${i}`);
// }

// const humnasArray = [
// 	'Humna',
// 	'Alam',
// 	2022 - 1980,
// 	'developer',
// 	['Maria', 'Azwer', 'Madho', 'Kukkoo'],
// 	true,
// 	'hi',
// ];

// const types = [];
// for (let i = 0; i < humnasArray.length; i++) {
// 	// console.log(humnasArray[i]);
// 	types[i] = humnasArray[i];

// 	//both up n down code is same, both gives us array

// 	types.push(humnasArray[i]);
// }
// console.log(types);

// const years = [1991, 2012, 1980, 1997];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
// 	ages.push(2022 - years[i]);
// }
// console.log(ages);

//////////CONTINUE & BREAK//////////////////
//only print string values
// for (let i = 0; i < humnasArray.length; i++) {
// 	// if (typeof humnasArray[i] !== 'string') continue;
// 	// if (typeof humnasArray[i] !== 'string') break;
// 	// if (typeof humnasArray[i] === 'number') break;
// 	if (typeof humnasArray[i] === 'boolean') break;
// 	console.log(humnasArray[i]);
// }

/////////////////////////////////////
// const humna = [
// 	'Humna',
// 	'Alam',
// 	2022 - 1980,
// 	'developer',
// 	['Maria', 'Azwer', 'Madho', 'Kukkoo'],
// 	true,
// 	'hi',
// ];
// const arr = [];

// for (let i = humna.length - 1; i >= 0; i--) {
// 	console.log(i, [i]);
// }
//////////////////////
// for (let exercise = 1; exercise <= 3; exercise++) {
// 	console.log(`----------Starting Exercise ${exercise}--------`);
// 	for (let rep = 1; rep < 6; rep++) {
// 		console.log(`******lifting weights repetition ${rep}*****`);
// 	}
// }
/////////////////////done for loops////////////

//////////////////////WHILE LOOP////////////////////

// for (let rep = 1; rep <= 10; rep++) {
// 	console.log(`****** lifting weights repetition ${rep} *****`);
// }

// let rep = 1;
// while (rep <= 5) {
// 	console.log(
// 		`-------- WHILE LOOP --lifting weights repetition ${rep} --------`
// 	);
// 	rep++;
// }
//////////////////////

// let dice = Math.trunc(Math.random() * 6) + 1;
// // console.log(dice);

// while (dice !== 6) {
// 	console.log(`you roll a dice ${dice}`);
// 	dice = Math.trunc(Math.random() * 6) + 1;
// 	if (dice === 6) {
// 		console.log(`loop is ending coz u got 6`);
// 	}
// }
//////////////////////////////////done while loop/////////////////

///////////////challenge # 4/////////////////////////

// const bills = [22, 295, 176, 440, 37, 105, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// for (let i = 0; i < bills.length; i++) {
// 	if (bills[i] >= 5 && bills[i] <= 300) {
// 		tips.push(0.15 * bills[i]);
// 		totals.push(tips[i] + bills[i]);
// 	} else if (bills[i] > 300) {
// 		tips.push(0.2 * bills[i]);
// 		totals.push(tips[i] + bills[i]);
// 	}

// 	// tips[i] = bills[i];
// 	console.log(bills, tips, totals);
// }

// console.log(calcTip(bills[i]));
// const arr = []
// let sum = 0;
// let average = 0;
// const calcAverage = (arr) => {
// 	for (let i = 0; i < arr.length; i++) {
// 		sum += arr[i];
// 		average = sum / arr.length;
// 	}
// 	console.log(`The sum of array is ${sum}`);
// 	console.log(`The average is ${average}`);
// };

// let sum = 0;
// let average = 0;
// const calcAverage = (arr) => {
// 	for (let i = 0; i < arr.length; i++) {
// 		sum += arr[i];
// 	}
// 	// console.log(`The sum of array is ${sum}`);
// 	return (average = sum / arr.length);
// 	// console.log(`The average is ${average}`);
// };

// // calcAverage([2, 3, 7]);
// // calcAverage(totals);

// console.log(calcAverage([2, 3, 6]));
// console.log(calcAverage(tips));
// console.log(calcAverage(totals));
// feb 28, 2022- section - coding challenge # 1

// const markMass = 78;
// const markHeight = 1.69;

// const johnMass = 92;
// const johnHeight = 1.95;

const markMass = 95;
const markHeight = 1.88;

const johnMass = 85;
const johnHeight = 1.76;

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;
console.log(markBMI, johnBMI);
const markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);
