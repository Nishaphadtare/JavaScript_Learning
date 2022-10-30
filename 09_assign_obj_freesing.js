console.log("create the object -> 'bank sbi' using literals ith at least 4 properties");
const bank_sbi = {
bank_name: "sbi bank of india",
city : "Solapur",
pin : 413253,
street: "Mohol",
location : "near by bus stand",
}

let bank_sbiClone = Object.assign({}, bank_sbi);
bank_sbiClone.bank_name = "sbi bank of india";
console.log(bank_sbiClone);
console.table(bank_sbi);

console.log("---------------------------------------------------------------------------------------");
console.log("create the object -> 'bank location' using literals with properties: street, City, pin_code");
const bank_location = {
    bank_name : "Bank Of India",
    street : "Kurul",
    city : "Solapur",
    pin_code :413253,
   location : "near by Solapur road",
}

let bank_locationClone = Object.assign({}, bank_location);
bank_locationClone.bank_name = "Bank Of India";
console.log(bank_locationClone);
console.table(bank_location);


console.log("---------------------------------------------------------------------------------------");
console.log("clone the step 1(bank_sbi) and step 2(Bank_location object using");
let bankSbiClone = Object.assign({}, bank_sbi);
bankSbiClone.bank_name = "sbi bank of india";
console.log(bankSbiClone);
console.log(bank_sbi);


