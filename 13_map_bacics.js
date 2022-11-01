let map = new Map();
map.set(22, "Sachin");
map.set(11, "Dravid");
map.set(33, "gaungrlly");
map.set(77, "Sachin");

console.log("------Adding duplicate key------");
map.set(11, "Gautam");
console.log(map);

console.log("------Adding duplicate key and value------");
map.set(33, 'gaungrlly');

console.log("------retrieving value------");
let value = map.get(33);
console.log(value);
console.log(map.get(99));

console.log("------Deleting record------");
map.delete(11);
console.log(map);

console.log("------Is key available------");
map.has(77);

let setOfKeys = map.keys();
console.log(setOfKeys);
for (const key of setOfKeys) {
    console.log(map.get(key));
}



class person{
    constructor(fullName, city, age, gender){
        this.fullName = fullName;
        this.rollNo = rollNo
        this.city = city;
        this.age = age; 
        this.gender = gender;
    }
    details(){
        console.log(`person details: ${this.fullName} ${this.rollNo} ${this.city} ${this.age} ${this.gender}`);
    }
}


let personAnil = new person (22, "Anil Mohite", "pune", 31, "Male");
let personAnita = new person (33, "Anita Golate", "Mumbai", 22, "Female");
let personBill = new person (44, "Billgates", "USA", 67, "Male");

let mapOfPerson = new Map();
mapOfPerson.set(22, personAnil);
mapOfPerson.set(22, personAnita);
mapOfPerson.set(22, personBill);

let mapKeys = mapOfPerson.keys();
for (const key of mapKeys) {
    let personObject = mapOfPerson.get(key);
    personObject.delete();
}