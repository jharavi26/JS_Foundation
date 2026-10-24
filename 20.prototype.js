// Prototype -  In JavaScript, a prototype is an object that serves as a blueprint for creating other objects. Every JavaScript object has a prototype, which is another object from which it inherits properties and methods. The prototype allows you to add new properties and methods to existing objects, enabling inheritance and code reuse.

const art = {
  name : "Ravikumar",
  age : 26,
  greet : function(city){
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old and I live in ${city}.`);
  }
}


const aarav = Object.create(art);
aarav.name = "Aarav";
aarav.age = 5;
aarav.greet("Mumbai");            // Output: Hello, my name is Aarav, I am 5 years old and I live in Mumbai.

console.log(aarav.__proto__ === art);               // Output: true, because aarav's prototype is art
