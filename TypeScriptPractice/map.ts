// Create a Map with string keys and number values
const userAges = new Map<string, number>();

// Adding entries
userAges.set("Alice", 30);
userAges.set("Bob", 25);
userAges.set("Charlie", 35);

// Retrieval
const aliceAge = userAges.get("Alice"); // returns 30
const bobAge = userAges.get("Bob"); // returns 25
const charlieAge = userAges.get("Charlie"); // returns 35

console.log(`Alice's age: ${aliceAge}`);
console.log(userAges);


