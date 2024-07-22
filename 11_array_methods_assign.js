console.log(`Question: const fruits_seasonal = ["Banana","Orange", "Apple", "Mango", "Water Melon"]`);
console.log("----------------------------------------------------------------------------------------------------");
console.log(`Q.1. log the first and last element on console`);
const fruits_seasonal = ["Banana","Orange", "Apple", "Mango", "Water Melon"];
console.log(fruits_seasonal[0]);

console.log("----------------------------------------------------------------------------------------------------");
console.log("2. Add element -> Papaya before the element `Banana` and then log array on console");
fruits_seasonal.unshift("Papaya");
console.log(fruits_seasonal);

console.log("----------------------------------------------------------------------------------------------------");
console.log("3.Remove `Mango` from the array");
let sliceElements = fruits_seasonal.slice(0, 4);
console.log(fruits_seasonal.slice(0, 4));

console.log("----------------------------------------------------------------------------------------------------");
console.log("4. add element or insert element `Pineapple` at the last position");
let spliceElement = fruits_seasonal.splice(6, 0, `Pineapple`)
console.log(fruits_seasonal);


console.log("----------------------------------------------------------------------------------------------------");
console.log("5. Insert an element- `Dragon Fruit` before `Water Melon`");
let splicedElement = fruits_seasonal.splice(5 , 0,`Dragon Fruit`)
console.log(fruits_seasonal);

console.log("----------------------------------------------------------------------------------------------------");
console.log("6. replace an element `orange` with `Kiwi`");
fruits_seasonal.splice(2, 1, `Kiwi`);
console.log(fruits_seasonal);


console.log("----------------------------------------------------------------------------------------------------");
console.log("7.log the elements starting from index 1 to 4");
fruits_seasonal.slice(1, 4);
console.log(fruits_seasonal.slice(1, 4));

console.log("----------------------------------------------------------------------------------------------------");
console.log("8.Only select last 3 element and log on console: Use the length property");
fruits_seasonal.slice(5);
console.log(fruits_seasonal.slice(5))

console.log("------------------------------------------ *Assignment No.2* ----------------------------------------------------------");
console.log("Q. const array numbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11]");

console.log("----------------------------------------------------------------------------------------------------");
console.log("1. Find the total element available or length and log on console");
const array_numbers =[20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
let Total_length = array_numbers.length
console.log("Total length of array =", array_numbers.length);


console.log("----------------------------------------------------------------------------------------------------");
console.log("2. Log the first and last element in array_numbers and log on console");
let third_last = array_numbers[arrayLength = 3]
console.log(third_last);

console.log("----------------------------------------------------------------------------------------------------");
console.log("3. Log the thirst last element using length property and log on console");
array_numbers.slice(0,9);
console.log(array_numbers.slice(0, 9));


console.log("----------------------------------------------------------------------------------------------------");
console.log("4. find the all even numbers log on console");
for (let index = 2; index <array_numbers; index++) {
    if (array_numbers%index==0) {
        console.log(even_numbers);
    } 
}
console.log(`even_numbers: ${20}`);
console.log(`even_numbers: ${40}`);
console.log(`even_numbers: ${60}`);
console.log(`even_numbers: ${2}`);


console.log("----------------------------------------------------------------------------------------------------");
console.log("5. find the all odd numbers log on console");
for (let index = 0; index < array_numbers; index++) {
    if (array_numbers%index!==0) {
        console.log(odd_numbers);
    }
}
console.log(`odd_numbers: ${31}`);
console.log(`odd_numbers: ${25}`);
console.log(`odd_numbers: ${23}`);
console.log(`odd_numbers: ${11}`);
console.log(`odd_numbers: ${29}`);
console.log(`odd_numbers: ${9}`);
console.log(`odd_numbers: ${11}`);


console.log("----------------------------------------------------------------------------------------------------");
console.log("6. find all the even position elements from array_numbers for loop");
for (let index = 2; index < array_numbers; index++) {
  if (array_numbers%2==0) {
    console.log(array_numbers);
  }
}
console.log(`${20}`);
console.log(`${40}`);
console.log(`${60}`);
console.log(`${2}`);


console.log("----------------------------------------------------------------------------------------------------");
console.log("7.find all the odd position elements from array_numbers for loop");
for (let index = 0; index < array_numbers; index++) {
    if (array_numbers%index!==0) {
        console.log(odd_numbers);
    }
}
console.log(`${31}`);
console.log(`${25}`);
console.log(`${23}`);
console.log(`${11}`);
console.log(`${29}`);
console.log(`${9}`);
console.log(`${11}`);

// console.log("----------------------------------------------------------------------------------------------------");
// console.log("8.find sum of all elements from array_numbers log on console");
// console.log(array_numbers); 
//     let sum = 0;
//     for (let index = 0; index < array_numbers.length; index+1) {
//         sum = array_numbers [index];
//     }
// console.log(sum);


// console.log("----------------------------------------------------------------------------------------------------");
// console.log("9.find sum of all elements from array_numbers lo on console");   

console.log("----------------------------------------------------------------------------------------------------");
console.log("10. Is number 115 available in array_numbers ");
console.log(`115 is available :- `,array_numbers.includes(115));
console.log(("---------------------------------------------------"));
console.log("11. Is number 23 available in array_numbers ");
console.log('23 is available :-',array_numbers.includes(23));


