var incrementing = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
console.log(incrementing);

var countIncrementing = 0;
for (let index = 15; index >= 5; index--) {

    console.log(index);
}
console.log("===============================================================");
for (let index = 50; index > 40; index--) {
    console.log(index);

}
console.log("=========================== Odd No ====================================");
var countOdd = 0;
for (let index = 1; index < 15; index++) {
    if (index % 2 != 0) {
        console.log(index);
        countOdd = countOdd
        if (countOdd == 15) {
            break;
        }
    }

}
console.log("=========================== Even No ====================================");

var countEven = 0;
for (let index = 0; index < 1000; index++) {
    if (index % 2 == 0) {
        console.log(index);
        countEven = countEven + 1;
        if (countEven == 10) {
            break;
        }
    }

}

console.log("=========================== Table 10 ====================================");
for (let index = 5; index <= 50; index = index + 5) {
    console.log(index);
}
// console.log("===============================================================");
// var number =100;
// var totalnum = number.count;
// for (let index = 10; index < totalnum ; index++) {
//    var num = number.count(10);
//    if (index){
//         console.log();
//    }
    
// }

  