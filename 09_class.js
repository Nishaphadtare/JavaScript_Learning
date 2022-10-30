// let fN = 0;  sN = 1;  nextN = fN + sN;
// for (let index = 0; index < myNumber; index++) {
//    fN = sN;
//     sN = nextN
//     nextN = fN + sN;
//     console.log(nextN);
    
// }
// febo(5);

class Person{
    constructor(fullName, city, age, gender){
        this.fullName = fullName;
        this.city = city;
        this.age = age;
        this.gender= gender;  
    }

}
let sneha = new Person("sneha Phadtare", "mumbai", 25, "Female");
let nisha = new Person("nisha Kate", "Sangola", 24, "Female");
console.log(sneha);
console.log(nisha);
