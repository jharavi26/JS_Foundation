// DataType :- Number , String , Boolean , null, undefined , symbol, Bigint

//Var : Function Scope 
//let & const : Block Scope

//Falsy Value : 0, false, "" , null , undefined , NaN , -0

console.log([] == false);    // Empty array Convery into "" which is also false Value.

//Type coercion in JavaScript is the process of converting a value from one type to another automatically (implicit coercion) or manually (explicit coercion).

// Explicit Conversion 

String(123);                                // convert number into string "123"
Number("456");                              // convert string into Number 456
Boolean(0);                                // convert number into Boolean false
parseInt("42")                             // 42
  

//Implicit Conversion :- Automatically done by JavaScript Engine.

console.log(0 == false);                                      // true  (false → 0)
console.log("0" == false);                                    // true  ("0" → 0, false → 0)
console.log(null == undefined);                               // true (special case in JS spec)
console.log([] == false);                                     // true  ([] → "" → 0, false → 0)
console.log([] == 0);                                         // true  ([] → "" → 0)
console.log([1] == 1);                                        // true  ([1] → "1" → 1)
console.log([1,2] == "1,2");                                  // true  (toString of array)
console.log({} == "[object Object]");                         // true (toString of object)
console.log(NaN == NaN);                                       // false (NaN is never equal to itself)


console.log(5 + +"3");            // 5=3 = 8
console.log(5 + -"2");            // 5-2 = 3

console.log({} == false);            // false
console.log([] == false);            // True

console.log(null === undefined)      //False

console.log(undefined == NaN);         //False

console.log(false == NaN)             //False


//Pre-Increment :- Increments the value first, then returns the updated value.
//Post-Increment :- Returns the current value first, then increments it.

let x = 1;
console.log(x++ + x++ + x++ - x++ + x); //7 (1,2,3-4+5)


console.log("5" - -"2" + "3")   // 73


// Function : A block of reusable code designed to perform a specific task.

// 1. Function Declaration : Way to define Function.
// 2. Calling Function : execute the call inside that function .
// 3.Function Expression : define a function as value & assign it to a variable. 
// 4.Annoymous Function : Without Name & used as argument or callback.
// 5. Immediately Invoked Function : execute as soon as they are defined.


// Parameters vs Arguments
//Parameters: Variables listed in function definition
//Arguments: Values passed when calling the function

// We can pass functions inside a function as arguments and /or return a function(HOF). These ability are altogether known as First class function. It is programming concept available in some other languages too.

function Sum(a, b){                                    // a & b function Parameters
  return a+b;
}
console.log(Sum(2,3));                                 // 2 & 3 function Arguments

//Function Expression 
const add = function (a, b){
  return a+b;
}
console.log(add(31,3));

//IEFF Function 
(function() {
  console.log("IIFE executed!");
})();


// Arrow function 

const mul = (r,s)=>{
  return r * s;
}
console.log(mul(31, 26));

const divide = (c,d)=>c/d;                      // If function body is a single return statement, you can omit {} and return.

console.log(divide(6,2));


const Greet = ()=>"Hello Ravi";
console.log(Greet());

const cube = (n)=>n*n*n;               // Way to write in a single statement .
console.log(cube(5));

//Callback Function :- A callback function is simply a function that is passed as an argument to another function and executed after some operation has been completed.

setTimeout(function (){
  console.log("Hi")
},5000)

setTimeout(()=>{
  console.log("Hello")
},3000)


function Gree(name , cb){
  cb();                                         // Callback Function
  console.log("Hii " + name);
}

function wish(){
  console.log("Callback Function Execution")
}

Gree("Art", wish);

// Higher-Order Function : 
// Takes another function as an argument (callback).
// Returns a function as its result.

//Return as Function
function Multiplier(factor){
  return function (s){
    return factor * s;
  }
}

const double = Multiplier(2);
const triple = Multiplier(3);

console.log(double(6));
console.log(triple(6));

//Date & Time Object & Their Method

// typeof "John Doe" // Returns "string"
// typeof 3.14 // Returns "number"
// typeof true // Returns "boolean"
// typeof 234567890123456789012345678901234567890n // Returns bigint
// typeof undefined // Returns "undefined"
// typeof null // Returns "object" (kind of a bug in JavaScript)
// typeof Symbol('symbol') // Returns Symbol

const now = new Date()
console.log(now)                   // 2024-11-14T10:00:59.906Z
console.log(now.getFullYear())         //2024
console.log(now.getMonth())        //10
console.log(now.getDay())          //4
console.log(now.getHours());
console.log(now.getSeconds());

let birth = 1998
console.log(typeof(birth));

ismarried=true;
console.log(typeof(ismarried));


let height=20 , base=10;
area = 0.5*height*base;
console.log(area);

hour = 40;
cost =28;
earning = hour*cost;
console.log(earning);

firstname ="Ravikumar";
lastname = "Jha";
if(firstname.length>lastname.length)
{
    console.log(`Your name is ${firstname} greater than your lastname is ${lastname}`)
}
else 
{
    console.log(`Your name is ${firstname} lesser than your lastname is ${lastname}`)
}


