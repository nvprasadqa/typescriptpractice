function carBrandCheck(brandNames:string[], brandName:string):boolean{

for(let i =0;i<brandNames.length;i++){

    if(brandNames[i] === brandName){
        return true;
    }
}
return false;


}

console.log(carBrandCheck(["BMW","Audi","Mercedes"],"Audi")); 