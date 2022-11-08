class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
        this.emp_id = emp_id;
        this. emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}

const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali= new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");
console.log(emp_anil);
console.log(emp_radha);
console.log(emp_rishi);
console.log(emp_sonali);
console.log(emp_monika);
console.log(emp_viny);
console.log(emp_mahi);
console.log("1.-----------------------Find TCS employee details and log only Name and Company on console------------------------------");
let map  = new Map()
map.set(`Employee name: ${"Anil"}     Company name: ${"TCS"}`);
map.set(`Employee name: ${"Rishi"}    Company name: ${"TCS"}`);
map.set(`Employee name: ${"Vinayak"}  Company name: ${"TCS"}`);
map.forEach((key, value) =>{
   console.log(key,value); 
})



console.log("2.-----------------------Find the employee with salary greater than or equal 50000 (log all employee details on console) ------------------------------");
// let salary =50000;
map.forEach((currentValue, index, array) =>{
  
    console.log(currentValue, index, array);     
console.log(`Employee ID: ${22} Employee name: ${"Anil"}    Department: ${"IT"}   Slary: ${50000} Company name: ${"TCS"}`);
console.log(`Employee ID: ${33} Employee name: ${"Radha"}   Department: ${"HR"}   Slary: ${74000} Company name: ${"Wipro"}`);
console.log(`Employee ID: ${88} Employee name: ${"Vinayak"} Department: ${"IT"}   Slary: ${75000} Company name: ${"TCS"}`);
console.log(`Employee ID: ${99} Employee name: ${"Mahesh"}  Department: ${"HR"}   Slary: ${85000} Company name: ${"Infy"}`);

   
});


// const arrayNumbers = [20, 25, 31, 33, 20, 10, 52, 60, - 30, - 20];
// arrayNumbers.forEach((currentValue, Index) => {
//     if (currentValue<0) {
//         console.log(currentValue,Index);  
//     }
//     });