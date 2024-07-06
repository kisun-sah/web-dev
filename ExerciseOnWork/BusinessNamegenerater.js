/**
 * Create a business name generator by combining list of adjectives
 * and shop name and another name
 * 
 * Adjectives :
 * crazy
 * Amazing 
 * Fire
 * 
 * 
 * Shop Name :
 * Engine
 * Foods
 * Garments
 * 
 * Another word:
 * Bros
 * Limited
 * Hub
 * 
 */

let rand = Math.random();
let first , second , third;

// first random 0 - 0.33 
//second random 0.33 - 0.66 
//third random 0.66 - 100


 // let's generater the first word
 if(rand < 0.33){
     first ='crazy';
 }
 else if(rand < 0.66 && rand>=0.33){
    first = 'Amazing ';

 }else{
    first = 'Fire'
 }

  // let's generater the second  word

  rand = Math.random();
  if(rand < 0.33){
    second  =' Engine';
}
else if(rand < 0.66 && rand>=0.33){
        second = 'Foods';

}else{
    second  = ' Hub'
}



  // let's generater the third word

  rand = Math.random();
  if(rand < 0.33){
    third  ='Bros';
}
else if(rand < 0.66 && rand>=0.33){
    third = 'Limited  ';

}else{
    third  = 'Hub'
}
console.log(`${first} ${second} $`);






//********************************************************************* */

// using object crated same project 



// List of adjectives
const adjectives = ['Crazy', 'Amazing', 'Fire'];

// List of shop names
const shopNames = ['Engine', 'Foods', 'Garments'];

// List of additional words
const additionalWords = ['Bros', 'Limited', 'Hub'];

// Function to get a random element from an array
function getRandomElement(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

// Function to generate a random business name
function generateRandomBusinessName(adjectives, shopNames, additionalWords) {
    const randomAdjective = getRandomElement(adjectives);
    const randomShopName = getRandomElement(shopNames);
    const randomAdditionalWord = getRandomElement(additionalWords);
    
    return `${randomAdjective} ${randomShopName} ${randomAdditionalWord}`;
}

// Generate and log a random business name
const randomBusinessName = generateRandomBusinessName(adjectives, shopNames, additionalWords);
console.log(randomBusinessName);
