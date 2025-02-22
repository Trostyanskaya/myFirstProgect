class Figure {
    #x;
    #y;

    constructor(x, y) {
        this.#x = x;
        this.#y = y;
    }

    get x() {
        return this.#x;
    }

    get y() {
        return this.#y;
    }

    square() {
        return undefined;
    }
}

class Circle extends Figure {
    #r;

    constructor(x, y, r) {
        super(x, y);
        this.#r = r;
    }

    get r() {
        return this.#r;
    }

    square() {
        return Math.PI * this.#r ** 2;
    }
}

class Rectangle extends Figure {
    #h;
    #w;

    constructor(x, y, h, w) {
        super(x, y);
        this.#h = h;
        this.#w = w;
    }

    get h() {
        return this.#h;
    }

    get w() {
        return this.#w;
    }

    square() {
        return this.#h * this.#w;
    }
}

const circle = new Circle(0, 0, 5);
console.log(`Круг: Центр (${circle.x}, ${circle.y}), Радиус ${circle.r}`);
console.log(`Площадь круга: ${circle.square().toFixed(2)}`);

const rectangle = new Rectangle(1, 1, 4, 6);
console.log(`Прямоугольник: Центр (${rectangle.x}, ${rectangle.y}), Высота ${rectangle.h}, Ширина ${rectangle.w}`);
console.log(`Площадь прямоугольника: ${rectangle.square()}`);

const figure = new Figure(0, 0);
console.log(`Фигура: Центр (${figure.x}, ${figure.y})`);
console.log(`Площадь фигуры: ${figure.square()}`);