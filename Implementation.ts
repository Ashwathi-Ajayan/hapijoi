
import {ImplCalculator} from './ImplCalculator';

let obj=new ImplCalculator();

var r1=require('readline');
var prompts=r1.createInterface(process.stdin,process.stdout);
prompts.question("\nselect the operation: \n1. Addition \n2. Subtraction \n3. Multiplication \n4. Division\n",function(operation) { 
switch(operation){
   case "1":{ 
      console.log(obj.add(5,5))
      break; 
   } 
   case "2": { 
      console.log(obj.subtract(15,6,5,1)) 
      break; 
   } 
   case "3": {
      console.log(obj.multiply(2,2,2,5)) 
      break;    
   } 
   case "4": { 
      console.log(obj.divide(10,2)) 
      break; 
   }  
   default: { 
      console.log("Invalid choice"); 
      break;              
   } 
}
process.exit();
});