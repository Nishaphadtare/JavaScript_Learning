const array_numbers =[ 1, -7, 40, 502, -77, 91, 0, 108, 89, -601];
array_numbers.forEach((currentValue,array) => {
   console.log(`Element :${currentValue},                  Val$ue :${array}`);
   
});
console.log("-----------2.Display positive Numbers from the given array----------");
array_numbers.forEach((currentValue) => {
   if (currentValue>0) {
      console.log(currentValue);
   }
});

console.log("------------3. Display Negative Numbers from the given array---------");
array_numbers.forEach((currentValue) => {
   if (currentValue<0) {
      console.log(currentValue);
   }
});

console.log("------------4. Display Even Numbers from the given array---------");
array_numbers.forEach((currentValue) => {
   if (currentValue%2==0) {
      console.log(currentValue);
   }
});

console.log("------------5. Display Odd Numbers from the given array---------");
array_numbers.forEach((currentValue) => {
   if (currentValue%2!==0) {
      console.log(currentValue);
   }
});
console.log("------------3. Display sum the given array---------");
let sum = array_numbers.reduce((currentValue, runningTotal) => {
  return currentValue + runningTotal;
});
console.log(`Total sum: ${sum}`);

// console.log("------------3. Display Even Position array---------");
// array_numbers.forEach((currentValue) => {
//    if (currentValue>2) {
//       console.log(currentValue);
//    }
// });