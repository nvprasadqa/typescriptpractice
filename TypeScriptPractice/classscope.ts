class Employee {
    salary: number = 50000;
    printSalary() {
        console.log(`Salary: ${this.salary}`);
    }
}

const emp = new Employee();
emp.printSalary();