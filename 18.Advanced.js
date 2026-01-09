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

let timer;
document.getElementById("input").addEventListener("keydown", ()=>{
  clearTimeout(timer)
  timer = setTimeout(function(){
      let inputval = document.getElementById("input").value;
      document.getElementById("output").innerText = inputval;
    },2000)
  })

  // Throttling in JavaScript is a technique used to improve performance by controlling how often a function is executed over time. It ensures that a function is only executed at most once within a specified time interval, even if it is called multiple times during that interval.

  let lastExecutionTime = 0;
  const throttleDelay = 1000; // 1 second
  
  document.getElementById("input1").addEventListener("input", () => {
      const currentTime = Date.now();
  
      if (currentTime - lastExecutionTime > throttleDelay) {
          // Get the current value of the input field
          const inputValue = document.getElementById("input1").value;
  
          // Update the output
          document.getElementById("output1").innerText = inputValue;
  
          // Update the last execution time
          lastExecutionTime = currentTime;
      }
  });
  
 
