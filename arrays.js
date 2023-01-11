// Array es una lista de distintos tipos de datos
// es un objeto global de Js

var listaDeCompras = [];
listaDeCompras[3] = "Tomates"; // agrega un tipo de dato string en el indice 3 elemento 4
listaDeCompras[1] = "Lechuga"; // agrega un tipo de dato string en el indice 1 elemento 2
console.log(listaDeCompras); // imprime [vacio(indice0, elemento1), "Lechuga"(indice1, elemento 2), vacio(indice2, elemento3), "Tomates"(indice3, elemento4)];
// Puedo usar un dato guardado en un array para distintas declaraciones
// por ejemplo guardarlo en un array
var guardar = listaDeCompras[1]; // al invocar guardar la consola mostrara la string "Lechuga", es decir, el dato guardado en listaDeCompras[1]
console.log(guardar); // impirme "Lechuga", el valor guardado en el indice listDeCompras[1]

//Metodos son propiedades para objetos, entre ellos los Arrays, el cual es un objeto global.

//.length permite saber cuantos elementos tiene el arreglo, su extensión
console.log(listaDeCompras.length); // imprime 4 = 4 elementos = [vacio, "Lechuga", vacio, Tomates]

//.split() permite separar un string(por ejemplo: "Henry") en un arreglo con cada caracter como elemento del mismo

var palabra = "Henri";
var palabraSeparada = palabra.split("");
console.log(palabraSeparada); // imprime ["H", "e", "n", "r", "i"]
// si fuera .split(a), va a separar la palabra cada vez que encuentre una a

//.push() añade uno o mas elementos al final de un arreglo, y devuelve la nueva longitud del array.
//.pop() elimina y devuelve el ultimo elemento de un arreglo

palabraSeparada.pop() // devuelve ["H", "e", "n", "r"]
palabraSeparada.push("y") // devuelve ["H", "e", "n", "r", "y"]

//.join() permite unir los elementos de un arreglo y los convierte en una string
var palabraArreglada = palabraSeparada.join(""); // Las comillas son para que no exista espacios vacios.
console.log(palabraArreglada); // imprime "Henry";

//.forEach() permite recorrer un arreglo y realizar alguna accion para cada elemento
// no cambia nada en el arreglo, solo realiza una accion en especifico

var numeros = [1 , 2 ,3 , 4];
numeros.forEach((num) => console.log(num)); // Esto es una funcion en forma de flecha, es igual a decir: function(num){console.log(num)}
// imprime : 1  2  3  4
//Por ejemplo si queremos imprimir solo los numeros iguales a 3

numeros.forEach(num => {if(num === 3){console.log(num)}}) // imprime 3
//solamente realiza accion sobre el arreglo especificado no hace cambios.

//.map() permite recorrer un arreglo, realizar una accion en cada elemento
//puede cambiar el arreglo a diferencia de .forEach()

var masUno = numeros.map(num => {return num + 1})
console.log(masUno); // Imprime [2 , 3 , 4 , 5], ya que se le sumo 1 a [1 , 2 , 3 , 4];

//.unshift() permite agregar uno o mas elementos al inicio de un arreglo, y devuelve la nueva longitud del arreglo
//.shift() permite eliminar y devolver el primer elemento de un arreglo

palabraSeparada.shift() // devuelve ["e" , "n", "r", "y"];
palabraSeparada.unshift("H") // devuelve ["H", "e", "n", "r", "y"]

//.includes() determina si un array incluye un tipo de dato en especifico, devuelve true si lo tiene o false en caso contrario
const Array1 = [1, 2 , 3];
console.log(Array1.includes(2)); //imprime true

//.every() determina si todos los elementos en un arreglo satisfacen una misma condicion
const array1 = [1, 30 , 29, 39, 10, 13];
const menorNumero = (valor) => valor < 40;
console.log(array1.every(menorNumero)); // imprime: true
//.toString() devuelve una cadena de caracteres representando el array especificado y sus elementos.
const array2 = [1, 2 , "a", "1a"];
console.log(array2.toString()); // imprime : "1,2, a,1a"

//.charAt() deuvelve el dato especificado en el indice que se indica en el parentesis
var n = 123;
if(n.charAt(0) === "9"){
    return true;
} // devolvera false porque el primer indice de la variable n no es igual a "9"

//Bucles en arreglos
var arr = [1, 2 , 3 , 4 ,5];
//Bucle for
//Permite realizar un numero especifico de repeticiones especificado en los ()
for(let i = 0 ; i < arr.length/*si queremos iterar solo los primeros 3 elementos = (i < 3) */; i++){
    //decimos al bucle que recorra desde el indice 0(i = 0), todos los elementos del arreglo(arr.length), de a 1(i++)
    //cuando el bucle alcance un indice mayor al numero de elementos del arreglo, el bucle se rompe y termina
    console.log(arr[i]); //imprime todos los elementos del arreglo
}
//ejemplo de comprobar en una funcion que recibe una string y revise si alguna de sus letras es una p
function encontrarLetraP(string){
    let letra = string.split(""); //para transformar la variable string en un arreglo
    for(let i = 0 ; i < letra.length ; i++){
        if(letra[i] === "p"){
            console.log("si contiene P");
        } //recorre la variable letra que contiene el arreglo, si contiene el tipo de dato "p" sera impreso por la consola 
    }
}
encontrarLetraP("Javascript");//Imprime "si contiene p"
encontrarLetraP("Henry"); //no lo imprime porque no tiene letra p

//Bucle while
//requiere menos codigo y se debe poner la condicion para que se ejecute primero, es decir, trabaja con condiciones
//Por ejemplo: queremos poner 5 veces la palabra "BOOM" en un arreglo
var arr2 = [];
while(arr2.length < 5){
    arr2.push("BOOM");
}
console.log(arr2)

//bucles infinitos
//sucede cuando nunca se llega a una condicion de quiebre
//un ejemplo de bucle que agregue numeros al azar siempre que la variable n sea menor a 3
var arr4 = [];
var n = 1;
while(n < 3){
    arr4.push(math.random());
}
//vemos que n siempre tiene el valor 1, por lo que siempre va a cumplir la condicion de ser menor a 3
//por lo tango el bucle while no va a poder cumplir la condicion y se ejecuta indefinidamente
//la pc se va a tildar o mostrara que se quedo sin memora de procesamiento