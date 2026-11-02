// truthy falsy
// falsy values false below
// 0
// NaN (the "not a number" value)
// "" (empty string)
// [] (empty array)
// null
// undefined

if(1){
    console.log("if condidtion")
}



let ch: number|string  = 12;
console.log(typeof ch);
ch = "hello";
console.log(typeof ch);

// any you are disable type check

function example(a:number|string){

    console.log(a);
}
example(12);
example("hello");






