// try - contains code that might throw an error.
// catch: runs if an error occurs in the try block. It receives the error object.
// finally: runs afterward whether an error occurred or not—useful for cleanup.


function Navigation(mapped){
  try{
    if(!mapped){
      throw new Error("Navigation is not mapped");
    } else {
      console.log("Navigation is mapped");
    } return true;
  } catch(error){
    console.error("Error:", error.message);
    console.log(error);
    } finally {
    console.log("Navigation check complete.");
  }
}

const result = Navigation(true) // Change this to true to see the success case
console.log(result);