
export class Shape {
    constructor(name) {
        if (this.constructor === Shape) {
            throw "This is abstract class";
        }
        this.name = name;
    }

    getArea() {
        return 0;
    }

    getPerimeter() {
        return 0;
    }

    toString() {
        return `${this.name}: area = ${this.getArea()}, perimeter = ${this.getPerimeter()}`;
    }
}


export class Rectangle extends Shape {
    constructor(width, height) {
        super("Rectangle");
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.width * this.height;
    }

    getPerimeter() {
        return 2 * (this.width + this.height);
    }
}


export class Square extends Shape {
    constructor(side) {
        super("Square");
        this.side = side;
    }

    getArea() {
        return this.side * this.side;
    }

    getPerimeter() {
        return 4 * this.side;
    }
}

export class Circle extends Shape {
    constructor(radius) {
        super("Circle");
        this.radius = radius;
    }

    getArea() {
        return Math.PI * this.radius * this.radius;
    }

    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
}
