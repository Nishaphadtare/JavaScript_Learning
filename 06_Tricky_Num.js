console.log(`Q.1. Count the total number vowels using include() for String -> "I am very good IT Developer"`);
var myString = "I am very good IT Developer"
var isLowercase = "aeiou";
var isUppercase = "AEIOU";
var vowelsCount = 0;
for (let index = 0; index < myString.length; index++) {
    var char = myString.charAt(index);
    var isLowerAvailable = isLowercase.includes(char);
    var isUpperAvailable = isUppercase.includes(char);
    if (isLowerAvailable || isUpperAvailable) {
        vowelsCount = vowelsCount +1;
        
    }
}
console.log(`Total Count is: ${vowelsCount}`);
console.log("----------------------------------------------------------------------------------------------------------------------------------");

console.log("Q.2. Write a function to get the sum of cube of numbers from 1 to 5");
var cube= 1;
var Addition = 0;
for (let index = 1; index <=5; index++) {
     cube = index*index*index;
     Addition = Addition*cube*index;   
}
console.log(`cube is : ${cube}`);

console.log("----------------------------------------------------------------------------------------------------------------------------------");
console.log(`Q.3. Write a given string: 1" Hard work always pays back"`);

function oddPositionedChars(givenString) {
    for (let index = 0; index < givenString.length; index++) {

        var char =givenString.charAt(index)
        if (index%2!=0 && char!=" ") {
            console.log(char);
        }
    }
    
 }
 oddPositionedChars("Hard work always pays back");
 
console.log("--------------------------------------------");

 console.log(`Q.3. Write a given string: 2 " Soon I will be Angular IT Champ"`);
 function OddPositionedChars(myString) {
    for (let index = 0; index < myString.length; index++) {
        var char = myString.charAt(index);
        if(index%2!=0 && char !=" ")
       console.log(char);
        
    }
    
 }

oddPositionedChars("Soon I will be Angular IT Champ");

console.log("-------------------------------------------------- Assign.2 --------------------------------------------------------------------------------");
console.log(`Q.1. Reverse string: 2 " Hard work always pays back"`);

function reverseString(myString) {
    return myString.split(``).reverse().join
   
       
    }
    reverseString("Hard work always pays back");