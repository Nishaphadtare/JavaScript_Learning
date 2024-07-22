var test = function(arg1, arg2, ){
    console.log("Function expression", arg1);
    return "FE";
}
var returnValue = test(10, 20);
console.log(returnValue);

// var veriable_name = 10;
// console.log(veriable_name);


var test1 = function(num1, num2){
    console.log('function expression', num1);
    return 'Function E'
}
var returnValue = test1(100, 200);
console.log(returnValue);

var test2 = function(test1, test2){
    console.log('FE', test2);
    return 10;
}

var value = test2(12, 13);
console.log(value);