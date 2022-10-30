// const snehaPerson ={
//     fullName:"Nisha Phadtare",
//     age: 24,
//     "isMarried": true
// }
// let isAvailable = "fullName" in snehaPerson;
// console.log(isAvailable);

// console.log("city" in snehaPerson);

const snehaPerson={
    fullName: "Nisha Phadtare",
    age : 24,
    "isMarried" : true
}
for (const key in snehaPerson) {
    if (Object.hasOwnProperty.call(snehaPerson, key)) {
        const element = snehaPerson[key];
        console.log(element);
    }
}
