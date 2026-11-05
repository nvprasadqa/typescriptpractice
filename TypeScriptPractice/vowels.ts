let val:string  = "selenium";

let val1:string = "aeiouAEIOU";
let count:number =0;

let group:string[] = [];

// for(let char of val){
    for(let i = 0;i<val.length;i++ ){

    if(val1.includes(val[i])){
        count++;
        group.push(val[i]);

}
}
console.log(`The number of vowels in the string "${group}" is: ${count}`);







