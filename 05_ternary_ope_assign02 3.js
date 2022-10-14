function functionName(name, Gender, age) {
    console.log(name, Gender, age);
    return name + Gender + age;
}
console.log("Name :- Billgates");
console.log("Gender :- Male");
console.log("age :- 21");

// var MarriageEligibilityCheck = function (age, Gender,boy_name) {
//     console.log(age >= 21);
//     var result = age || Gender || name 
//         ? `Hey ${boy_name} you are eligible for marriage` : "you are not eligible for marriage";  
//     console.log(result);
// }
// MarriageEligibilityCheck(25, "Male", "Billgates");
// console.log("----------------------------");
// MarriageEligibilityCheck(20, "Male", "Billgates");

 console.log("---------------------------------------------");
 function MaleMarriageEligibilityCheck(gender, age, boy_name)
 {
    if (gender=="Male" && age >=21) 
    {
      console.log(`Hey ${boy_name} you are eligible for marriage`);  
    }else{
        console.log(" you are not eligible for marriage ");
    }
 }
 MaleMarriageEligibilityCheck("Male", 25, "Billgates");
 console.log("-------------------------------");
 MaleMarriageEligibilityCheck("Male", 17, "Stew jobs");
    
console.log("------------------------------------------------");
function FemaleMarriageEligibility(gender, age, girl_name) 
{
    if(gender=="Female" && age >= 18)
    {
        console.log(`Hey ${girl_name} you are eligible for marriage`);
    }else{
        console.log("you are not eligible for marriage");
    }
}
FemaleMarriageEligibility("Female", 16, "Jenifer");
console.log("------------------------------------------------");
FemaleMarriageEligibility("Female", 27, "Malinda Gates");

console.log("================================== Assignment No. 2 =======================================");
 var rating = 45;
 var rating = 70;
 var rating = 67;
 var rating = 98;
 var IsEvenOrOdd = false;

 console.log("-----------number-45-------------");
 if(rating >=4, IsEvenOrOdd==true){
    console.log("you are good, Excellent");
 }
var myNumber = 45;
if(myNumber%2==0){
   console.log("EVEN");    
}else{
    console.log("Odd");
}

console.log("-----------number-70-------------");
var myNumber = 70;
if(myNumber%2==0){
    console.log("Even");
}else{
    console.log("Odd");
}
console.log("-----------number-67-------------");
var myNumber = 67;
if (myNumber%2==0) {
    console.log("EVEN");    
}else{
    console.log("Odd");
}
console.log("-----------number-98-------------");
var myNumber = 98;
if(myNumber%2==0){
    console.log("EVEN");
} else{
    console.log("Odd");
}

console.log("------------------ Q.2 --------------------");
var age = 18;
var age = 20;
var age = 17;
var age = 40;
eligibleForVotingOrNot=false;

console.log("--18--");
if (rating>= 4, eligibleForVotingOrNot==true){
console.log("you are eligible For Vote");
}

if (age>=18){
console.log("Eligible for voting");
}else{
    console.log("Not eligible for voting");
}
console.log("--20--");
if(age>=20){
    console.log("Eligible for voting");
}else{
    console.log("Not Eligible for voting");
}
console.log("--17--");

if(age<=17){
    console.log("Eligible for voting");
}else{
    console.log("Not eligible for voting");
}

console.log("--40--");
if(age>=40){
    console.log("Eligible for voting");
}else{
    console.log("Not eligible for voting");
}

console.log("---------------------------- 3.---------------------------");
var String = "JavaScript -ES6"
var str = string.length;

if (String.length>10) {
console.log("more Than 10 character ");    
}else{
    console.log("not more than character ");
}

