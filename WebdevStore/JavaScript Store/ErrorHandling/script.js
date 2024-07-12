let a = prompt("Enter first num")
let b = prompt("Enter second Num")
let sum = parseInt(a) + parseInt(b);

if (isNaN(a) || isNaN(b)) {
    throw console.error("Sorry this is not allowed");
}

console.log('The sum is :' + sum);


function main(params) {

    let x = 5;

    try {
        console.log("The sum is :" + sum * x);
        return true;
    } catch (error) {
        console.log(error);
        console.log('you stop Error aa gya!!');
        return false;

    }
    finally {
        console.log('files are being closed and dp connection is being closed');

    }
}
let c=main();