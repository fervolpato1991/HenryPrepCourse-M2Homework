function sumaTres (x){
    console.log(x + 3);
}
// Instruimos que nos imprima en la consola el resultado
sumaTres(5);
// Sintaxis de una función:
// Para invocarla se usa la palabra reservada de JS (function), se le indica a js que lo siguente es una funcion
// Luego se le debe dar un nombre a la función (sumaTres), en los () van los argumentos o parametros
// Se puede escribir todos los parametros que queramos
// Por ultimo van los {} que es donde va el cuerpo de la función, indica las instrucciones que debe ejecutar la función

// PRIMERO
function sumaTres(x){
    return x + 3;
}
// Con "return" en vez de imprimir el resultado, lo retorna.

// SEGUNDO
var sumaTres = function(x){
    return x + 3;
}
// Guarda la función dentro de una variable

// TERCERO
var sumaTres = (x) => {
    return x + 3;
}

// Diferencias entre console.log() y return:
// console.log() da una ayuda visual, para saber cual es el valor de una variable o codigo
// es decir, ver para ver el valor el contenido de un codigo, solo es una ayuda para realizar un codigo
// Una vez cumplida la utilidad, deberia ser borrado del codigo.
// return es la instrucción que le va a indicar a la función que valor nos debe devolver

