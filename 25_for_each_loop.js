let show = (n1, test) => {
    console.log("hi");
}
show(10, "test");
console.log("---------------------------------------------------------------------");

const arrayNumber = [10, 20, 30, 40, 20, 10, - 30, - 20];
// arrayNumber.forEach(function(currentValue, Index, array){
// console.log(currentValue, Index, array);
// });

arrayNumber.forEach((currentValue, Index, array) => {
    console.log(currentValue, Index, array);
    });

// arrayNumber.forEach(currentValue => console.log(currentValue));
console.log("---------------------------------------------------------------------");

// arrayNumber.forEach((currentValue, Index, array) => {
//     if (currentValue<0) {
//         console.log(currentValue, Index);
//     }
//     console.log(currentValue, Index, array);
//     });

// const arrayNumbers = [20, 25, 31, 33, 20, 10, 52, 60, - 30, - 20];
// arrayNumbers.forEach((currentValue, Index) => {
//     if (currentValue<0) {
//         console.log(currentValue,Index);  
//     }
//     });
console.log("---Traversing set using forEach()---");
    const setOfNumbers = new Set(arrayNumber);
    setOfNumbers.forEach((value) =>  {
        console.log(value);
    });

    console.log("---Traversing map using forEach()---");
    console.log("===== Traversing map using forEach() =====");
let map = new Map();
map.set(22, "Sachin");
map.set(11, "Dravid");
map.set(33, "Gaungully");
map.set(77, "Dravid");
map.forEach( (key, value) => {
    console.log(key, value);
} );

