/**
 * 
 *  factorial using for loop 
 * 
 * in javascript
 */

function factorialForLoop(num) {

    //Base case 
    if(num == 0 || num == 1) return 1;

    let result =1;
    for(let i= 2; i<=num; i++){
        result *= i
    }
    return result;
    
}
// Example of the num
console.log( factorialForLoop(5));

 //.........................................................................

 // using reduce function 
 
 function factorialReduce(n) {
    if (n === 0 || n === 1) return 1;
    return [...Array(n).keys()].map(i => i + 1).reduce((acc, val) => acc * val, 1);
}

// Example usage:
console.log(factorialReduce(5)); // Output: 120
