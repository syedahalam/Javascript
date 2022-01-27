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

// const yearsUntillRetirement = (birthYear) => {
// 	const age = 2022 - birthYear;
// 	const ret = 65 - age;
// 	return ret;
// };
// console.log(yearsUntillRetirement(1980));

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
