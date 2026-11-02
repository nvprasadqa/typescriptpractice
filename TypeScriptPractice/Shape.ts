interface Shape {
  calculateArea(): number;
 
  
}



class Rectangles implements Shape {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  calculateArea(): number {
    return this.width * this.height;
  }
}

const rect = new Rectangles(5, 10);
console.log(rect.calculateArea());