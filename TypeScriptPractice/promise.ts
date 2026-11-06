// Promise = JavaScript object that handles asynchronous operations. or A promise is an object that represents
// the future result of an asyncronous operation.
// A promise has three states:
// 1. Pending: Initial state, neither fulfilled nor rejected.
// 2. Fulfilled: The operation completed successfully.
// 3. Rejected: The operation failed.

// syntax


 const promise = new Promise((resolve, reject) => {
    console.log("Promise is pending");
    setTimeout(() => {
        const success = false; // Simulating a successful operation
        if (success) {
            resolve("Promise is fulfilled");
        } else {
            reject("Promise is rejected");
        }
    }, 2000);
});

promise.then((result) => console.log(result))
       .catch((error) => console.log(error))
       .finally(() => console.log("Promise is settled"));