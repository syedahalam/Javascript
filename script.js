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

console.log(`The average score for Dolphon's Team is ${averageDolphinScore}`);
console.log(`The average score for Koala's Team is ${averageKoalasScore}`);

if (averageDolphinScore > averageKoalasScore) {
	console.log(`Dolhin's are the winners`);
} else if (averageDolphinScore === averageKoalasScore) {
	console.log(`Match tied!`);
} else if (averageKoalasScore > averageDolphinScore) {
	console.log(`Koala's are the winners!`);
}

if (averageDolphinScore > 100 && averageDolphinScore > averageKoalasScore) {
	console.log(
		`Dolphin's are the winner and met all requirements of the game! CONGRATULATIONS!`
	);
} else if (
	averageKoalasScore > 100 &&
	averageKoalasScore > averageDolphinScore
) {
	console.log(
		`Koala's are the winners and have met all the game requirements, CONGRATULATIONS!`
	);
} else if (
	averageDolphinScore === averageKoalasScore &&
	(averageDolphinScore && averageKoalasScore) > 100
) {
	console.log(
		'Both the teams are winners, Game tied! CONGRATULATIONS TO BOTH!'
	);
} else {
	console.log(
		`Both teams are losers 😛 because their scores are less than 100`
	);
}
