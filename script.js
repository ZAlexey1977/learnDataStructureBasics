let log = console.log;

//////////////////////////////////////////// unit 1 //////////////////////////////////////////

// let yourArray = ['Hello', 1, 3, true, 'World']; // Змініть цей рядок

//////////////////////////////////////////// unit 2 //////////////////////////////////////////

// let myArray = ["a", "b", "c", "d"];
// // Змініть код лише під цим рядком
// myArray[1] = 'new data';
// // Змініть код лише над цим рядком
// console.log(myArray);

//////////////////////////////////////////// unit 3 //////////////////////////////////////////

// function mixedNumbers(arr) {
//   // Змініть код лише під цим рядком
// arr.unshift('I', 2, 'three');
// arr.push(7, 'VIII', 9);
//   // Змініть код лише над цим рядком
//   return arr;
// }

// console.log(mixedNumbers(['IV', 5, 'six']));

//////////////////////////////////////////// unit 4 //////////////////////////////////////////

// function popShift(arr) {
//   let popped = arr.pop(); // Змініть цей рядок
//   let shifted = arr.shift(); // Змініть цей рядок
//   return [shifted, popped];
// }

// console.log(popShift(['challenge', 'is', 'not', 'complete']));

//////////////////////////////////////////// unit 5 //////////////////////////////////////////

// const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// // Змініть код лише під цим рядком
// arr.splice(1,4);
// // Змініть код лише над цим рядком
// console.log(arr);

//////////////////////////////////////////// unit 6 //////////////////////////////////////////

// function htmlColorNames(arr) {
//   // Змініть код лише під цим рядком
// arr.splice(0,2, 'DarkSalmon', 'BlanchedAlmond');
//   // Змініть код лише над цим рядком
//   return arr;
// }

// console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));

//////////////////////////////////////////// unit 7 //////////////////////////////////////////

// function forecast(arr) {
//   // Змініть код лише під цим рядком

//   return arr.slice(2,4);
// }

// // Змініть код лише над цим рядком
// console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));

//////////////////////////////////////////// unit 8 //////////////////////////////////////////

// function copyMachine(arr, num) {
//   let newArr = [];
//   while (num >= 1) {
//     // Змініть код лише під цим рядком
//     newArr.push([...arr]);
//     // Змініть код лише над цим рядком
//     num--;
//   }
//   return newArr;
// }

// log(copyMachine([true, false, true], 2));

//////////////////////////////////////////// unit 9 //////////////////////////////////////////

// function spreadOut() {
//   let fragment = ['to', 'code'];
//   let sentence = ['learning', ...fragment, 'is', 'fun'];// Змініть цей рядок
//   return sentence;
// }

// log(spreadOut());

//////////////////////////////////////////// unit 10 //////////////////////////////////////////

// function quickCheck(arr, elem) {
//   // Змініть код лише під цим рядком
//   if (arr.indexOf(elem) >= 0) {
//     return true;
//   }
//   else {
//     return false;
//   }
//   // Змініть код лише над цим рядком
// }

// log(quickCheck(['squash', 'onions', 'shallots'], 'mushroooms'));

//////////////////////////////////////////// unit 11 //////////////////////////////////////////

// function filteredArray(arr, elem) {
//   let newArr = [];
//   // Змініть код лише під цим рядком
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].indexOf(elem) == -1) {
//       newArr.push(arr[i]);
//     }
//   }
//   // Змініть код лише над цим рядком
//   return newArr;
// }

// log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));

//////////////////////////////////////////// unit 12 //////////////////////////////////////////

// let myNestedArray = [
//   // Змініть код лише під цим рядком
//   ['unshift', false, 1, 2, 3, 'complex', 'nested'],
//   ['loop', 'shift', 6, 7, 1000, 'method'],
//   ['concat', false, true, 'spread', 'array'],
//   ['mutate', 1327.98, 'splice', 'slice', 'push'],
//   ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth']
//   // Змініть код лише над цим рядком
// ];

// myNestedArray[2][5] = [true, 'deep', 1];
// myNestedArray[2][5][0] = [false, 'deeper', 2];
// myNestedArray[2][5][0][0] = ['deepest'];

// log(myNestedArray);

//////////////////////////////////////////// unit 13 //////////////////////////////////////////

// let foods = {
//   apples: 25,
//   oranges: 32,
//   plums: 28
// };

// // Змініть код лише під цим рядком
// foods.bananas = 13;
// foods.grapes = 35;
// foods.strawberries = 27;

// // Змініть код лише над цим рядком

// log(foods);

//////////////////////////////////////////// unit 14 //////////////////////////////////////////

// let userActivity = {
//   id: 23894201352,
//   date: 'January 1, 2017',
//   data: {
//     totalUsers: 51,
//     online: 42
//   }
// };

// // Змініть код лише під цим рядком
// userActivity.data.online = 45;
// // Змініть код лише над цим рядком
// log(userActivity);

//////////////////////////////////////////// unit 15 //////////////////////////////////////////

// let foods = {
//   apples: 25,
//   oranges: 32,
//   plums: 28,
//   bananas: 13,
//   grapes: 35,
//   strawberries: 27
// };

// function checkInventory(scannedItem) {
//   // Змініть код лише під цим рядком
// return foods[scannedItem];
//   // Змініть код лише над цим рядком
// }

// log(checkInventory("apples"));

//////////////////////////////////////////// unit 16 //////////////////////////////////////////

// let foods = {
//   apples: 25,
//   oranges: 32,
//   plums: 28,
//   bananas: 13,
//   grapes: 35,
//   strawberries: 27
// };

// // Змініть код лише під цим рядком
// delete foods.oranges;
// delete foods.plums ;
// delete foods.strawberries;
// // Змініть код лише над цим рядком

// log(foods);

//////////////////////////////////////////// unit 17 //////////////////////////////////////////

// let users = {
//   Alan: {
//     age: 27,
//     online: true
//   },
//   Jeff: {
//     age: 32,
//     online: true
//   },
//   Sarah: {
//     age: 48,
//     online: true
//   },
//   Ryan: {
//     age: 19,
//     online: true
//   }
// };

// function isEveryoneHere(userObj) {
//   // Змініть код лише під цим рядком
// if(userObj.hasOwnProperty('Alan') && userObj.hasOwnProperty('Jeff') && userObj.hasOwnProperty('Sarah') && userObj.hasOwnProperty('Ryan')){
//   return true;
// } else {
//   return false;
// }
//   // Змініть код лише над цим рядком
// }

// console.log(isEveryoneHere(users));

//////////////////////////////////////////// unit 18 //////////////////////////////////////////

const users = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}
let count = 0;
function countOnline(allUsers) {
  // Змініть код лише під цим рядком

  for (let person in allUsers) {
    log(person, allUsers['person']);
    // if (person.online.hasOwnProperty('true')) {
    //   count++;
    // }
    // return count;
  }

  // Змініть код лише над цим рядком
}

log(countOnline(users));
//log(users.Alan.online);
//////////////////////////////////////////// unit 19 //////////////////////////////////////////

//////////////////////////////////////////// unit 20 //////////////////////////////////////////

//////////////////////////////////////////// unit 21 //////////////////////////////////////////

//////////////////////////////////////////// unit 22 //////////////////////////////////////////

//////////////////////////////////////////// unit 23 //////////////////////////////////////////

//////////////////////////////////////////// unit 24 //////////////////////////////////////////

//////////////////////////////////////////// unit 25 //////////////////////////////////////////