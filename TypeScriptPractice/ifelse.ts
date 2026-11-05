const max = 100;
let counter = 100;

if (counter < max) {
    counter++;
} else if (counter === max) {
    counter = 1;
}
else if (counter > max) {
    counter = 0;
}   

console.log(counter);