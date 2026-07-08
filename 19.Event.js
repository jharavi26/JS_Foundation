//Capturing Phase (Event Capture) – Event travels from the root (window/document) down to the target element.

document.getElementById("grand").addEventListener("click" , ()=>{
  console.log("GrandParent Clicked")
},);

document.getElementById("parent").addEventListener("click" , ()=>{
  console.log("Parent Clicked")
}, true);

document.getElementById("child").addEventListener("click" , (e)=>{
  console.log("Child Clicked");
  e.stopPropagation();
},);

// Bubbling Phase – Event bubbles back up from the target element to the root.
//By default, events bubble upwards.


// Event Delegation :- Event delegation is a technique where a single event listener is added to a parent element instead of multiple listeners on individual child elements.

document.getElementById("button-container").addEventListener("click", (event) => {
  if (event.target.classList.contains("btn")) {
    console.log("Button Clicked:", event.target.textContent);
  }
});

