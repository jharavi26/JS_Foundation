// Four Ways to Call A Function :-
// 1:- Function call by directly its name .  eg:- art();
// 2:- Using CALL Method():- call() allows you to invoke a function with a specified this context. eg:- art.call();
// 3:- Calling Functions as Methods :-Functions defined within objects can be called as methods.  eg:- obj.art();
// 4:- Using a new Keyword():- Call a function as a constructor to create a new object. new art();

// This Keyword :- determined by how a function is called, not where it's defined. 
// Its value depends on how the function is invoked, and it behaves differently in strict mode and non-strict mode.


const user1 = {
  name : "ravi",
  age : 27,
  greet : function(){
    console.log(this.name)
  }
}

const user2 = {
  name : "Art",
  greet : user1.greet,
}

console.log(user2.greet());           // Print Art Because greet called in second user /


const filmCast = {
  actor: ["Leonardo DiCaprio", "Kate Winslet", "Billy Zane"],
  director: "James Cameron",
  getActor: function() {
    return this.actor.forEach((actor) => {
      console.log(actor);
    });  
  }
}

console.log(filmCast.getActor());       // Prints the actors because arrow function does not have its own this, it uses the this                                    from the surrounding context (filmCast object).


const filmCast2 = {
  crew : "spot boys",
  prepareProps () {
    console.log(`Preparing props for ${this.crew}`);

  function arrangeChairs() {
    console.log(`Arranging chairs for ${this.crew}`);
  }

  arrangeChairs();          // This will log "Arranging chairs for undefined" because the inner function does not have its own this, and in non-strict mode, it defaults to the global object (window in browsers), which does not have a crew property.     
  
  const  arrangeLights = ()=> {
    console.log(`Arranging lights for ${this.crew}`);
  }
  
  arrangeLights();          // This will log "Arranging lights for spot boys" because arrow functions do not have their own this, and they inherit this from the surrounding lexical context (prepareProps method in this case).
}
}


const user3 = {
  name : "ravi",
  age : 27,
  greet : function(){
        function inner{
          console.log(this.name)
        }
        inner();
}
}
user3.greet();                            // return undefined because normal function do not have this.


const user4 = {
  name : "ravi",
  age : 27,
  greet : function(){
        const inner = ()=>{
          console.log(this.name)
        }
        inner();
}
}
user4.greet();         // ravi because arrow function have lexicall scoe. arrow function is a child function.


const actor = { 
  name : "art,",
  bow()  {
    return `My name is ${this.name} and I am bowing`;
  }
}

const result = actor.bow();
const result2 = actor.bow;
console .log(result2());                                      // My name is undefined, and I am bowing
console.log(result);                                            // My name is art, and I am bowing

 
// Context	Value of this
// Global Scope	:-window (or undefined in strict mode)
// Object Method	:-The object itself
// Regular Function (Non-strict):-	window
// Regular Function (Strict Mode):-	undefined
// Arrow Function	:- Lexical this (from the surrounding scope)
// Constructor Function	 :- The instance being created
// Class :-	The class instance
// call(), apply(), bind() :-	Explicitly set this
// Event Listener (Regular)	:- The target element
// Event Listener (Arrow Function):- 	Lexical this

const person = {
  name : "Ravikumar",
  lastName : "Jha" , 
}

function fullname (age , city){
  console.log(`Name is ${this.name} & lastName is ${this.lastName} & age is ${age} & live in ${city} `)
}

fullname.call(person , 27 , "Mumbai");

// Call PolyFills 
 
Function.prototype.myCall = function(context = {} , ...args){
  if(typeof this !== "function"){                       // here this refers to the function(fullname) on which myCall is invoked
    throw new Error(this + "It is not Callable");
  }

  context.fn = this;       //here attached object to the function as a property so that we can call it with the desired context. 
  const result = context.fn(...args);            // here we are calling the function with the provided context and arguments.
  delete context.fn;                    // here we are cleaning up by removing the temporary property from the context object to avoid any side effects.
  return result;                  // here we are returning the result of the function call, which is the output of the original function invoked with the specified context and arguments.
 
}

fullname.myCall(person, 26 , "Delhi")


//Apply Polyfills

Function.prototype.myApply = function(context = {}, args = []){
  if(typeof this !== "function"){
    throw new console.error(this + "It is not Callable");
  }

  if(!Array.isArray(args)){
    throw new TypeError("CreateListFromArray like called on non-object");
  }


  context.fn = this;
  const result = context.fn(...args);
  delete context.fn;
  return result;


}

fullname.myApply(person, [22, "Surat"])

//Bind polyfills 

// Bind polyfill
const person2 = {
  name : "Ravikumar",
  LastName : "Jha",
}

function greet(city){
  console.log(`${this.name} & lastName is ${this.LastName} & live in ${city}`)
}


Function.prototype.myBind = function(context = {}, ...args){
  if(typeof this !== "function"){
    throw new Error("This is not Bounded")
  }

  context.fn = this;
   return function(...newArgs){                   // here we are returning a new function that can be called later. This new function will have the same context and arguments as the original function.
    context.fn(...args, ...newArgs)
   };
};

const newFunc = greet.myBind(person2, "Mumbai");
newFunc();



//bind creates a new function and does not invoke it immediately. The new function can be called later.

// UseCase :- 
// call():- Borrowing methods from other objects.
// apply():- Useful for functions like Math.max where arguments are in an array.
// bind():-Useful when you need a function to always use the same context.


// New Keyword :- The new keyword is used to create instances of objects that have a constructor function. When you use new, it does the following:
// 1. Creates a brand new, empty object.

// 2. Links that object to the function's prototype so it can share methods (like .status() in your code).

// 3. Binds this inside the function to point directly to that new object.

// Returns the new object automatically (so you don't have to write a return statement).


function Tatacar (model, fuel, color){
  this.model = model;
  this.fuel = fuel;
  this.color = color;
}

Tatacar.prototype.status = function (){
    return `Tata ${this.model} & fuel level is ${this.fuel} & color is ${this.color}`
}

const car1 = new Tatacar("Harrier", "Petrol", "Black")
const car2 = new Tatacar("Safari", "Diesei", "Red")
const car3 = new Tatacar("SUV", "Power", "Green")

console.log(car1.status());
console.log(car2.status());
console.log(car3.status());


//Factory Function :- A factory function is a function that returns a new object every time it is called. It allows you to create multiple instances of similar objects without using the new keyword or constructor functions.

function createCar(model, fuel, color) {    
  return {
    model: model,
    fuel: fuel,
    color: color,
    run : function() {
      return `Tata ${this.model} & fuel level is ${this.fuel} & color is ${this.color}`;
    }
  };
}

const car4 = createCar("Nexon", "Electric", "Blue");
const car5 = createCar("Altroz", "Petrol", "White");