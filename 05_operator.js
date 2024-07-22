console.log("*********** Addition ***********");
console.log(10+10);
console.log(10+100.23);

var num1 = 100;
var num2 = 50;
var result = (num1+num2);
console.log(`result is : ${result}`);

console.log("*********** Division ***********");
var num1 = 10;
var num2 = 4;
var result =num1/num2;
console.log(`result is :${result}`);

console.log("*********** Modulo ***********");
var num1 = 10;
var num2 = 2;
var result = num1 % num2;
console.log(`result is : ${result}`);

console.log("*********** Increment ***********");
// var incr = num1+1;
// var num1 = 10;
// var num2 = 4;
var incr = num1++;
var decr =  num2--;
console.log(`${incr}, ${decr}`);

console.log("*********** Increment ***********");
// var incr = num1+1;
var num1 = 10;
var num2 = 4;
var incr = ++num1;
var decr = --num2;
console.log(`${incr}, ${decr}`);

console.log("*********** Compassion Operator  ***********");
var num1 =100;
var num1 =50;
console.log("num1 < num2 ====>",  num1 < num2);
console.log("num1 > num2 ====>",  num1 > num2);
console.log("num1 != num2 ====>",  num1 != num2);
 
var num3 = 50;
console.log("num2 <= num3 ====>",  num2 <= num3);
console.log("num2 < num3 ====>",  num2 < num3);
console.log("num2 > num3 ====>",  num2 > num3);
console.log("num2 >= num3 ====>",  num2 >= num3);

var num2 = 50;
var num3 = "50";
console.log(`*********** Operator ***********`);
var result = num2 == num3;
console.log("num2 == num3 =====>", result);

var num2 = 50;
var num3 = "50";
console.log(`*********** Operator ***********`);
var result1 = num2 === num3;
console.log("num2 === num3 =====>", result1);
