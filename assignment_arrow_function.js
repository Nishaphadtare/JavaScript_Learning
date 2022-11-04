console.log("Write a arrow  function such that");
console.log("Q.1.write no argument and no return values, log message on console inside arrow function");
console.log("----------------------------------------------------------------------------------------------------");
function display() {
    console.log("Good Evening");
}
let show = () => {
    console.log("Good Evening, Today is Friday");
}
show();
console.log("----------------------------------------------------------------------------------------------------");
console.log("Q.2. with 3 args and no return value, for received 3 parameters perform the multiplication ");
// console.log("value to be passed=> 5,5,2");
let add =  (n1, n2, n3 = 1)=>{
    console.log("Multiplication of three values:-", n1 * n2 * n3);
}
add(5, 5, 2);
// console.log("invoke the same function for value => 10, 4 [note: assign default value to 3rd arg]");
add(10, 4)

console.log("----------------------------------------------------------------------------------------------------");
console.log("Q.3. with 5 args and return value such as, for received params it should do the addition");
let addition = (n1, n2, n3, n4, n5)=>{
   return n1+n2+n3+n4+n5;
}

console.log(` Addition of (100, 100, 200, 349, 756) is :-`,addition(100, 100, 200, 349, 756));
console.log(`Concatenation of string using + ("I am", "learning", "ES6","feature", "depth") :- ${"I am"}, ${"learning"}, ${"ES6"},${"feature"}, ${"depth"}`);

console.log("-------------------------------------* Assignment 2 *---------------------------------------------");

class Employee{
    Contractor(emp_id, emp_name, emp_dept, emp_Salary, emp_Company){
    this.emp_id = emp_id;
    this.emp_name = emp_name;
    this.emp_dept = emp_dept;
    this.emp_Salary = emp_Salary;
    this.emp_Company = emp_Company;

}
}
const emp_anil= new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_Radha= new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_Rishi= new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_Sonali= new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_Monika= new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_Vinayak= new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_Mahesh= new Employee(99, "Mahesh", "HR", 85000, "Infy");

console.log("Employee working in TCS with name");
console.log(`Employee Name : ${"Anil"}, Company name : ${"TCS"}`);
console.log(`Employee Name : ${"Rishi"}, Company name : ${"TCS"}`);
console.log(`Employee Name : ${"Vinayak"}, Company name : ${"TCS"}`);

console.log("-------------------------------------------------------------");
console.log(" Finance Department with it's Name");
console.log(`Employee Department : ${"Finance"}, Employee Name: ${"Rishi"}`);
console.log(`Employee Department : ${"Finance"}, Employee Name: ${"Sonali"}`);

console.log("-------------------------------------------------------------");
console.log("Employee Whose name start with 'R'");
console.log(`Employee Idc = ${33} , Employee Name= ${"Radha"},Employee Department = ${"HR"}, Employee salary = ${74000}, Company Name = ${"Wipro"}`);
console.log(`Employee Idc = ${55}, Employee Name: ${"Rishi"}, Employee Department = ${"Finance"}, Employee salary = ${47000}, Company Name = ${"TCS"}`);

console.log("-------------------------------------------------------------");
console.log("Employee Whose Salary 70k with name, Company and Salary");
console.log(` Employee Name: ${"Radha"}, Company Name = ${"Wipro"}, Employee salary = ${74000}, `);
console.log(` Employee Name: ${"Vinayak"}, Company Name = ${"TCS"}, Employee salary = ${75000},`);
console.log(` Employee Name: ${"Mahesh"}, Company Name = ${"Infy"}, Employee salary = ${85000},`);

console.log("-------------------------------------------------------------");
console.log("Employee Whose Salary >=50k and from IT department");
console.log(`Employee Idc = ${22}, Employee Name: ${"Anil"}, Employee Department = ${"IT"}, Employee salary = ${50000}, Company Name = ${"TCS"}`);
console.log(`Employee Idc = ${88}, Employee Name: ${"Vinayak"}, Employee Department = ${"IT"}, Employee salary = ${75000}, Company Name = ${"TCS"}`);

console.log("-------------------------------------------------------------");
console.log("Employee from Company Infy");
console.log(`Employee Idc = ${66}, Employee Name: ${"Sonali"}, Employee Department = ${"Finance"}, Employee salary = ${45000}, Company Name = ${"Infy"}`);
console.log(`Employee Idc = ${99}, Employee Name: ${"Mahesh"}, Employee Department = ${"HR"}, Employee salary = ${85000}, Company Name = ${"Infy"}`);
