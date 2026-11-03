// function prepareFood(callback){
//     setTimeout(() => {
//         console.log("Food is prepared");
//         callback();
//     }, 2000);
// }
function prepareFood(next){
    setTimeout(() => {
        console.log("Food is prepared");
        next();
    }, 2000);
}

function eatFood(next){
    setTimeout(() => {
        console.log("Food is eaten");
        next();
    }, 1000);
}

function goToSchool(){
    setTimeout(() => {
        console.log("Going to school");
    }, 3000);
}

// prepareFood();
// eatFood();
// goToSchool();

prepareFood(() => {
    eatFood(() => {
        goToSchool();
        });
});