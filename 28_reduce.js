console.log("====== reduce()=====");
const arrayOfNumbers = [2, 3, 5, 4, 6, 1];
let sum =  arrayOfNumbers.reduce( (value, runningTotal) => {
    return  value + runningTotal;
} );
console.log(sum);

// const arrayOfNumbers = [2, 3, 5, 4, 6, 1];
// let sum =  arrayOfNumbers.reduce( (value, runningTotal) => {
//     return  value + runningTotal;
// }100 );
// console.log(sum);

