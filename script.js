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
// const dScore1 = 96;
// const dScore2 = 108;
// const dScore3 = 89;
// const averageDolphinScore = (dScore1 + dScore2 + dScore3) / 3;

// const kScore1 = 88;
// const kScore2 = 91;
// const kScore3 = 110;
// const averageKoalasScore = (kScore1 + kScore2 + kScore3) / 3;

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
// const person = {
// 	firstName: 'Syeda',
// 	lastName: 'Alam',
// 	job: 'Developer',
// 	hasDriverLicense: true,
// 	birthYear: 1980,

// 	// calcAge: function (birthYear) {
// 	// 	return 2022 - birthYear;
// 	// },

// 	// calcAge: function () {
// 	// 	return 2022 - this.birthYear;
// 	// },

// 	calcAge: function () {
// 		this.age = 2022 - this.birthYear;
// 		return this.age;
// 	},

// 	getSummary: function () {
// 		return `${
// 			this.firstName
// 		} is a ${this.calcAge()}-years old teacher, and she ${
// 			this.hasDriverLicense ? 'has' : 'hasnot'
// 		} driver's license.`;
// 	},
// };
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

// const markMass = 95;
// const markHeight = 1.88;

// const johnMass = 85;
// const johnHeight = 1.76;

// const markBMI = markMass / markHeight ** 2;
// const johnBMI = johnMass / johnHeight ** 2;
// console.log(markBMI, johnBMI);
// const markHigherBMI = markBMI > johnBMI;
// console.log(markHigherBMI);

// //////////////////////section 1 - coding challenge # 2

// if (markBMI > johnBMI) {
// 	console.log(`Mark's BMI ${markBMI} is higher than John's ${johnBMI}!`);
// } else {
// 	console.log(`John's ${johnBMI} BMI is higher than Mark's ${markBMI}!`);
// }
////////////////////////////////////////////////////
// const inputYear = 2022;
// console.log(Number(inputYear));
// const second = 18;
// console.log(`${Number(inputYear) + second}`);
// console.log('I am ' + 23 + ' years old');
// console.log('23' - 10);
// let n = '1' + 1;
// console.log(n);
// n = n - 1;
// console.log(n);

/////////// coding challenge # 3 ////////////////

// const dolphinsScore1 = 96;
// const dolphinsScore2 = 108;
// const dolphinsScore3 = 89;

// const koalasScore1 = 88;
// const koalasScore2 = 91;
// const koalasScore3 = 110;

//////bonus 1 test data////////
// const dolphinsScore1 = 97;
// const dolphinsScore2 = 112;
// const dolphinsScore3 = 101;

// const koalasScore1 = 109;
// const koalasScore2 = 95;
// const koalasScore3 = 123;

//////bonus 2 test data////////
// const dolphinsScore1 = 97;
// const dolphinsScore2 = 112;
// const dolphinsScore3 = 101;

// const koalasScore1 = 109;
// const koalasScore2 = 95;
// const koalasScore3 = 106;

// const avgDolphins = (dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3;
// const avgKoalas = (koalasScore1 + koalasScore2 + koalasScore3) / 3;

// console.log(avgDolphins, avgKoalas);

// if (avgDolphins > avgKoalas && avgDolphins >= 100) {
// 	console.log(
// 		`Dolphins with average ${avgDolphins} points won against Koalas with average score of ${avgKoalas} `
// 	);
// } else if (avgKoalas > avgDolphins && avgKoalas >= 100) {
// 	console.log(
// 		`Koalas with average ${avgKoalas} points won against Dolphins with average score of ${avgDolphins} `
// 	);
// } else if (
// 	avgDolphins === avgKoalas &&
// 	avgDolphins >= 100 &&
// 	avgKoalas >= 100
// ) {
// 	console.log(`Match tied with both teams have same scores!`);
// } else {
// 	console.log(`There is no winner as scores are less than 100`);
// }

/////////////////////////

// const age = 23;
// const drink = age >= 18 ? 'coke 🥤' : 'water💧';
// console.log(`I like to drink ${drink}`);

////////// coding challenge 4///////////

// const bill1 = 275;
// const bill2 = 40;
// const bill3 = 430;
// const tip1 = bill1 >= 50 && bill1 <= 300 ? 0.15 * bill1 : 0.2 * bill1;
// const tip2 = bill2 >= 50 && bill2 <= 300 ? 0.15 * bill2 : 0.2 * bill2;
// const tip3 = bill3 >= 50 && bill3 <= 300 ? 0.15 * bill3 : 0.2 * bill3;
// console.log(tip1);
// console.log(
// 	`The bill is ${bill1} the tip is ${tip1} and the total is ${bill1 + tip1}`
// );

// console.log(tip2);
// console.log(
// 	`The bill is ${bill2} the tip is ${tip2} and the total is ${bill2 + tip2}`
// );

// console.log(tip3);
// console.log(
// 	`The bill is ${bill3} the tip is ${tip3} and the total is ${bill3 + tip3}`
// );

/////////////////////////////////////
// function fruitProcessor(apples, oranges) {
// 	console.log(apples, oranges);
// 	const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
// 	return juice;
// }
// // console.log(fruitProcessor(2, 3));
// const mmm = fruitProcessor(3, 4);
// console.log(mmm);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// const age = calcAge(1980);
// console.log(`function declaration`, age);

// function calcAge(birthYear) {
// 	return 2022 - birthYear;
// }

// /////////////////////////////// Function Expression
// const calcAge1 = function (birthYear) {
// 	return 2022 - birthYear;
// };
// console.log(`function expression`, calcAge1(1980));

// ////////////////////////////// Arrow Functon
// const calcAge2 = (birthYear) => 2022 - birthYear;
// console.log(`Arrow function`, calcAge2(1980));

// const yearsUntilRetirement = (birthYear, firstName) => {
// 	const age3 = 2022 - birthYear;
// 	return `${firstName} retires in ${65 - age3} years`;
// };
// const retirementAge = yearsUntilRetirement(1980, 'Syeda');
// console.log(retirementAge);

// ///////// call function functions

// function cutFruitPieces(fruit) {
// 	return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
// 	const applePieces = cutFruitPieces(apples);
// 	const orangePieces = cutFruitPieces(oranges);

// 	const juice = `Juice with ${applePieces} apple pieces from ${apples} apples and ${orangePieces} orange pieces from ${oranges} oranges.`;
// 	return juice;
// }
// // console.log(fruitProcessor(2, 3));
// const juice = fruitProcessor(2, 3);
// console.log(juice);

// const calAge = (birthYear) => 2037 - birthYear;

// const yearsUntilRetirement = (birthYear, firstName) => {
// 	const age = calAge(2005);
// 	const retirement = 65 - age;
// 	if (retirement < 0) return `You are already retired`;
// 	else return retirement;

// 	// return `${firstName} retires in ${65 - age} years`;
// };
// const retirementAge = yearsUntilRetirement(2005, 'Mike');
// console.log(retirementAge);

// ////////// coding challenge # 1 - section 3

// const calcAverage = (s1, s2, s3) => (s1 + s2 + s3) / 3;

// const dolphins = calcAverage(44, 23, 71);
// const koalas = calcAverage(65, 54, 49);

// let dolphins = calcAverage(44, 23, 71);
// let koalas = calcAverage(65, 54, 49);
// console.log(dolphins, koalas);

// let dolphins = calcAverage(85, 54, 41);
// let koalas = calcAverage(23, 34, 27);

// const checkWinner = (avgDolphins, avgKoalas) => {
// 	if (avgDolphins > avgKoalas * 2)
// 		console.log(`dolphins win (${avgDolphins} vs. ${avgKoalas})`);
// 	else if (avgKoalas > avgKoalas * 2)
// 		console.log(`koalas wins (${avgKoalas} vs ${avgDolphins})`);
// 	else {
// 		console.log(`no one won`);
// 	}
// };
// checkWinner(dolphins, koalas);
// checkWinner(222, 55);
/////////////////////

////////// Arrays //////////////////

// const friends = ['Maya', 'Azwer', 'Madho', 'Kukkoo'];
// console.log(friends);
// console.log(friends[0]);
// console.log(friends[friends.length - 1]);
// friends[1] = 'Atra';
// console.log(friends);
// const foes = new Array(1, 2, 3, 4);
// console.log(foes);

// const firstName = 'Humna';
// const humna = [firstName, 'Alam', 2022 - 1980, 'developer', friends];
// // console.log(humna);

// // exercise

// const calAge = (birthYear) => 2037 - birthYear;

// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calAge(years[0]);
// const age2 = calAge(years[1]);
// const age3 = calAge(years[2]);
// const age4 = calAge(years[3]);
// const age5 = calAge(years[years.length - 1]);

// // console.log(age1, age2, age3);

// const ages = [calAge(years[0]), calAge(years[1]), calAge(years[2])];
// console.log(ages);

//////// Array operations -- array methods ////////////

// const friends = ['Maya', 'Azwer', 'Madho', 'Kukkoo'];
// friends.push('Kiran');
// console.log(friends);

// friends.unshift('Mamma');
// console.log(friends);

// friends.pop();
// console.log(friends);

// friends.shift();
// console.log(friends);
// console.log(friends.includes('john'));
// console.log(friends.includes('Maya'));
// console.log(friends.includes('maya'));

////////// challenge # 2 arrays ///////////

// const tip = (bill) => (bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill);
// console.log(tip(125));

// const calcTip = (bill) => {
// 	// const tip = bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill;
// 	const total = tip(bill) + bill;
// 	console.log(`Total is $${total}, $${bill} Bill plus $${tip(bill)} tip`);
// };
// calcTip(125);
// calcTip(555);
// calcTip(44);

// const bills = [125, 555, 44];
// const tips = [tip(bills[0]), tip(bills[1]), tip(bills[2])];
// console.log(tips);

// const total = [
// 	bills[0] + tip(bills[0]),
// 	bills[1] + tip(bills[1]),
// 	bills[2] + tip(bills[2]),
// ];
// console.log(total);

/////////////////////////////////// Objects ///////////

// const humna = {
// 	firstName: 'Humna',
// 	lastName: 'Alam',
// 	birthYear: 2022 - 1980,
// 	job: 'Developer',
// 	friends: ['Maya', 'Azwer', 'Madho', 'Kukkoo'],
// };
// console.log(humna);
// console.log(humna.firstName);
// console.log(humna['firstName']);

// const nameKey = 'Name';
// console.log(humna['last' + nameKey]);

// const interestedIn = prompt(
// 	'What do you know about Humna? Choose between firstName, lastName, job, birthYear and friends?'
// );

// if (humna[interestedIn]) console.log(humna[interestedIn]);
// else
// 	console.log(
// 		'Wrong request, Choose between firstName, lastName, job, birthYear and friends?'
// 	);

// humna.firstName = 'Syeda';
// humna['firstName'] = 'Syeda';
// console.log(humna);

// console.log(
// 	`"${humna.firstName} has ${humna.friends.length} friends, and her best friend is called ${humna.friends[2]}."`
// );

///////////// objects methods //////////////
// const humna = {
// 	firstName: 'Humna',
// 	lastName: 'Alam',
// 	birthYear: 1980,
// 	job: 'Developer',
// 	friends: ['Maya', 'Azwer', 'Madho', 'Kukkoo'],
// 	hasDriverLicense: false,

// calcAge: function (birthYear) {
// 	return 2022 - birthYear;
// },

// calcAge: function () {
// 	return 2022 - this.birthYear;
// },

// 	calcAge: function () {
// 		this.age = 2022 - this.birthYear;

// 		return this.age;
// 	},

// 	getSumary: function () {
// 		this.summary = `${this.firstName} is a ${this.calcAge()}-years old ${
// 			this.job
// 		} and she ${
// 			this.hasDriverLicense ? `has driver's license` : `not a drivers license`
// 		}`;
// 		return this.summary;
// 	},
// };

// // console.log(humna['calcAge'](1980));
// console.log(humna.calcAge());
// console.log(humna.getSumary());

// console.log(humna.age);
// console.log(humna.age);
// console.log(humna.age);

// console.log(`${humna.firstName} is a ${calcAge()}`);

///////// coding challenge # 3 Objects ////////////////

// const mark = {
// 	fullName: 'Mark Miller',
// 	mass: 78,
// 	height: 1.69,

// 	calcBMI: function () {
// 		this.bmi = this.mass / this.height ** 2;
// 		return this.bmi;
// 	},
// };

// const john = {
// 	fullName: 'John Smith',
// 	mass: 92,
// 	height: 1.95,

// 	calcBMI: function () {
// 		this.bmi = this.mass / this.height ** 2;
// 		return this.bmi;
// 	},
// };
// mark.calcBMI();
// john.calcBMI();
// console.log(mark.bmi, john.bmi);

// console.log(
// 	`${
// 		mark.bmi > john.bmi
// 			? `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})`
// 			: `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})!`
// 	}`
// );

///////////////loops///////////
// console.log(`Lifting weights repetition 1 🏋️‍♀️`);
// console.log(`Lifting weights repetition 2 🏋️‍♀️`);
// console.log(`Lifting weights repetition 3 🏋️‍♀️`);
// console.log(`Lifting weights repetition 4 🏋️‍♀️`);
// console.log(`Lifting weights repetition 5 🏋️‍♀️`);
// console.log(`Lifting weights repetition 6 🏋️‍♀️`);
// console.log(`Lifting weights repetition 7 🏋️‍♀️`);
// console.log(`Lifting weights repetition 8 🏋️‍♀️`);
// console.log(`Lifting weights repetition 9 🏋️‍♀️`);
// console.log(`Lifting weights repetition 10 🏋️‍♀️`);
// console.log(`------------------------- loops started--------------`);

// for (let rep = 1; rep < 11; rep++)
// 	console.log(`Lifting weights repetition ${rep}🏋️‍♀️`);

// const humnasArray = [
// 	'Syeda',
// 	'Alam',
// 	2022 - 1980,
// 	'Developer',
// 	['Maya', 'Azwer', 'Madho', 'Kukkoo'],
// ];
// const types = [];
// for (let i = 0; i < humnasArray.length; i++) {
// 	types.push(humnasArray[i]);
// 	// console.log(humnasArray[i]);
// 	console.log(types, typeof types[i]);
// }

// const years = [1991, 2007, 1969, 2020];
// const ages = [];
// for (let i = 0; i < years.length; i++) {
// 	ages.push(2022 - years[i]);
// }
// console.log(ages);

// console.log(`----------only strings----------`);
// for (let i = 0; i < humnasArray.length; i++) {
// 	if (typeof humnasArray[i] !== 'string') continue;

// 	console.log(humnasArray[i], typeof humnasArray[i]);
// }
// console.log(`-----------break with number---------`);
// for (let i = 0; i < humnasArray.length; i++) {
// 	if (typeof humnasArray[i] === 'number') break;

// 	console.log(humnasArray[i], typeof humnasArray[i]);
// }

//////// backward loop //////////

// const humnasArray = [
// 	'Syeda',
// 	'Alam',
// 	2022 - 1980,
// 	'Developer',
// 	['Maya', 'Azwer', 'Madho', 'Kukkoo'],
// ];
// for (let i = humnasArray.length - 1; i >= 0; i--) console.log(humnasArray[i]);

// for (let exercise = 1; exercise < 4; exercise++)
// 	console.log(`------------starting exercise ${exercise} 🏋️‍♀️-----------`);
// {
// 	for (let rep = 1; rep < 4; rep++)
// 		console.log(`---------------starting repetition ${rep}------------`);
// }

// for (let exercise = 1; exercise < 4; exercise++) {
// 	console.log(`------------starting exercise ${exercise} 🏋️‍♀️-----------`);
// 	for (let rep = 1; rep < 4; rep++) {
// 		console.log(`---------------starting repetition ${rep}------------`);
// 	}
// }

/////////// while loop ////////////
// let rep = 1;
// while (rep <= 10) {
// 	console.log(`Lifting weights repetition ${rep}🏋️‍♀️`);
// 	rep++;
// }
// let dice = Math.trunc(Math.random() * 6 + 1);
// // console.log(dice);
// while (dice !== 6) {
// 	console.log(`You rolled ${dice}`);
// 	dice = Math.trunc(Math.random() * 6 + 1);
// 	if (dice === 6) console.log(`loop is about to end`);
// }

// const humnasArray = [
// 	'Syeda',
// 	'Alam',
// 	2022 - 1980,
// 	'Developer',
// 	['Maya', 'Azwer', 'Madho', 'Kukkoo'],
// ];
// for (let i = humnasArray.length - 1; i >= 0; i--) console.log(humnasArray[i]);

// const add = [1, 2, 3, 4, 5];
// for (let i = 0; i < add.length; i++) console.log(add[i]);
// for (let j = add.length - 1; j >= 0; j--) console.log(add[j]);

// for (let exercise = 1; exercise <= 4; exercise++) {
// 	console.log(`----------- starting exercise ${exercise}-----------`);

// 	for (let rep = 1; rep < 3; rep++)
// 		console.log(`lifting weight repetition ${rep}`);
// }

// for (let rep = 1; rep < 11; rep++)
// 	console.log(`Lifting weights repetition ${rep}🏋️‍♀️`);

// let rep = 1;
// while (rep <= 10) {
// 	console.log(`Lifting weights repetition with while loop ${rep}🏋️‍♀️`);
// 	rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;
// while (dice !== 6) {
// 	console.log(`u rolled dice ${dice}`);
// 	dice = Math.trunc(Math.random() * 6) + 1;
// 	if (dice === 6) console.log(`loop is about to end`);
// }

// challenge 4

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86];

// console.log(bills.reduce((a, b) => a + b, 0));
// console.log(bills.length);
// const tips = [];
// const totals = [];

// const calcTip = (bill) => {
// 	return bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill;
// };

// for (let i = 0; i < bills.length; i++) {
// 	const tip = calcTip(bills[i]);
// 	tips.push(tip);

// 	const total = tips[i] + bills[i];
// 	totals.push(total);
// }
// console.log(bills, tips, totals);

// const calcAverage = (arr) => {
// 	const total = arr.reduce((a, b) => a + b, 0);
// 	const avg = total / arr.length;
// 	console.log(total);
// 	console.log(avg);
// };
// calcAverage(bills);
// calcAverage([1, 2, 3]);
// calcAverage(tips);
// calcAverage(totals);

const temperature = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
//A-understanding the problem

//1- what is the temp amplitude
//ans: diff b/w highest and lowest temp
//2- how do we compute max n min value
//3- what the sensor error and what do we do to solve it?

//B- Breaking the problem into smaller parts
//1- how to ignore error?
//2- Find max value
//3- Find min value
//4- subtracting min from max-amplitude

const calcTemp = (temps) => {
	let max = temps[0];
	let min = temps[0];

	for (let i = 1; i < temps.length; i++) {
		const curTemp = temps[i];

		if (typeof curTemp !== 'number') continue;

		if (curTemp > max) max = curTemp;
		if (curTemp < min) min = curTemp;
	}
	console.log(max, min);
	return max - min;
};
// calcTemp([1, 2, 3, -2, 25]);
// const amplitude = calcTemp(temperature);
// console.log(amplitude);

// Problem - Function should recieve two arrays
// how to merger 2 arrays

const calcTemp1 = (t1, t2) => {
	const temps = t1.concat(t2);
	console.log(temps);

	let max = temps[0];
	let min = temps[0];

	for (let i = 1; i < temps.length; i++) {
		const curTemp = temps[i];

		if (typeof curTemp !== 'number') continue;

		if (curTemp > max) max = curTemp;
		if (curTemp < min) min = curTemp;
	}
	console.log(max, min);
	return max - min;
};
const amplitude1 = calcTemp1([3, 5, 1], [9, 0, 5]);
// const amplitude1 = calcTemp(temperature);
console.log(amplitude1);
