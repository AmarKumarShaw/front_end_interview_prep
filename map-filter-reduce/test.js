// Map, filter and Reduce
// What is Map
// So Map takes an array perform some action and return a new array
// const nums = [1, 2, 3, 4];

// const multiply = nums.map((num,i,arr)=> {
//     return num * 3
// })

// console.log(multiply)

// Filter
// Filter take an array do some modification and return a new array
// const  moreThanTwo = nums.filter((num)=>{
//     return num > 2
// })

// console.log(moreThanTwo)

// Reduce
// Reduce take take two parameter previous value of an array and the next calue of an array and perform some action and return a new array

// const sum = nums.reduce((acc, curr, i, arr) => {
//   return acc + curr;
// }, 0);

// console.log(sum);


// What is Polyfills 

// Polyfills gives old javascript browser the modern features 
// Array.prototype.MyMap = function(cb){
//     let temp =[]
//     for (let i = 0 ; i < this.length ; i++ ){
//         temp.push(cb(this[i],i,this));
//     }
//     return temp;
// }
// const nums = [1, 2, 3, 4];
// const multiplyTwo = nums.MyMap((num,i,arr) => {
//     return num * 2
// })
// console.log(multiplyTwo)






