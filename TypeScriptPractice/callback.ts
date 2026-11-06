function greet(callback:Function){
    console.log("Hello");
    callback();
}

function sayGoodbye(){
    console.log("Goodbye");
}

greet(sayGoodbye);

//FLow
//greet()
//Print Hello
//Execute Callback function
// Print Goodbye

// Playwright Example
// page.on('dialog', async dialog => {
//     await dialog.accept();
//   } 
// );
// Here
// async dialog => {
// }
//is the callback
//when dialog appears, the callback function is executed and the dialog is accepted.  
// Event Occurs
// Callback is executed

// Events
//An event is an action or occurance that happens in the applicaiton
// Button click
// Alert Appears
// Request sent
// Response received
// download started


