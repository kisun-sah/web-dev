/**
 * asynchronous function in  javascript
 * 
 */

   // it is one of the example of asynoc function

function resolveAfter2Seconds() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
  }
  
  async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log(result);
    // Expected output: "resolved"
  }
  
  asyncCall();


  //************************************************************************Another Example of async functoion  */
console.log("kartik is a heaker ");   // 1st execute
console.log(" kartik is a student of full stack developer ");  // 2nd execute 

setTimeout(() => {
     console.log(" I am the hero ");  // almos last execute
}, 3000);

setTimeout(() => {
    console.log(" I am the hero 2 "); // 4th execute 
}, 1000);

console.log("The End"); //3 th execute


//*********************************************************************Call Back function  */

// Define a function that takes another function as an argument
function fetchData(callback) {
    // Simulate a data fetch with a timeout
    setTimeout(() => {
      const data = { name: "John Doe", age: 30 };
      callback(data);
    }, 2000);
  }
  
  // Define the callback function as an arrow function
  const handleData = (data) => {
    console.log("Data received:", data);
  };
  
  // Call the function with the callback arrow function         
  fetchData(handleData);

console.log('first', first)