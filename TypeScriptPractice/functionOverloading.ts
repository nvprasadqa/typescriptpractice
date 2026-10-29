// function greet(person: string): string;
function greet(person: string, age: number): string;
function greet(person: string, age?: number): string {
    if (age !== undefined) {
        return `Hello, ${person}, you are ${age} years old!`;
    }
    return `Hello, ${person}!`;
}

console.log(greet("Anne"));
console.log(greet("John", 30));


// 1. OVERLOAD SIGNATURES
function makeDate(timestamp: number): Date;

function makeDate(m: number, d: number, y: number): Date;

// 2. IMPLEMENTATION SIGNATURE (Hidden from the outside)
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
  if (d !== undefined && y !== undefined) {
    return new Date(y, mOrTimestamp, d);
  } else {
    return new Date(mOrTimestamp);
  }
}



// Usage:
const d1 = makeDate(1609459200000); // OK (Matches overload 1)
const d2 = makeDate(1, 1, 2021);    // OK (Matches overload 2)
const d3 = makeDate(1, 3);          // ERROR: No overload expects 2 arguments
console.log(d3);
