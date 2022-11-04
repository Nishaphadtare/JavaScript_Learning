'use strict'
// myName = "Mohit"; // not allowed
// console.log(myName);

function display (myName, age){
    con
    sole.log(myName, age);
}
display("Anil", 24)
console.log("---------------------");
function display(name, ...myName) {
    console.log(name, myName);
    console.log(typeof myName);
}
display("Anil", 31, "city", true);

console.log("---------------------");

function divide(x, y){
    console.log(x/y);
}
divide(10, 5);

function divide(x, y=1){
    console.log(x/y);
}
divide(10);