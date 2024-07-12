/** 
 * In this section we clearlify the object orientd 
 * programming in javascript .
 * 
 */

class Animal{
     constructor(name ){
      this.name = name;
        console.log('Object is created ..');
        
     }

     cow(){
        console.log('I eating grass,s');
        
     }
     dog(){
        console.log('i am walking ...');
        
     }
}

class lion extends Animal{

   constructor(name ){
      super(name);
      this.name = name;
        console.log('Object is created and he is lion  ..');
        
     }
}

let a = new Animal("Tiger ");
console.log(a);

let l = new lion("share");
console.log(l);

