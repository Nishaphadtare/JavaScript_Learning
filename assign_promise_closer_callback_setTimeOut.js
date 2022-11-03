//closer
var global_variable = 500;
function outer_fun(){
    let local_variable = 700;
    let inner_fun = function(){
        var own_variable = 900;
        console.log(`global_variable:-`, global_variable);
        console.log(`local_variable:-`, local_variable);
        console.log(`own_variable:-`, own_variable);
    }
    return inner_fun;
}
var inner = outer_fun();
inner();
console.log("--------------------------------------------------------------------------------------------------------");
    
//callback
function do_homework(callback){
    console.log("Doing homework... Solving the all problems");
    console.log("Finally, I Solved the problems");
    callback();
}
function copy_homework(){
    console.log("copy homework from my friend notes ");
}
do_homework(copy_homework);

console.log("--------------------------------------------------------------------------------------------------------");
//callback
function do_homework(callback){
    console.log("Doing homework... Solving the all problems");
    console.log("Finally, I Solved the ");
    callback();
    var complete_homework = function(){
        console.log("Homework is completed.... Thank you friends... ");
    }
    return complete_homework;
}
function copy_homework (){
    console.log("copy homework from my friend notes ");
}

var homework_done = do_homework(copy_homework);
homework_done();

console.log("--------------------------------------------------------------------------------------------------------");
// promise
let recordings_share_Status = true;
const promise_to_share_recordings = new Promise(function (resolve, reject){
    if (recordings_share_Status) {
        resolve("Sir.. shared recordings and Notes!");
    }else{
        reject("Opps! Sir did not shared recordings and notes ")
    }
});
    promise_to_share_recordings.then(function (on_success){
        console.log(on_success);
}).catch(function (on_rejection){
    console.log(on_rejection);
}).finally(function(){
    console.log("Finally.. Somehow you will have session Recordings");
});