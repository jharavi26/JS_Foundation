// A function is a reusable block of code or programming statements designed to perform a certain task. 
// A function is declared by a function key word followed by a name, followed by parentheses (). 
// A parentheses can take a parameter.

// A function can be declared or created in couple of ways:

// // 1. Declaration function :-
// // 2. Expression function :- A function can also be assigned to a variable.
// // 3. Anonymous function :-Anonymous function or without name
// // 4. Arrow function :-Arrow function uses arrow instead of the keyword function to declare a function. 

// function square() {
//     let num =4;
//     let sq = num * num
//     console.log(sq)
//   }

// square();

// Immediately Invoked Function Expression (IIFE)
// A function that runs as soon as it's defined.

// (function() {
//   console.log("IIFE executed!");
// })();


//  this function takes array as a parameter and sum up the numbers in the array

// function sumArrayValues(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//       sum = sum + arr[i];
//     }
//     return sum;
//   }
//   const numbers = [1, 2, 3, 4, 5];      //calling a function
//   console.log(sumArrayValues(numbers));


// // Expression functions are anonymous functions. 
// //After we create a function without a name and we assign it to a variable. 
// //To return a value from the function we should call the variable.

// const anonymousFun = function() {
//     console.log('I am an anonymous function and my value is stored in anonymousFun');
// }
// anonymousFun();

// const printFullName = (firstName, lastName) => {
//     return `${firstName} ${lastName}`
//   }
  
// console.log(printFullName('Ravikumar', 'Jha'))

// function greetings(name = 'Rajan') {                      //Function with default Parameter
//     let message = `${name}, welcome to 30 Days Of JavaScript!`
//     return message
//   }
  
//   console.log(greetings())
//   console.log(greetings('Ravikumar'))

function reverseArray(arr){
  for(let i=arr.length-1; i>=0 ; i--){
    console.log(arr[i])
  }

}
reverseArray([1,2,3,4]);

let sum = (arr)=>{
  let sum=0;
  for(let i=0; i<=arr.length; i++){
    if(i%2==0){
      
      sum+=arr[i]
    }
    
    
  }
  console.log("Sum of even",sum)
  
}
sum([2,3,4,5,6,7,8]);

function evensAndOdds(num) {
  let evens = 0;
  let odds = 0;
  
  // Loop from 1 to the given number (inclusive)
  for (let i = 0; i <= num; i++) {
      if (i % 2 === 0) {
          evens++; // If the number is even
      } else {
          odds++; // If the number is odd
      }
  }
  
  console.log(`The number of evens are ${evens}.`);
  console.log(`The number of odds are ${odds}.`);
}

// Example usage:
evensAndOdds(100);
// Output:
// The number of evens are 50.
// The number of odds are 50.


//Hosting in js

