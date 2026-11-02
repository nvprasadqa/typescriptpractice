abstract class Animal {
  abstract makeSound(): void;// unimplemented method that must be defined in subclasses

  move(): void {
    console.log('Moving...');
  }
}

class Dog extends Animal {
  makeSound(): void {
    console.log('Bark');
  }
}

const myDog = new Dog();
myDog.makeSound();
myDog.move();