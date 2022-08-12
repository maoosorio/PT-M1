String.prototype.repetify = function (num) {
    var cadena = '';
    if (num < 0) {
        return 'Error';
    } else if (num == 0) {
        return '';
    } else {
        for (let i = 0; i <= num; i++) {
            cadena += (this);
        }
    }
    return cadena;
}

console.log('hola'.repetify(2));

// ========================================

shape = {
    type: 'Shape',
    getType: function () {
        return this.type;
    },
}

function Triangle(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.type = 'Triangle';
}

Triangle.prototype = shape;

Triangle.prototype.constructor = Triangle;

Triangle.prototype.getPerimeter = function () {
    return this.a + this.b + this.c;

}

var t = new Triangle(1, 2, 3);
console.log(t instanceof Triangle);
console.log(shape.isPrototypeOf(t));
console.log(t.getPerimeter());
console.log(t.getType()); 

// ========================================

function Circle(d) {
    this.d = d;
    this.type = 'Circle';
}

Circle.prototype = shape;

Circle.prototype.constructor = Circle;

Circle.prototype.getPerimeter = function () {
    return this.d * 2 * 3.1416;

}

var c = new Circle(2);
console.log(c instanceof Circle);
console.log(shape.isPrototypeOf(c));
console.log(c.getPerimeter());
console.log(c.getType()); 

// ========================================

function Square(e) {
    this.e = e;
    this.type = 'Square';
}

Square.prototype = shape;

Square.prototype.constructor = Square;

Square.prototype.getPerimeter = function () {
    return this.e * 4;

}

var s = new Square(6);
console.log(s instanceof Square);
console.log(shape.isPrototypeOf(s));
console.log(s.getPerimeter());
console.log(s.getType()); 