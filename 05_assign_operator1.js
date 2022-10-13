// var greet = "JavaScript";
// console.log(greet.length);
// var trimResult = greet.trim()

// var greet = "Google";
// console.log(greet.length);
// var trimResult = greet.trim()

// var greet = "Developer";
// console.log(greet.length);
// var trimResult = greet.trim()
// console.log();


// // var wordLengthSquare = function (word){
// //     var wordLengthSquare = word.length;
// //     return wordLength * wordLength;
// // }
// //     var givenStringLength ="I am Angular developer" .length
// //     var result ="I am Angular developer".split(" ");
// //     var total_words = result.length;
// //     givenStringLength / total_words;
// console.log("----------------------------------------------");
// var wordLengthSquare = function (word){
//     var wordLengthSquare = word.length;
//     return wordLengthSquare*wordLengthSquare;   
// }
// console.log(`Square of length :- `,wordLengthSquare("javaScript"));
// console.log('Square of length:- ', wordLengthSquare("Google"));
// console.log(`Square of length :-`, wordLengthSquare("Developer"));

// console.log("----------------------------------------------");
// var greet = "I am Angular Developer";
// console.log(greet);
// var count = greet.length;

// console.log("----------------------------------------------");


var wordLengthSquare = function (word){
        var wordLengthSquare = word.length;
        return wordLengthSquare*wordLengthSquare;   
}
var word ="JavaScript";
console.log(`length of "JavaScript :-" `,word.length);
console.log(`Square of length :- `,wordLengthSquare("javaScript"));
console.log("======================================================================");

var word ="Google";
console.log(`length of "Google :-" `,word.length);
console.log(`Square of length :- `,wordLengthSquare("google"));
console.log("======================================================================");

var word ="Developer";
console.log(`length of "Developer :-" `,word.length);
console.log(`Square of length :- `,wordLengthSquare("jDeveloper"));

console.log("======================================================================");
var string="i am Angular Developer";
console.log(`the length of "i am Angular Developer" is :`, string.length);
console.log("result =", string.length/4);
console.log("result =", string.length*4);