 var city = "Solapur";
 var pin = 413253;
 var is_married = true;


var value_type;
value_type = typeof "Solapur";
console.log("city :- Solapur    :  Type :-",  value_type);

var value_type;
value_type = typeof 413253;
console.log("pin :-  413253    :   Type :- ", value_type);

var value_type;
value_type = typeof true;
console.log("is_married :- true :  Type :- ", value_type);

console.log("------------------ Question.2 -----------------");

function firstName(name){
    console.log("Nisha Phadtare");
}

var value = firstName("Nisha Phadtare");
console.log("------------------ Question.3 ------------------");

function swap_values(arg1, arg2){
    console.log("---------- Before swap-------------");
    console.log(arg1, arg2);
    console.log("---------- After swap-------------");
    var temp = arg1;
    arg1 = arg2;
    arg2 = temp;
    console.log(arg1, arg2);
}
swap_values("Virat", "Anushka");
swap_values("Anushk", "Virat");
swap_values(1000, 2000);

console.log("---------- Addition function-------------");
function addition(arg1, arg2, arg3){
    console.log(arg1 + arg2 + arg3);
}
addition(10.23, 600, 40);