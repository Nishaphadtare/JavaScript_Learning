console.log("----------- Question. 1 ------------");
var square = function (value) {
    console.log(value * value);

}
console.log("square of 5");
square(5);
console.log("square of 6");
square(6);
console.log("square of 25");
square(25);
console.log("square of 100");
square(100);

console.log("----------- Question. 2 ------------");
function division(value) {
    console.log(value / value);
}
console.log(typeof division);

console.log("----------- Question. 3 FE ------------");
var triangleArea = function (base, height) {
    var area = 1 / 2 * (base * height);
    console.log("Total Triangle Area =", area);
    console.log("-------------------------------------");
}
triangleArea(45, 34);

console.log("----------- Question. 4 FE ------------");
var rectangleArea = function (length, width) {
    var larea = length * width;
    console.log("Area Of rectangle land =", larea);
}
rectangleArea(499, 917);

console.log("----------- Question. 5 FE ------------");
var swap_values = function (arg1, arg2 , a) {
    console.log("------ Before swap ------");
    console.log(arg1, arg2);
    console.log("------ After swap ------");
    var temp = arg1;
    arg1 = arg2;
    arg2 = temp;
    console.log(arg1, arg2);
}
swap_values("Virat", "Anushka");
swap_values("Anushka", "Virat");
swap_values(1000, 2000);

console.log("----------- Question. 6 FE-String ------------");
var greet = "JavaScript the most popular language"
console.log(greet);
var count = greet.length;
console.log(count);

console.log("Index Of character :-", greet.indexOf ('S'));
console.log("Index Of string'lang' :-", greet.indexOf ('language'));
console.log("Last character using length :-", greet.charAt ("35"));
console.log("3rd last character using length :-", greet.charAt ('33'));




