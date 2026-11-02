let price: any = 5;
let input: any = "5";
console.log(typeof price); // number
console.log(typeof input); // string

console.log(price == input);  // true  -> Coerces string to number
console.log(price === input); // false -> Different types
