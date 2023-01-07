//Operadores:
//Son los simbolos matematicos(+, - , * , / , %) que se usan para
//calcular el valor de dos o mas elemento(pueden ser distintos tipos de datos)

//Suma
console.log(3 + 5);

//Resta
console.log(14 - 7);

//Multiplicacion
console.log(8 * 6);

//Division
console.log(30 / 9);

//Resto
console.log(95 % 4);

//Precedencia en el orden el cual los operadores son evaluados
//JS tiene una tabla con el orden (de 19 a 1)

//Prueba de precedencia
console.log(3 + 5 * 2 - 8);
//Por precedencia JS resuelve primero la * : (3 + 10 - 8)
//Despues la + (13 - 8), por ultimo la - (5)
//Los () tienen orden de precedencia de 19, por lo que se podrian
//usar para que JS resuelva primero una + o - y despues * o /
//El ejemplo seria: (3 + 5) * 2 - 8), la cual resultaria en 8

//Adicion y strings:
//El operador adicion permite concatenar strings
console.log("Hola " + "mundo!");
var palabra = "Hola ";
var saludo = palabra + "mundo!";
console.log(saludo);