class carVehicle {
    constructor (modelName, type, color, price){
        this.modelName = modelName;
        this.type = type;
        this.color = color;
        this.price = price;
    }
    details(){
        console.log(`details of carVehicle: ${modelName}, ${type}, ${color}, ${price}`);
    }
}
let object1 = new carVehicle("Honda Amaze", "Petrol", "White pearl",1100000);
let object2 = new carVehicle("Skoda Slavia", "Diezel", "Silver", 1800000);
let object3 = new carVehicle("Maruti Ciaz", "Diezel", "Blue",1200000);
let object4 = new carVehicle("Volkswagen Virts", "Petrol", "red",1200000);
let object5 = new carVehicle("Hyndai Varna", "Petrol", "Gray",1500000);

console.log(object1);
console.log(object2);
console.log(object3);
console.log(object4);
console.log(object5);

console.warn("------------------------------------------------------------------------------------------------------------------");
class college {
    constructor (Name, Location, State, Fees){
        this.Name = Name;
        this.Location = Location;
        this.State = State;
        this.Fees = Fees;
    }
    collegeDetails() {
        console.log(`Details of college: ${Name}, ${Location}, ${State}, ${Fees}`);
    }
}
// console.log("---------------------------------------------------------------------------------");
const obj1 = new college("Bhartiya Vidyapeeth", "pune", "Maharashtra",150000);
let obj2 = new college("Ahilyadevi Holkar", "Solspur", "India",100000);
let obj3 = new college("Yele University", "Chandrapur", "US",15296);
let obj4 = new college("Washington university in st.louis", "Missouri", "US",26921);
let obj5 = new college("Dartmouth college", "New Haven Connecticut", "US",32410);
console.log(obj1);
console.log(obj2);
console.log(obj3);
console.log(obj4);
console.log(obj5);

function traverseObject(object) {
    for (const key in object) {
        if (Object.hasOwnProperty.call(object, key)) {
            const element = object[key];
            console.log(`${key} ${element}`);
            
        }
    }
}

traverseObject(obj1);
console.log("---------------------------------------------------------------------------------");

traverseObject(obj2);
console.log("---------------------------------------------------------------------------------");

traverseObject(obj3);
console.log("---------------------------------------------------------------------------------");

traverseObject(obj4);
console.log("---------------------------------------------------------------------------------");

traverseObject(obj5);
console.log("---------------------------------------------------------------------------------");
console.log(obj1 instanceof college);