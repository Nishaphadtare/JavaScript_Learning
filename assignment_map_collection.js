class Employee{
    constructor(emp_id,emp_name,emp_dept,emp_salary,emp_company){
this.emp_id=emp_id;
this.emp_name=emp_name;
this.emp_dept=emp_dept;
this.emp_salary=emp_salary;
this.emp_company=emp_company;

    }
}
const emp_anil=new Employee(22,"Anil","IT",50000,"TCS");
const emp_radha=new Employee(33,"Radha","HR",74000,"Wipro");
const emp_rishi=new Employee(55,"Rishi","Finance",47000,"TCS");
const emp_sonali=new Employee(66,"Sonali","Finance",45000,"Infy");
const emp_monika=new Employee(77,"Monika","IT",40000,"Wipro");
const emp_viny=new Employee(88,"Vinayak","IT",75000,"TCS");
const emp_mahi=new Employee(99,"Mahesh","HR",85000,"Infy");
let empArray=[emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];

console.log("-------------------- -Create a Map Collection with name 'map_employees' and traverse using forEach() loop -----------------------");
let map_employees=new Map();
map_employees.set(22, emp_anil);
map_employees.set(33, emp_radha);
map_employees.set(55, emp_rishi);
map_employees.set(66, emp_sonali);
map_employees.set(77, emp_monika);
map_employees.set(88, emp_viny);
map_employees.set(99, emp_mahi);
map_employees.forEach((value)=>{
console.log(`${value.emp_id} ===> Name:${value.emp_name}        Dept:${value.emp_dept}      Company:${value.emp_company}        Salary:${value.emp_salary}`);
});



console.log("****************************************** Assignment MAP() *****************************************************");
const array_numbers = [ 20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19 ];
console.log("1.------------------------ Add 10 into each element and log new array result on console using map()--------------------------");
console.log(`Original array:${array_numbers}`);

let newArrayAdd5=array_numbers.map((element,index)=>{
return element+10;
});
console.log(`After adding 10 in Array: ${newArrayAdd5}`);
console.log("2.------------------------ Square the each array element and log on console1.------------------------ ");
console.log(`Original array: ${array_numbers}`);

let newSquare=array_numbers.map((element,index)=>{
return element*element;
});
console.log(`Square of element is: ${newSquare}`);
console.log("3.------------------------ Add the index value into its corresponding each array element and log new array result on console1.------------------------ ");
console.log(`Original array:${array_numbers}`);

let array=array_numbers.map((element,index)=>{
return element+index;
});
console.log(`Addition of index and array is:${array}`);