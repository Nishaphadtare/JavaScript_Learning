console.log("create the object -> 'bank sbi' using literals ith at least 4 properties");
const bank_sbi = {
    bank_name: "sbi bank of india",
    city: "Solapur",
    pin: 413253,
    street: "Mohol",
    location: "near by bus stand",
}

let bank_sbiClone = Object.assign({}, bank_sbi);
bank_sbiClone.bank_name = "sbi bank of india";
console.log(bank_sbiClone);
console.table(bank_sbi);

console.log("---------------------------------------------------------------------------------------");
console.log("create the object -> 'bank location' using literals with properties: street, City, pin_code");
const bank_location = {
    bank_name: "Bank Of India",
    street: "Kurul",
    city: "Solapur",
    pin_code: 413253,
    location: "near by Solapur road",
}

let bank_locationClone = Object.assign({}, bank_location);
bank_locationClone.bank_name = "Bank Of India";
console.log(bank_locationClone);
console.table(bank_location);


console.log("---------------------------------------------------------------------------------------");
console.log("clone the step 1(bank_sbi) and step 2(Bank_location object using");
console.log("1 object.assign()");
let bankSbiClone = Object.assign({}, bank_sbi);
bankSbiClone.bank_name = "sbi bank of india";
console.log(bankSbiClone);
console.log(bank_sbi);

console.log("---------------------------------------------------------------------------------------");
console.log("2 spread operator");
console.log(bank_sbi.bank_name, bank_sbi.city, bank_sbi.pin, bank_sbi.street, bank_sbi.location);
console.log(bank_sbi);
let sbi = {...bank_sbi};

console.log("-------------------------------------* Assignment 2 *--------------------------------------------");
console.log("create the class `Bank` with all possible data members in such as way that all properties should be initialized using constructor");

class Bank {
    constructor(bank_name, location, account_no, IFSC, interest_rate) {
        this.bank_name = bank_name;
        this.location = location;
        this.account_no = account_no;
        this.IFSC = IFSC;
        this.interest_rate = interest_rate;
    }
    details() {
        console.log(`details of bank: ${bank_name} ${location} ${account_no} ${IFSC} ${interest_rate}`);
    }
}

let object1 = new Bank("Axis Bank", "Pune", 2256, "Axis36252577", '9%');
let object2 = new Bank("Kotak Bank", "Solapur", "Axis36252577", '10%');
let object3 = new Bank("SBI Bank", "Mohol", 7897, "Axis36252577", '11%');
let object4 = new Bank("ICICI Bank", "Mumbai", 9797, "ICI344436", "8%");
let object5 = new Bank("HDFC Bank", "Kolhapur", 8154, "HD572667", "8%");
let object6 = new Bank("Panjab Bank", "Nashik", 3816, "PUN227852", "10%");

console.log(object1);
console.log(object2);
console.log(object3);
console.log(object4);
console.log(object5);
console.log(object6);

// console.log("------------------------------------------------------------------------------------");
// let BankClone = Object.assign({},bank_name,  {}, bank_location)
// BankClone.bank_name = "Axis Bank", "Kotak Bank", "SBI Bank", "ICICI Bank", "ICICI Bank","HDFC Bank", "Panjab Bank"
// console.log(BankClone);
// console.log(bank_name);

console.log("------------------------------------------------------------------------------------");
console.log("D.From the array(stepA) find the object which has name -> Kotak bank using for of loop");
const kotakBank = ["Kotak Bank", "Solapur", "Axis36252577", '10%'];
for (const element of kotakBank) {
    console.log(element);
}


// console.log("------------------------------------------------------------------------------------");
// console.log("D.log the details on console using for of loop");
// const details =[`details of bank: ${bank_name} ${location} ${account_no} ${IFSC} ${interest_rate}`];
// for (const element of details) {
//     console.log(element);
// }