let setOfNumbers = new Set();
console.log(typeof setOfNumbers);
console.log("----------------------adding element into the set collection-----------------------");
setOfNumbers.add(2);
setOfNumbers.add(4);
setOfNumbers.add(7);
setOfNumbers.add(9);
setOfNumbers.add(11);
console.log(setOfNumbers);

console.log("----------------------adding duplicate element----------------------");
setOfNumbers.add(7);
console.log(setOfNumbers);

console.log("----------------------change number element available into set----------------------");
console.log(setOfNumbers.size);

console.log("----------------------Deleting  element 9----------------------");
setOfNumbers.add(9);
console.log(setOfNumbers.size);
console.log(setOfNumbers);

console.log("----------------------Check whether element 7 available into set or not----------------------");
let isAvailable = setOfNumbers.has(7);
console.log(isAvailable);
console.log(setOfNumbers.has(9));

console.log("--------------------------------------------------------");

// setOfNumbers.clear(); // it wii clear the set or empty the set
for (const element of setOfNumbers) {
    console.log(element);   
}


console.log("--------------------------------------------");
let arrayNumbers = [2, 3, 4, 5, 6, 3, 5]
let setNumbers = new Set(arrayNumbers);
console.log(setNumbers);

// console.log("--------------------------------------------");
// for (let index = 0; index < arrayNumbers.length; index++) {
//     const element = arrayNumbers[index];
//     setNumbers.add(element)
    
// }

console.log("---------------Remove duplicate array -----------------------------");
let arrayUniqueElements = [...new Set(arrayNumbers)];
console.log(arrayUniqueElements);