// // constructor: A constructor is a special method that execute automatically when an object is created
// class Employee1 {
//     constructor(){
//         console.log("Constructor called")

//     }
    
// }

// const emp1 = new Employee1();// Constructor called

// Constructor with data

class Employee2{

      nss: string;

    

    constructor( nss:string){
       this. nss = nss;
    }

     print(){
        console.log(this.nss)
    }

    
}
const emp2 = new Employee2("Veera");
// emp2.print();

