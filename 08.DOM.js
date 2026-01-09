let elm = document.getElementById("art1");                       //Returns a one Element 
elm.style.color = "green";
console.log(elm);

//The HTMLCollection is live means that it is automatically updated when the DOM tree in the document changes.
//Note that the HTMLCollection is an array-like object.

let head = document.getElementsByClassName("header");                  // Returns a HTML LiveCollections
console.log(head[0].textContent);

let qs1 = document.querySelector(".desc")                      //document.querySelector Returns first matching element.
console.log(qs1.textContent);                                                                                            


let qs2 = document.querySelectorAll(".desc")                   //document.querySelectorAll return static nodelist of all Matches .
qs2.forEach(p =>console.log(p.textContent));


// Traversing in Dom 

let parent = document.querySelector(".child");
console.log(parent.parentNode);

let currentNode = document.querySelector(".current")
let nextSibling = currentNode.nextElementSibling;
console.log(nextSibling);

let previousSibling = currentNode.previousElementSibling;
console.log(previousSibling);

let parentNode = document.querySelector("#menu");
let child = parentNode.firstChild;
let childElement = parentNode.firstElementChild;
console.log(child);
console.log(childElement);

let lastChildElement = parentNode.lastElementChild;
let lastChild = parentNode.lastChild;

console.log(lastChild);
console.log(lastChildElement);

let children = parentNode.children;
console.log(children);

const h2 = document.createElement("h2");
h2.textContent = "UseCase of Before Method";                     
parentNode.before(h2);                                       // allows you to insert one or more nodes before the element

const h3 = document.createElement("h3");
h3.textContent = "UseCase of After Method";                     
parentNode.after(h3);                                        // after() method to insert a node after an element.
 
let btn1 = document.getElementById("ravi");                            
let result = btn1.getAttribute("id");                                      // getAttribute
console.log(result);

btn1.style.backgroundColor = "red";                     //Inline Style
btn1.style.color = "white";
btn1.style.borderRadius = "10px";
btn1.style.fontSize = "16px";
btn1.style.padding = "5px"
btn1.style.margin = "10px"

btn1.setAttribute("name", "Submit");                                       // setAttribute
let result2 = btn1.getAttribute("name")
console.log("result2")

console.log(btn1.hasAttribute("name"))

btn1.removeAttribute("id");
console.log(btn1.hasAttribute("id"));



//Add & Append the element or nodelist

let content = document.createElement("div");
content.innerHTML = "Create & Append a Element";
content.id = "art3";
content.className = "note";
document.body.append(content);
console.log(content.getAttribute("id"))


let para = document.getElementById("note");
console.log(para.textContent);

console.log(para.innerHTML);             //get or set the HTML markup contained within the element:

console.log(para.innerText);                //returns only human-readable text.

para.classList.add("highlight");




 
