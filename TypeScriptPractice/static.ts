class Employee {
     value:number = 12;
    static headcount: number = 0;

    constructor(
        private firstName: string,
        private lastName: string,
        private jobTitle: string) {

        Employee.headcount++;
    }
     public static getHeadcount() {
        console.log("this is static method")
    }
}


let john = new Employee('John', 'Doe', 'Front-end Developer');
let jane = new Employee('Jane', 'Doe', 'Back-end Developer');

console.log(Employee.headcount); // 2
console.log(john.value);
Employee.getHeadcount(); // "this is static method"


