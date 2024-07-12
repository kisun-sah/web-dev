/**
 * 1. The Magical Sorting HAt : Imagine you are creating a magic sorting hat for a wizard school. Implement a javascript function that take an array of students name and assign then to one of the four house (Gryffing (length less then 66) , Hufflepuff(length less than 8) , Ravenclaw(length lass than 12) , or Slythiein(length less than or equal 22))based on the length of names .
 */

console.log('Welcome to the Swized school ..');

let students = ["krti" , "anjana" , "kartik" ,"manojsha" , " rubinaa" , "karikamis" , " manorajthijka" ,"kularoy", "raj", "pisue"];

let house = [];

for (const student of students) {

    if(student.length < 6 ){
        console.log('Gryffing');
        
    }else if(student.length > 8){
        console.log("Hufflepuff");
    }else if(student.length > 12){
        console.log("Ravenclaw");
    }else{
        console.log('Slythiein');
        
    }
    
}
