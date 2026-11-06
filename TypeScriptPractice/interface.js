function compressWithTwoLoops(str){
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

compressWithTwoLoops("aabdbceeec");