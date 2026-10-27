// local scope
function testLocalScope() {
  let localVar = "I am local";
  var globalVar = "I am global";
  const constantVar = "I am constant";
  console.log(localVar);  
  if(true){
    var gh = 13;
    let ch = 12;
    console.log(ch);
    
  }// if close
//   console.log(ch);
  console.log(gh);
}
testLocalScope();
//console.log(globalVar); // Error: globalVar is not defined outside the function
//console.log(constantVar); // Error: constantVar is not defined outside the function
//console.log(localVar); // Error: localVar is not defined outside the function