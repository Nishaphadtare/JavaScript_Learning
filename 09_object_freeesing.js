const person = {
    name : "Mohit",
    rollNo : 1234
}
Object.freeze(person)

person.name = "Mohit Sharma";
person.street = "AS CLUB";
console.log(person);

// console.log("================================");
// const arrayNumbers = [2,4, 5, 6, 7];
// Object.freeze(arrayNumbers); // Immutable: we can not change the array values after creating or defining
// arrayNumbers.push(99);
// console.log(arrayNumbers); 

console.log("================================");
const student = {
    name: "Mohit",
    rollNo: 1234
}
const address = {
    city: "pune",
    street : "AS CLUB"
}

let studentClone = Object.assign({},student);
studentClone.name = "Mohit Sharma";
console.log(studentClone);
console.log(student);

// let mergedObject = Object.assign({}, student, address);
// console.log(mergedObject);