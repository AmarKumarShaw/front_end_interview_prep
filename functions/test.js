// Functions in JavaScript 
// What is Function Expression 


// Lexical Scope 
//  (function(x){
//     return(function(y){
//         console.log(x)
//     })(2)
//  })(1)

//  Here it is the where log there from log x where we can do easily make it happen from the parent experession 


// Examples 
var num1 = 20,num2 = 3,name="AmarShaw";
function multiply() {
    return  num1 * num2;
}

const answer= multiply();

console.log(answer)

// A nested function example 
function getScore() {
    var num1 = 1,num2=3;
    function add() {
    return name + " scored " + (num1+num2)
    }
    return add()
}

const Nested = getScore()
console.log(Nested)


// Function Hoisting 

var x= 21;

function fun(){
    console.log(x);
    var x= 20;
}

fun()
// Explanation :  Here the value of x is the value of where we can get x in the localscope but it is not intiailised and that is why it is  gonna local scope but the initialisation do not happen 

// Params vs Arguments 
function square(num){ //This is called as Parameter
    console.log(num* num)
}
square(5)
//  This is called as Arguments

// Spread Operator and Rest operator 
function multiply(...nums){ //Here it is called Num operator
    console.log(nums[0]*nums[1])
   
}
var arr =[5,6];
multiply(...arr); // Here it is called Spread Operator

// What is callback function 
//Callbavk function is a function which is to be executed after another fucntion bhas been executed
document.addEventListener("click",function(params){

})


// Arrow Function 
const add = (firstNum,secondNum) =>{
    return firstNum = secondNum
}

// Difference between Regular Function vs Arrow Function
// 1 Syntax 
function sum (num){
    return num * num ;
}

const square = (num) => {
    return num * num ;
}

// 2 Implict  "return" keyword  
const squareArrow = (num) => num * num

// Constructors:

// Regular function: Can be used as constructors (with the new keyword).
// Arrow function: Cannot be used as constructors; trying to do so will throw an error.