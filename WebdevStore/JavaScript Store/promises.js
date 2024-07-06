console.log("hello world ");
console.log(" This is promises");

let prom1 = new Promise((resolve , reject) =>{

     let data = Math.random();

     if (data < 0.5 ) {
        reject("No random number was not supporting you ")
     }else{
          
        setTimeout(() => {
        
            console.log("Yes i am done");
            resolve("Kartik");
        }, 3000);

     }
  
})
prom1.then((a) =>{
    console.log(a);
}).catch((err) => {
    console.log(err);
})
