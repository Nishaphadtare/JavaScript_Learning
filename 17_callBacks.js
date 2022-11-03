function do_assignment(callback){
    console.log("I am doing assignment and it is done now...");
    callback();
}
function copy_assignment(){
    console.log("Hay bro.. Thank you. Let me copy");
}

do_assignment(copy_assignment);


function display() {
    console.log("display function");
}

setInterval(display, 4000);

setInterval(display, 2000);

