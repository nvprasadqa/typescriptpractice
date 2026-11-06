function compressWithTwoLoops(str:string){
  let result = "";
  for(let i=0; i<str.length; i++){
    if(str.indexOf(str[i]) !== i){
      continue;
    }
    let count = 1;
    for(let j=i+1; j<str.length; j++){
      if(str[i] === str[j]){
        count++;
      }
    }
    result += str[i] + count;
  }
  console.log(result);
}

//compressWithTwoLoops("aabdbceeec");


//using map:

const map = new Map<string, number>();
let s:string = "aabacbccdd";

let result1 = "";
// count frequency

for(const char of s){
    map.set(char, (map.get(char) || 0)+1);
}
// to preserver first occurance order
const seen =  new Set<string>();
for(const char of s){
    if(!seen.has(char)){
        result1 += char + map.get(char);
        seen.add(char);

    }
}

console.log(result1)
