class User {// class declaration
   readonly name: string;

  constructor(name: string) { // constructor declaration
    this.name = name;
  }// constructor closed

   getName(): string {// function declaration in class
    return this.name;
  }
}// class User closed

const user = new User("John");

console.log(user.getName());

 user.name = "Alex"; // // Error: Cannot assign to 'name' because it is read-only
 
console.log(user.getName());
