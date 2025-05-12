// Exercise 1: Hoisting
//1
// console.log(a);
// var a = 10;
// console.log(a);
// //undefined first and then 10 as var a is declared.

// console.log(b);
// let b = 20;
// console.log(b);

//ReferenceError, as can't log b before it's has been declared or initialised.


//2

// var x=5;
// let y=10;
// const z=15;

// x=1; //x = 1, reassignable
// y=2; //y = 2, block scoped and reassignable
// z=3; //z = 3, block scoped and not reassignable, hence error dibe.


// function testScope() {
//     if (true) {
//         var a = "I am var";
//         let b = "I am let";
//         const c = "I am const";
//     }
//     console.log(a); // Works as var is function scoped and can be accessed outside the block
//     console.log(b); // Error as let is block scoped and can't be accessed outside the block
//     console.log(c); // Error as const is block scoped and can't be accessed outside the block
// }

// testScope();

// Exercise 2

//1
// function greet(){
//     console.log("hello");
// }

//2
// function greetagain(name){
//     console.log("Hola,"++"!");
// }


function abc() {
    return "test";
}

var abc = "hey  ";
console.log(abc); 

