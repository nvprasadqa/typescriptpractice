 class Animal  {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

   makeSound(): void {
    console.log("Animal makes a sound");
  }
}// class Animal closed

class Dog extends Animal {
  bark(): void {
    console.log(`${this.name} barks`);
  }
}// Dog class closed

const dog = new Dog("Bruno");

dog.makeSound();
dog.bark();