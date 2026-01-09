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

