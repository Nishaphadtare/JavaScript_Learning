// var vowels = "Good Morning IT Champ";
//  vowels.includes(good Morning IT Champ);
// if (vowels.includes(a)) {
//     console.log("vowels");

// }

console.log("-----------------------------------------");
var givenString = " i love javaScript";
var totalChar = givenString.length;
for (let index = 0; index < givenString.length; index++) {
    var charAt = givenString.charAt(index);
    console.log(charAt);

}
console.log("---------------------------------------------");
var add = 0;
for (let index = 0; index <= 10; index++) {
    add = add + index;
}
console.log(`Addition is: ${add}`);

console.log("-------------------- 1 to 5 Addition  -------------------------");
var add = 1;
for (let index = 1; index <= 5; index++) {
    var square = add = add * index;
    if (add * index) {
        var square = index * index;
        console.log(`Addition is: ${square}`);
    }
}
console.log("-------------------- 1 to 5 Square  -------------------------");
console.log(`Addition is: ${add}`);


console.log("----------------------*1*----------------------------");

var givenString1 = "Hard work always pays back"

for (let index = 0; index < givenString1.length; index++) {
    var char = givenString1.charAt(index);
    if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u" || char == "A" || char == "E" || char == "I" || char == "O" || char == "U")
        console.log(char);
}

console.log("-----------------------*2*---------------------------");
var givenString2 = "Soon I will be Angular IT Champ"
for (let index = 0; index < givenString2.length; index++) {
    var char1 = givenString2.charAt(index)
    if (char1 == "a" || char1 == "e" || char1 == "i" || char1 == "o" || char1 == "u" || char1 == "A" || char1 == "E" || char1 == "I" || char1 == "O" || char1 == "U") {
        console.log(char1);

    }


}

console.log("-----------------------*Q.5- Even-str1*---------------------------");
var givenString = "Hard work always pays back";
var evenPositionedChars = givenString.length;
for (let index = 0; index < evenPositionedChars; index++) {
    if (index % 2 == 0) {
        var charAt = givenString.charAt(index);
        console.log(charAt);

    }
}
console.log("---------------------------------------------");
var givenString1 = "Soon I will be Angular IT Champ";
var evenPositionedChars = givenString1.length;
for (let index = 0; index < givenString1.length; index++) {
    if (index % 2 == 0) {
        var charAt = givenString1.charAt(index);
        console.log(charAt);
    }


}

console.log("-----------------------*Q.5.2- odd-str2*---------------------------");
var String = "Hard work always pays back";
var OddPositionedChars = String.length;
for (let index = 0; index < String.length; index++) {
    if (index % 2 !== 0) {
        var charAt = String.charAt(index);
    } else {
        console.log(charAt);
    }
}


console.log("-----------------------*Q.5- Odd*---------------------------");
var givenString = "Soon I will be Angular IT Champ";
var OddPositionedChars = givenString.length;
for (let index = 0; index < givenString.length; index++) {
    if (index % 2 !== 0) {
        var charAt = givenString.charAt(index)
    } else {
        console.log(charAt);
    }

}



console.log("======================================Assignment 2===================================================");
var String = "Hard work always pays back";
var length = String.length;
for (let index =length; index => 0; index--) {
    console.log(String.charAt(index));
    String.charAt(index)
    
}


