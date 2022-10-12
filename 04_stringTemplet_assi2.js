
console.log("1.--------------------------");
var greet = "    Hey you are doing good, keep it up  "
console.log(greet);

console.log("2.--------------------------");
var count = greet.length;
//  console.log(count);
console.log("Length Of String :- ", greet.length);

console.log("3.--------------------------");
var greet = "    Hey you are doing good, keep it up  ";
//  console.log(greet.length);
var trimResult = greet.trim();
console.log("Removed Extra Space :-", trimResult.length);

console.log("4.--------------------------");
var greet = function (length, trimResult) {
   var greet = length - trimResult;
   console.log("Total number of Spaces count that is removed in step 3 :", greet);
}
greet(40, 34)
console.log("5.--------------------------");
var greet = "Hey you are doing good, keep it up";
console.log("Last character using length :-", greet.charAt("0"));
console.log("Last character using length :-", greet.charAt('33'));

console.log("6.--------------------------");
var words = "Hey, you, are, doing, good, keep, it, up";
var splitResult = words.split(",");
console.log(splitResult);
console.log(splitResult.length);

console.log("7.--------------------------");
var words = "Hey you are doing good, keep it up"
console.log(`index of word is "good" From the given string:- `,words.indexOf("good"));

console.log("8.--------------------------");
var greet = "Hey you are doing good, keep it up"
console.log( "substring starting from 22 using substring() = ",greet.substring(22));

console.log("9.--------------------------");
var greet = "Hey you are doing good, keep it up"
console.log("Is string end with up :- ",greet.includes("up"))
console.log("10.--------------------------");
console.log("Is string start with Hey:- ",greet.includes("Hey"));




