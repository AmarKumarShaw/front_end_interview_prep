// var vs let vs const 
// Scope

// function test () {
//     var a = "Hello"
//     let b = "Bye"
// if (true){
//     let a  = "Hi";
//     let b = "Goodbye";
//     console.log(a)
//     // console.log(b)
// }
// console.log(a)
// }

// test()

// Declaration 
// Error in Declaration 
// const a;
// const a;
// or
// let a;
// let a;
// Are okay in declaration 
// var a;
// var a;

// Declaration without intialisation 
// var a; -> Right
// let a; -> Right 
// const a; -> Wrong 

// Re-initilisation 
//  const a = 5; This is wrong
//  a =5;
//  console.log(a)


// Hoisting 

// For var the variables are hoisted in the global scope 
// For let and const they are hoisted in the temporal dead zones 
// What is Teamporal Dead Zones 
// Temporal Dead Zones are the difference between the time of declaration and initialisation of a variable
