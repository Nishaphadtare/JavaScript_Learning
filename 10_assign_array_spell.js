// var incrementing = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// console.log(incrementing);

// var countIncrementing = 0;
// for (let index = 15; index >= 5; index--) {

//     console.log(index);
// }
// console.log("===============================================================");
// for (let index = 50; index > 40; index--) {
//     console.log(index);

// }
// console.log("=========================== Odd No ====================================");
// var countOdd = 0;
// for (let index = 1; index < 15; index++) {
//     if (index % 2 != 0) {
//         console.log(index);
//         countOdd = countOdd
//         if (countOdd == 15) {
//             break;
//         }
//     }

// }
// console.log("=========================== Even No ====================================");

// var countEven = 0;
// for (let index = 0; index < 1000; index++) {
//     if (index % 2 == 0) {
//         console.log(index);
//         countEven = countEven + 1;
//         if (countEven == 10) {
//             break;
//         }
//     }

// }


// console.log("=========================== Table 10 ====================================");
// for (let index = 5; index <= 50; index = index + 5) {
//     console.log(index);
// }
// // console.log("===============================================================");
// // var number =100;
// // var totalnum = number.count;
// // for (let index = 10; index < totalnum ; index++) {
// //    var num = number.count(10);
// //    if (index){
// //         console.log();
// //    }

// // }
console.log("=============================================== *Assignment using spread operator* ============================================================");


console.log("Given a array -> const array_nums = [20, 3,10..66, 4, 56, 90, 400, 49] ");
const array_nums = [20, 3, 4, 56, 90, 400, 49]
console.log(array_nums);
//   array_nums =  array_nums;
//   console.log( array_nums);

console.log("----------------------------------------------------------------------------------------------------------------------");

console.log("Q.1.perform shallow clone on array_nums, update cloned array with values -> 55, 66 using push() and log original and consoled array on console");

array_nums.push(55);
array_nums.push(56);
var arrayLength = array_nums.length;
console.log(array_nums);
console.log("----------------------------------------------------------------------------------------------------------------------");
console.log("Q.2.perform deep clone using spread operator, update original array i.array_nums with values -> 10, 25 at last position and log original and consoled array on console");
array_nums[8] = 10;
array_nums[9] = 25;
console.log(array_nums);


console.log("----------------------------------------------------------------------------------------------------------------------");
console.log("Q.3. Given other array -> array_even = [2, 30, 14, 8], manage of content this `array_nums` using spread operator, log result on console after merge array operation")
let array_even = array_nums;
array_nums[0] = 2;
array_nums[1] = 30;
array_nums[2] = 14;
array_nums[3] = 8;
console.log(array_even);
// console.log(array_nums);


console.log("----------------------------------------------------------------------------------------------------------------------");
console.log("Q.4.create the employee_info object as given in snippet");


console.log("----------------------------------------------------------------------------------------------------------------------");
console.log("Q.5.Log the  Employee Details on console like");
const employee_info = {
  emp_id: 27,
  emp_name: "john doe",
  salary: {
    July_month: "80,000IRN",
    aug_month: "50,0000IRN",
    jun_month: "65,0000IRN",
  },
  address: {
    locality: {
      colony: "om Vrindavan society",
      street: "kanch pokali",
    },
    city: "Mumbai",
    State: "Maharashtra",
    country: "India",
    mobiles: ["+91 8600 3456 88","1800- 4567 32","+91- 9096 5678 77"]  
  }
}
console.log(employee_info.address);

console.log("Q.5.b--------------------------------------------");
console.table(employee_info.address.mobiles);

console.log("----------------------------------------------------------------------------------------------------------------------");
console.log("Q.6. Perform the deep clone using ...operator");

console.log("Q.6.a--------------------------------------------");
street = "chinch pokali";
console.log(employee_info.address.locality.street);

console.log("Q.6.b--------------------------------------------");
mobiles = "91 9978 3456 78"
console.log(mobiles);
console.table(employee_info.address.mobiles);

console.log("Q.6.c--------------------------------------------");
console.log(employee_info);


console.log("Q.6.c--------------------------------------------");
console.table("Q.6.d. point out issue");

console.log("");






// array_nums.pop();


// console.log(array_num);



