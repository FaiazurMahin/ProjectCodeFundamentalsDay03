// // Exercise 1: Understanding var, let, and const
// // Task 1: Predict the Output (Hoisting)
// console.log(a);  //undefined
// var a = 10;
// console.log(a);   //10

// console.log(b);  //reference error
// let b = 20;
// console.log(b);  //20

// //Task 2: Variable Reassignment and Scope
// var x = 5;
// let y = 10;
// const z = 15;

// x = 50;   //Var can be reassigned and declared, so ALLOWED
// y = 100;  // Reassign kora jabe but redeclare kora jabena in same scope, so ALLOWED
// z = 150;  //Declaration er porer reassign kora jabena ar, so NOT ALLOWED

// function testScope() {
//     if (true) {
//         var m = "I am var";        //function scope
//         let n = "I am let";        //block scope
//         const o = "I am const";    //block scope
//     }

//    console.log(m);   //Will work as function scope
//    console.log(n);   //Wont work
//    console.log(o);   //Wont work
// }
// testScope();

//Exercise 2: Writing and Invoking Functions
//Task 1: Basic Function
function greet(){
    console.log("Hello, Javascript!");
}
greet();

//Task 2: Function with Parameters
function greetmore(name){
    console.log("Hello, "+name +"!");
}
greetmore("Mahin");

//Task 3: Function with Return Values
function mul(a,b){
    return a*b;
}
let result = mul(5,5);
console.log(result);

//Exercise 3: Running JavaScript in Browser vs. Node.js
console.log("This is javascript from nodejs lol");

//Exercise 4: Understanding Hoisting
//Task 1: Function Hoisting

sayHello();      //Function can be hoisted so it will show the result
function sayHello() {
    console.log("Hello from a hoisted function!");
}


// hello();             //Functional Expressions are not hoisted hence Reference error
// const hello = function() {
//     console.log("Hello from a function expression!");
// };