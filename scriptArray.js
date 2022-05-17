'use strict';
/////////////////////////////////////////////////
/////////////////////////////////////////////////
//  /challenge 1
/* Test Data 1: Julia's data[3,5,2,12,7]
				Kate's Data[4,1,15,8,3]

	Test Data 2: Julia's data[9,16,6,8,3]
				Kate's Data[10,5,6,1,4]

	const juliaDogs=[3,5,2,12,7]
	const copyJulia=juliaDogs.slice(3)
	

	const kateDogs=[4,1,15,8,3]

const checkDogs=(arr1, arr2)=>{

}
checkDogs(dogs1, dogs2)*/

// const juliaDogs = [3, 5, 2, 12, 7];
// const copyJulia1 = juliaDogs.splice(1);
// console.log(copyJulia1);
// const copyJulia2 = copyJulia1.splice(2, 3);
// console.log(copyJulia2);
// console.log(juliaDogs);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
// 	['USD', 'United States dollar'],
// 	['EUR', 'Euro'],
// 	['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// let arr = ['a', 'b', 'c', 'd', 'e'];
// slice
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));

// splice->change the array, mutate it

// console.log(arr.splice(-1));
// console.log(arr);
//  reverse

// let arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse());

// concat

// const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]);

// join()

// console.log(letters.join(' - '));

// at method
// const arr = [23, 11, 64];
// console.log(arr[0]);
// console.log(arr.at(0));

// console.log(arr[arr.length - 1]);
// console.log(arr.slice(-1));
// console.log(arr.slice(-1)[0]);
// console.log(arr.at(-1));

// console.log('humna'.at(0));

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const [i, movement] of movements.entries()) {
// 	if (movement > 0) {
// 		console.log(`Movement ${i + 1}: You deposited ${movement}`);
// 	} else {
// 		// Math.abs() to remove the - sign
// 		console.log(`Movement ${i + 1}: You withdraw ${Math.abs(movement)}`);
// 	}
// }

// console.log('----------- forEach()');
// movements.forEach(function (movement, i, arr) {
// 	if (movement > 0) {
// 		console.log(`Movement ${i + 1}: You deposited ${movement}`);
// 	} else {
// Math.abs() to remove the - sign
// 		console.log(`Movement ${i + 1}: You withdraw ${Math.abs(movement)}`);
// 	}
// });

// map and set in forEach

// const currencies = new Map([
// 	['USD', 'United States dollar'],
// 	['EUR', 'Euro'],
// 	['GBP', 'Pound sterling'],
// ]);
// currencies.forEach(function (currency, i, map) {
// 	console.log(`${i}: ${currency}`);
// });

// // set

// const currentUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
// console.log(currentUnique);
// currentUnique.forEach(function (currency, _currency, set) {
// 	console.log(`${_currency}: ${currency}`);
// });
