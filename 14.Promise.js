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

//Callback Hell :-  Nested Callback stacked below one another forming a pyramid structure, Inversion of Control
//Promise :- The Promise object represents the eventual completion (or failure) of an asynchronous operation.

//Syntax Of Promise :-
// let promise = new Promise((resolve, reject) => {
// code... )}

/* A promise has
three states:
1. Pending: The initial state when the operation is ongoing and not yet complete.
2. Fulfilled: The process completed successfully.
3. Rejected: The process failed.

The Promise constructor takes a function with two arguments:
resolve: Call this when the operation is successful.
reject: Call this when the operation fails.

.then(): Handles the fulfilled state and gets the resolved value.
.catch(): Handles the rejected state and gets the rejection reason.
*/
const myPromise = new Promise((resolve, reject) => {
    // Simulate an asynchronous operation
    const success = true; // Change this to false to test rejection
    setTimeout(() => {
      if (success) {
        resolve('Operation successful!');
      } else {
        reject('Operation failed.');
      }
    }, 2000); // Simulate 2 seconds delay
  });
  myPromise
  .then(result => {
    console.log(result); // Runs if the promise is fulfilled
  })
  .catch(error => {
    console.log(error); // Runs if the promise is rejected
  });

const pizzaOrder = new Promise((resolve, reject) => {
    const pizzaArrived = true; // Simulating success
  
    setTimeout(() => {
      if (pizzaArrived) {
        resolve('Pizza is here!'); // Success
      } else {
        reject('No pizza today!'); // Failure
      }
    }, 2000); // Wait 2 seconds
  });
  
  // How to use the promise
  pizzaOrder
    .then(message => {
      console.log(message); // If fulfilled, this runs
    })
    .catch(error => {
      console.log(error); // If rejected, this runs
    });
  

    let promise = new Promise(function(resolve, reject) {
      resolve(5);
    });
    
    promise
      .then((result)=>{
        console.log(result); // Output: 5
        return result * 2;
      })
      .then((result )=>{
        console.log(result); // Output: 10
        return result + 5;
      })
      .then((result)=>{
        console.log(result); // Output: 15
      });
    
const art1 = new Promise((resolve, reject)=> setTimeout(resolve, 1000, "First"))
const art2 = new Promise((resolve, reject)=> setTimeout(reject, 1000, "Second"))
const art3 = new Promise((resolve, reject)=> setTimeout(resolve, 2000, "Third"))

Promise.allSettled([art1, art2, art3])
.then((result)=>console.log(result))
.catch((error)=>console.log(error))
.finally(function() {
  console.log("The promise is complete!");
});

