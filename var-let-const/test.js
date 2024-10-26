// var vs let vs const 
// Scope

function test () {
    var a = "Hello"
    let b = "Bye"
if (true){
    let a  = "Hi";
    let b = "Goodbye";
    console.log(a)
    console.log(b)
}
}

test()