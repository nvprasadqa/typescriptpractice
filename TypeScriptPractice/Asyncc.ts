//Async makes a function return a Promise automatically 
async function getUser1(){
   
    return "veera"
}

// it actually returns Promise<string>
// equivalent to Promise.resolve("veera");
//verify
const results = getUser1();
console.log(results)






