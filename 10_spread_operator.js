let person ={
    name: "Mohit",
    age : 31,
    city :"pune",
    address :{
        pin: 431202,
        street: "kanch pokail"
    }
}
console.log(person.name, person.age, person.city);
console.log(person);
// let student = {...person};
// console.log(...person);
let student = JSON.parse(JSON.stringify(person));

student.city = "mumbai";
person.age = 33;
console.log(student.city, person.city);
console.log(student.age, person.age);

student.address.street = "khav Galli";
console.log(student.address.street);
console.log(person.address.street);

console.table(person);
console.table(student);