let arrayOfNumbers = [1, 3, 7, 8, 9, 3, 7]
// arrayOfNumbers[4] = 11;
console.log(arrayOfNumbers);
arrayOfNumbers.unshift(5, 44);
arrayOfNumbers.unshift(0);
console.log(arrayOfNumbers);
console.log("====================================");


console.log(arrayOfNumbers.includes(7));
console.log("====================================");
console.log(arrayOfNumbers.includes(9));

console.log("====================================");
for (let index = 0; index < arrayOfNumbers.length; index++) {
    const element = arrayOfNumbers[index];
    console.log(element);  
}
console.log("--------------------------------------------------------------");

let totalElement = arrayOfNumbers.length-1;
for (let index = totalElement; index >= 0; index--) {
    const element = arrayOfNumbers[index];
    console.log(element);
    
}

let array = [11, 22, 47, 81];
console.log(array);
array.shift();
console.log(array);

console.log("----------------------------------------------------");
let arrayOfNumber = [1, 3, 7, 8, 9, 3, 7];
let sliceElements = arrayOfNumber.slice[2];
console.log(sliceElements);
let sliceElement = arrayOfNumber.slice[1, 4];
console.log(sliceElement);

e.log("=================array resize============");
