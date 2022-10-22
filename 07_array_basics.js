const array1 =[1, 3, 4];
const array2 =[5, 6, 7];
// const array3 = array1.concat(array2);

const array3=[...array1, ...array2]
console.log(array3);



console.log("======================================================================================");


var arrayOfNumbers = [1, 3, 7, 8, 9, 3, 7];
console.log(arrayOfNumbers);
arrayOfNumbers.push(99);
arrayOfNumbers.push(88);
arrayOfNumbers.pop();

console.log(arrayOfNumbers);
 var arrayLength = arrayOfNumbers.length;

console.log(`Total number elements available in array: ${arrayLength}`);

console.log(`Element at 4th Index is: ${arrayOfNumbers[4]}`);

arrayOfNumbers[2] = 77;
console.log(arrayOfNumbers);


let otherArray = arrayOfNumbers;
arrayOfNumbers[3] = 44;
console.table(arrayOfNumbers);
console.table(otherArray);


console.log("-----------------------------------------------------------------------------------------------------");

for (var test = 1; test <= 10; test++) { // test = 1  2  3
    console.log(test); // 1 2  3
}
// 0 2 4 6 8 10
for (let index = 0; index <= 10; index=index+2) { // index++   index = index+2
    console.log(index);
}

// for (let index = 50; index > 40; index--) {
//     console.log(index);  
// }

// initilization ; condition; update
// initilization: 1; condition: index<=30; update: index

// for (let index = 1; index <=30; index=index+2) {
//     console.log(index);    
// }
// for (let index = 1; index < 30; index++) {
//     if(index%2!=0)
//    console.log(index);
    
// }

// initialization: 1  update by 1;    condition <=10
for (var test = 1; test <= 10; test++) { // test = 1  2  3
    // console.log(test); // 1 2  3
}

console.log("---------------------------***---------------------------------------------");

// 0 2 4 6 8 10
for (let index = 0; index <= 10; index=index+2) { // index++   index = index+2
    console.log(index);
}
console.log("------------------------------------------------------------------------");

// WAP to print numbers from 50 to 40 by decrementing by 1
for (let index = 50; index > 40; index--) { // 51  52  53 
    console.log(index); // 50  51 52 
    
}
console.log("-------------------------------------------------------------------------");


// WAP to find first 15 odd numbers
// intialization index=1 ; condition index<30;  update index= index+2 

for (let index = 1; index < 30; index=index+2) {
    //console.log(index);
    
}
console.log("-------------------------------------------------------------------------");


for (let index = 1; index < 30; index++) {
    if(index%2!=0){
        console.log(index);
    }
    
}

//WAP to find first 15 odd numbers
//WAP to find first 43 even numbers
var countEven = 0; // 2
for (let index = 0; index < 1000; index++) { // 1  2
    if(index%2==0){
        console.log(index); // 0  2 
        countEven = countEven +1;
        if (countEven==43) {
            break;
        }
    }
    
}
