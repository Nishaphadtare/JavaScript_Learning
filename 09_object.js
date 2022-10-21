let variable_name = "";
let person = {
    fullName : "Nisha Phadtare" ,
    age : 24,
    IsMarried: true,
     address: {
        street: "As CLUB",
        pin_code: 123456,
        city: "Pune",
        state: "MH"
    },
   eat:function(){
    console.log("I am Vegetarian");
   },
   details: function(){
    console.log(this.fullName);
   },
   details: function(){
    let personDetails = `Details are : ${this.fullName} ${this.age} ${this.address.city} `;
    return personDetails;
   }

}


// console.log([person].entities(person));
console.log([person].keys(person));
console.log([person].values(person));

console.log("======================================");
let pDetails = person.details();
console.log(person.details());
console.log(typeof person);
console.log(person.address);
console.log(person.address.street);
person.address.landmark = "Near Main Road";

person.eat();




console.log(person);
person.pinCode = 413253;
person.profession = "Angular Developer";
person.fullName ="Nisha Kakasaheb phadtare";
delete person.age

console.table(person);






console.log(person.city);
console.log(person["age"]);

let personFullName =person.fullName;
console.log(personFullName);
console.log(person.fullName);

