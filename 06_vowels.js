// var givenString = "i love JavaScript";
// var totalChar = givenString.length;
// for (let index = 0; index < totalChar ; index++) {
//     var charAt = givenString.char(index);
//     console.log(charAt);
    
// }

var givenString = "I love JavaScript";
var totalChar = givenString.length;
for (let index = 0; index <totalChar; index++) {
    if (index%2==0) {
        var charAt = givenString.charAt(index);
        console.log(charAt); 
    }  
} 

// WAP to just log the vowels from the given string ; a e i o u, A E  I O U 
var givenString = "a I love JavaScript";
console.log("================= Just log Vowels ======================");
for (let index = 0; index < givenString.length; index++) {
    var char = givenString.charAt(index); // a
    if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u"
        || char == "A" || char == "E" || char == "I" || char == "O" || char == "U") {
        console.log(char);
    }
}

// WAP to just log the vowels from the given string ; a e i o u, A E  I O U 
var givenString = "a I love JavaScript";
console.log("================= Just log Vowels ======================");
 var strLowerCase = givenString.toLowerCase();// "a i love javascript"
 for (let index = 0; index < givenString.length; index++) {
    var char = strLowerCase.charAt(index);
    if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {
        console.log(char);
    }
}

var add=0;
for (let index = 0; index <=5; index++) {
    add = add+ index;  
    
}
console.log(`Addition is : ${add}`);

var myName = "Nisha Phadtare";
var lengthStr = myName.length;
for (let index = lengthStr; index => 0; index--) {
    console.log(myName.charAt(index));
    myName.charAt(index);

}