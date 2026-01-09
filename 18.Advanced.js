// a ?? b → returns a unless a is null or undefined. If a is null or undefined, returns b.

//export default for single export
//export for multiple named exports

console.log(false ?? 26);
console.log(null ?? 26);
console.log(undefined ?? 26);
console.log("Ravi" ?? 26);

// a || b → returns a unless a is falsy (false, 0, '', NaN, null, undefined). If a is falsy, returns b.

console.log(false || 26);
console.log(null || 26);
console.log(undefined || 26);
console.log("Ravi" || 26);

//Template Literals
let user = "ART";
console.log(`${user}`)

//Destructing Assignment 

const [r, s, t = 31] = [11,22];
console.log(r,s,t);

const{name , age} = {name : "Ravi", age : 26};
console.log(name);

//Spread Operator : expands arrays/objects

const arr = [21,31];
const arr2 = [...arr, 51];
console.log(arr2);

//Rest Operator : collects Remaining Elements

function result (a, ...num){
  return num.reduce((acc, num)=>acc+num, a)
}
console.log(result(1,2,3,4,5));

// Debouncing :- It ensures that a function is only called once after a specified period of time has passed since the last time it was invoked. 
//If a new event is triggered before the delay ends, the previous call is canceled, and the timer restarts.

//Debounce 
function debounce(func , delay){
  let timer ;
  return function(...args){
  const context = this;
  clearTimeout(timer);

  timer = setTimeout(() =>func.apply(context, args) , delay);
}
}

function art (){
  console.log("Art")
}

const debounceLog = debounce(art, 1000)

debounceLog();
debounceLog();
debounceLog();


  // Throttling in JavaScript is a technique used to improve performance by controlling how often a function is executed over time. It ensures that a function is only executed at most once within a specified time interval, even if it is called multiple times during that interval.


  // The execution context is created in two phases.

// Memory creation phase - JS will allocate memory to variables and functions.
// Code execution phase

var n = 2;
function square(num) {
  var ans = num * num;
  return ans;
}
var square2 = square(n);
var square4 = square(4);

console.log(square2);
console.log(square4);


// Hoisting : Hoisting is a concept which enables us to extract values of variables and functions even before initialising/assigning value without getting error and this is happening due to the 1st phase (memory creation phase) of the Execution Context.

// console.log(r);                    // Reference Error 
// let r = 24;

console.log(s);                    // undefined
var s = 26;     


greet();                                                  // Function Hoisting with Default Parameter
function greet(Name = "Ravi"){
  console.log("Hi, " +  Name)
}

//undefined is when memory is allocated for the variable, but no value is assigned yet.
// If an object/variable is not even declared/found in memory allocation phase, and tried to access it then it is Not defined
// Not Defined !== Undefined

// Lexical Environment = local memory + lexical env of its parent. Hence, Lexical Environement is the local memory along with the lexical environment of its parent
// Lexical: In hierarchy, In order

// Temporal Dead Zone : Time since when the let variable was hoisted until it is initialized some value.


// Shadowing Variable - If one has same named variable outside the block, the variable inside the block shadows the outside variable. This happens only for var.

var a = 100;
{
  var a = 10; // same name as global var
  let b = 20;
  const c = 30;
  console.log(a); // 10
  console.log(b); // 20
  console.log(c); // 30
}
console.log(a); // 10, 

//Closure :- JavaScript has a lexcial scope environment. If a function needs to access a variable, it first goes to its local memory. When it does not find it there, it goes to the memory of its lexical parent. 

// Advantages of Closure 
// Module Design Pattern 
// Currying 
// Memoization
//setTimeout
//Encapsulation

// Disadvantages of Closure:
// Over consumption of memory
// Memory Leak
// Freeze browser
  
 
