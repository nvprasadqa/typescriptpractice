console.log("line 1");
setTimeout(() => {
    console.log("line 2");
}, 1000);
console.log("line 3");


//setTimeout is a callback function that is executed after a specified delay. 
// In this case, the delay is set to 1000 milliseconds (1 second). 
// The code will log "line 1" and "line 3" immediately, and then after 1 second, it will log "line 2".
// incase if setTimout is not asynchronous ie if it synchronous then the output will be line 1, line 2, line 3. But in this case it is asynchronous 
// so the output will be line 1, line 3, line 2.  and line2 execute ayye varaku line 3 execute avodu apudu dani synchronous antaru
// e setTimeout function next unna statement or function ni block cheyadu kabatti so manam asynchronous ga cheppukuntam. 
// stop chese synchronous code yela untadi ante



