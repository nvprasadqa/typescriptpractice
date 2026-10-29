let x;
console.log(x)

// any Completely disables type checking.
let val:any = 34;
val = "playwright"

console.log(val)
console.log(val.toUpperCase())
console.log(val.length)


// unknown

let v: unknown = "Hello World";
console.log(v)
console.log("data type "+typeof v)
console.log(v.toUpperCase())
// You must narrow the type first:
if (typeof v === "string") {
  console.log(v.toUpperCase()); // ✅ Safe and allowed!
}












