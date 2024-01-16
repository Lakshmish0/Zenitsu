document.write("<h1>Hello World<h1>");
console.log("Hello World");
let y =10;
console.log(typeof(y));
let string = "hello"
let char ='s'
console.log(typeof(string));
console.log(typeof(char));
let arr = [1,2,3,4]
console.log(typeof(arr));
console.log(arr.length);
const x = 1;
let b = null ;
console.log(b)
sam(9,9)
let firstName = "Leo";
let lastName = "Das";
let fullName = firstName + " " + lastName;
console.log(fullName)
let s = "Hava hava he hava kushubu bata de"
let araara = s.split(" ")
console.log(araara)
let a = [7,3,3]
let h = a.shift(1)
console.log(h)
let c = [6,1,9]
let m = [...a,...c]
console.log(m)
//comment
/*
multiline
comment
*/
sam(4,6)
function sam(x,y){
    let sum = x+y
    console.log("Sum = " + sum)
}
sam(3,3)
let d = function(x,y){
    let p = x*y
    console.log("Product = "+p)
}
d(3,3)

let arrowFuction = (x,y) => {
    let s = x-y;
    console.log("Subtraction = "+s )  
}
arrowFuction(6,5)

//Calling multiple functions

let of = (o) => {
    let f=10
    If(f)
}
let If = (i)=>{
    console.log(i)
}
of(10)

function mu(fa){
    return function(n){
        return n * fa
    }
}

let dou = mu(4)
console.log(dou(5))

let per = {
    name : "San",
    age: 23,
    wor:"Pro",
    ad: function(x){
        console.log(this.age+x)
    }
}

per.ad(2)