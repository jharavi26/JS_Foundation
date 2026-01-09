// Object :- an object is a data structure that allows you to store collections of data in key-value pairs.
//Each key is a string (or a symbol), and each value can be any valid JavaScript data type, including other objects or functions.
//The value of properties or keys could be a string, number, boolean, an object, null, undefined or a function.

//Creating an empty object

const person = {};
console.log(typeof(person));

const rectangle = {
    name : "Ravikumar",
    length: 20,
    width: 10,
    height: "30"
  }

  let property = "height";            //Dot notation is simpler and more readable but can only be used
                                    //when the property name is a valid identifier (no spaces, symbols, or starting with a number).
  console.log(rectangle.length);   
  console.log(rectangle['width']);   //Bracket notation is useful when the property name contains special characters or spaces, 
  console.log(rectangle[property]);  //or when you need to access the property dynamically (using a variable).

console.log(rectangle.hasOwnProperty('name'));      //hasOwnProperty: To check if a specific key or property exist in an object
console.log(rectangle.hasOwnProperty('work')); 

//Object Methods

const user = {
  name : "Ravikumar",
  age : 26,
  education : "Master",
}

console.log(Object.keys(user));                             // Response in array Format 
console.log(Object.values(user));
console.log(Object.entries(user));
console.log(Object.freeze(user));                        // Make a object Immutabale 
console.log(Object.seal(user));                          // changes in only existing Property 

const dog ={
  name : 'John',
  legs : 4,
  color : 'Black',
  age : 11,
  bark: function() {
    return "Woof woof";
  },
  breed: "Golden Retriever",                      // breed property         
  getDogInfo: function() {                       // getDogInfo method to get a summary of the dog's information
    return `This is ${this.name}, a ${this.age}-year-old ${this.breed} with ${this.legs} legs and ${this.color} color.`;
  }
};
console.log(dog);
const value = Object.values(dog);
console.log(value);


// Copy of Object 

// Shallow Copy :- Copies the first level properties of the object. If the property value is a primitive → new copy is created.If the   property value is a reference (object/array) → only the reference is copied (not the actual object). So changes in the nested object affect both copies.

// 1. Using assign Method 

const obj1 = {a : 10, b : 20, d : {c : 30} }
const obj2 = Object.assign({}, obj1);
obj2.d.c = 31
console.log(obj2);

// 2.Using Spread Operator 

const obj3 = {...obj1};
console.log(obj3);


//Deep copy of Object - Changes in nested objects will not affect the original. 

const obj4 = JSON.parse(JSON.stringify(obj1));
obj4.d.c = 30;
console.log(obj1);
console.log(obj4)
