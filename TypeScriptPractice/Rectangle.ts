class Rectangle{

    width: number;
    height: number;
    constructor(width: number, height: number){
        this.width = width;
        this.height = height;
    }

     area(): number {
        return this.width * this.height;
    }
}


const rectObject =new Rectangle(10,20);
console.log(rectObject.area());


