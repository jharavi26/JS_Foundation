// Four Ways to Call A Function :-
// 1:-Function call by directly its name .  eg:- art();
// 2:-Using CALL Method():- call() allows you to invoke a function with a specified this context. eg:- art.call();
// 3:- Calling Functions as Methods :-Functions defined within objects can be called as methods.  eg:- obj.art();
// 4:-Using a new Keyword():- Call a function as a constructor to create a new object. new art();

// This Keyword :- refers to the context in which a function is called. Its value depends on how the function is invoked, and it behaves differently in strict mode and non-strict mode.

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
  if(typeof this !== "function"){
    throw new Error(this + "It is not Callable");
  }

  context.fn = this;
  context.fn(...args);

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
  context.fn(...args);

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
   return function(...newArgs){
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
