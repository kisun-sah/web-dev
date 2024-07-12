console.log("Hello my world !!");

async function sleep() {
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            resolve(45);
        }, 2000);
    })
}

function sum(a , b ,c) {
    return a+b+c;
}
(async function main() {
//     let a = await sleep();
//     console.log(a);
    
//     let b = await sleep()
//     console.log(b);
//   //...............................................
//     let [x, y , ...rest]= [1,5 ,2,3,5,7,89,7]
//     console.log(x,y, rest);

//.................................................

let obj = {
    p: 1,
    q: 2,
    c: 3,
    d: 4
};

let {p, q} = obj;
console.log(p, q);  // Outputs: 1 2

//**************************************************** */

let arr = [1,3,5];
//console.log(arr[0] +arr[1]+arr[2]);
console.log(sum(...arr));

})()