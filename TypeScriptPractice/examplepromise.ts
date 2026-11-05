// function prepareFood(callback){
//     setTimeout(() => {
//         console.log("Food is prepared");
//         callback();
//     }, 2000);
// }
// function prepareFood(next){
//     setTimeout(() => {
//         console.log("Food is prepared");
//         next();
//     }, 2000);
// }

// function eatFood(next){
//     setTimeout(() => {
//         console.log("Food is eaten");
//         next();
//     }, 1000);
// }

// function goToSchool(){
//     setTimeout(() => {
//         console.log("Going to school");
//     }, 3000);
// }

// prepareFood();
// eatFood();
// goToSchool();


// nested callbacks
// prepareFood(() => {
//     eatFood(() => {
//         goToSchool();
//         });
// });

// using promises

function prepareFoodPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Food is prepared");
            resolve();
        }, 2000);
    });
}

function eatFoodPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Food is eaten");
            resolve();
        }, 1000);
    });
}

function goToSchoolPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Going to school");
            resolve();
        }, 3000);
    });
}

prepareFoodPromise()
    .then(() => eatFoodPromise())
    .then(() => goToSchoolPromise())
    .catch((error) => console.log(error))
    .finally(() => console.log("All tasks completed"));

