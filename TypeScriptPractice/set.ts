const uniqueIds = new Set<number>();

uniqueIds.add(101);
uniqueIds.add(102);
uniqueIds.add(101); // Ignored automatically (duplicate)

console.log(uniqueIds.size); // Prints 2
console.log(uniqueIds);

for(const id of uniqueIds) {
    console.log(id);
}
