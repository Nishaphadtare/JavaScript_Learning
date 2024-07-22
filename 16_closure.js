var global_variable = 300;
function outer() {
    let outer_fun_variable = 100;
    let inner_fun = function() {
        let inner_fun_variable = 200;
        console.log(inner_fun_variable, outer_fun_variable, global_variable);
    }
    return inner_fun;
}
let returnValue = outer();
returnValue();



// var globalVariable = 500;
// function outer(){
//     let outerFun = 200;
//     let innerFun = function(){
//         let innerFun = 300;
//         console.log(innerFun, outerFun, globalVariable);
//     }
//     return innerFun;
// }
// let returnFunVal = outer();
// returnFunVal()