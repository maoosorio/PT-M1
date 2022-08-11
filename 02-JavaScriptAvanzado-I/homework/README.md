
# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript
x = 1; // asigna el valor de 1 a x
var a = 5; // asigna el valor de 5 a a
var b = 10; // asigna el valor de 10 a b
var c = function(a, b, c) { // inicia un contexto para la variable c
  var x = 10; // dentro de este contexto la variable x tiene un valor de 10
  console.log(x); // imprime 10
  console.log(a); // imprime 8
  var f = function(a, b, c) { // inicia otro contexto dentro 
    b = a; // iguala la variable b con la variable a
    console.log(b); // imprime la variable b = 8
    b = c; // iguala la variable b con la variable c
    var x = 5; // declara la variable x con valor 5
  }
  f(a,b,c); // pasa los valores de  8,9,10 
  console.log(b); // imprime la variable 9
}
c(8,9,10); // asinga los valores de 8,9,10 a  a,b,c respectivamente
console.log(b); // imprime 10
console.log(x); // imprime 1
```

```javascript
console.log(bar); // imprime la variable bar
console.log(baz); // se rompe porque no sabe que es una indefinida
foo();
function foo() { console.log('Hola!'); }
var bar = 1;
baz = 2;
```

```javascript
var instructor = "Tony"; // asigna a la variable instructor el valor de tony
if(true) {
    var instructor = "Franco"; // en caso de ser verdadero, lo cual es, reasigna el valor de franco a la variable instructor
}
console.log(instructor); // imprime franco
```

```javascript
var instructor = "Tony"; // asigna el valor de tony a la variable instructor
console.log(instructor); // imprime tony
(function() {
   if(true) {
      var instructor = "Franco"; // reasigna el valor franco a la variable instructor
      console.log(instructor); // imprime franco
   }
})();
console.log(instructor); // imprime tony
```

```javascript
var instructor = "Tony"; // asigna el valor tony a la variable instructor
let pm = "Franco"; // asigna el valor de franco a la variable pm
if (true) {
    var instructor = "The Flash"; // reasigna el valor de the flash a la variable instructor
    let pm = "Reverse Flash"; // asigna el valor reverse flash a la variable pm
    console.log(instructor); // imprime the flash
    console.log(pm); // imprime reverse flash
}
console.log(instructor); // imprime the flash
console.log(pm); // imprime franco
```
### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3" // 2
"2" * "3" // 6
4 + 5 + "px" // 9px
"$" + 4 + 5 // $45
"4" - 2 // 2
"4px" - 2 // NaN
7 / 0 // infinito
{}[0] // [0]
parseInt("09") // 9
5 && 2 // 2
2 && 5 // 5
5 || 0 // 5
0 || 5 // 5
[3]+[3]-[10] // 23
3>2>1 // false
[] == ![] // true
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).


### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a); //  undefined
   console.log(foo()); // regresa 2

   var a = 1;
   function foo() {
      return 2;
   }
}

test();
```

Y el de este código? :

```javascript
var snack = 'Meow Mix'; // crea la variable snack y asigna valor meow mix

function getFood(food) {
    if (food) {
        var snack = 'Friskies'; // reasigna el valor de la variable snack
        return snack;
    }
    return snack;
}

getFood(false); // llama a la funcion con un boleano asi que es indefinido porque no esta recibiendo lo que se espera
```


### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname()); // imprime aurelio de rosa

var test = obj.prop.getFullname; 

console.log(test()); // imprime juan perez porque puso a la variable a nivel global y estan al mismo nivel ahora
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1); 
   setTimeout(function() { console.log(2); }, 1000);
   setTimeout(function() { console.log(3); }, 0);
   console.log(4);
}

printing(); // imprime 1 luego manda a imprir 2,  pero despues de un segundo, luego imprime 3 despues de 0 segundos y luego imprime 4
// imprimiria en este orden 1,4,3,2
```
