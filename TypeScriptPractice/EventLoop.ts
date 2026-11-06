console.log("A")
setTimeout(()=>{
    console.log("B");
}, 0);

Promise.resolve().then(()=>{
    console.log("c");
});
console.log("D");

// why?
// Step1: console.log("A")
// output: A
// Step2: setTimeout(...)
// added to Macrotask  queueMicrotask
// Step3:
// Promise.resolve(...)
// Added to Microtask queue
// Step4: console.log("D")
// output: D

// Event Loop Order:
// --> Run Sync CommandEvent
// -->run microtasks
// --> run macrotasks
// Therefore
// output is
// A D C B
//  Event loop is the mechanism that coordinates exeuction of synchronous code , promise callbacks , and 
//  timer callbacks. Microtasks such as Promises execute before macrotasks such as setTimeout






