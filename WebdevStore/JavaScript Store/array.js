/**
 * 
 * Array in javascript
 * 
 */

let arr = [1,22,3,545,65,7,68,79,6];
console.log(arr);

// here is mathod of array 

// push method --> add element in last length of array
arr.push(1000);
arr.push("kartik");
console.log(arr);

// pop method ---> remove element from last length of array
arr.pop();
arr.pop(1000);
arr.pop("kartik");
console.log(arr);

//shift() method ---> remove element from start
let arr1 = [1,22,3,545,65,7,68,79,6];
arr1.shift();
console.log(arr1);

//unshift() method ---> add element starting of array
arr1.unshift("kartik");
console.log(arr1);


//splice() method
let arr2 = [1,22,3,545,65,7,68,79,6];
arr2.splice(1,3); // this mean after 1 remove 3 element
console.log(arr2);

// array using for loop 

let array =[ 10 , 20 , 'kartik' , 11 , 'manoj'];

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    console.log(element);
    
}

// in array using foreach loop 
let array1 =[ 10 , 20 , 'kartik' , 11 , 'manoj'];
array1.forEach((value ,index , arr) => {
    console.log(`value - ${value} Index - ${index} : arr${arr}`);
});



//obj using forin loop

let obj = {
    a:1,
    b:2,
    c:3
}
for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
        const element = obj[key] ;
        console.log(element);
       
    }
}



//using for loop array square 

let arr3 = [2,4,5,6,7,8,9,11];

let newarr = []; // create new array 

for (let i = 0; i < arr3.length; i++) {
    const element = arr3[i];
    newarr.push(element**2);  // here all element should be square and push in newarray
    
}
console.log(newarr);



//using map function  array square 

// these also similar to avobe

let arr5 = [2,4,5,6,7,8,9,11];

 let np = arr5.map((e ,index , array) =>{
    return e**2;
 })
console.log(np);
 // here apply the filter function only print those element that re greater than 7.
const greaterTheSreven = (e) => {
    if(e>7){
        return true;
    }else{
        return false
    }
}
console.log(arr5.filter(greaterTheSreven)); // output[8 , 9 ,11]