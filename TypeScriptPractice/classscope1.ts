import { Employee } from "./classscope";
const el = new Employee();

el.printMessage();

{
  var a = "function scoped";
  let b = "block scoped";
  const c = "block scoped";
}
console.log(a);          
console.log(b);   
console.log(c);