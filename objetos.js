//Objetos:
//Estructuras que permite guardar informacion en todos los tipos de datos
//asi como tambien tiene todo tipo de funcionalidades
var deportes = {
    conBalon : ["football", "basketball", "rugby"],
    sinBalon : ["boxeo", "surf", "trekking"],
};
var persona = {
    nombre : "Lucas",
    edad : 26,
    estudios: {esProgramador : true}
};
//A diferencia de las matrices que tienen elementos valorados en indices
//los objetos usan un concepto llamado pares de clave : valor
//la clave es el identificador y el valor es lo que queremos guardar en la clave
//un objeto puede tener muchos pares de clave:valor que deben estar separador por una coma
//solo puede haber una clave de un mismo nombre en un objeto.
//varias claves pueden tener el mismo valor
//los valores pueden ser cualquier tipo de dato de javascript, incluidos otros objetos


//Existen dos formas en las que se puede trabajar con objetos
//Dot-Notation o notacion por punto(.)
//Bracket-Notation o notacion por corchetes ([])
 autos.marcas = ["Ford", "Audi", "Ferrari"];
 autos["marcas"]= ["Ford", "Audi", "Ferrari"];

// ACCEDER
//Para acceder a la propiedad de un objeto simplemente tenemos que escribir el nombre del objeto seguido de un punto y el nombre de la propiedad.
var persona = { nombre: 'Lucas', edad: 26, estudios: { esProgramador: true } };
console.log(persona.edad);

// ASIGNAR
//Para cambiar el valor de una propiedad simplemente tenemos que acceder a ella e igualarla al nuevo valor.
//Las propiedades que se van a asignar al objeto siempre deben tener un valor para poder agregarse
var persona = { nombre: 'Lucas', edad: 26, estudios: { esProgramador: true } };
persona.nombre = 'Martín';
console.log(persona.nombre);

//BORRAR
//Para eliminar propiedades utilizaremos una palabra reservada llamada delete.
delete autos.marcas;
console.log(autos);

//CREAR
//Se utiliza la misma sintaxis que en la asignacion de valor para crear una nueva propiedad
var autos = {};
autos.marcas = ['Ford', 'Audi', 'Ferrari'];
console.log(autos);

//Guardar funciones en objetos:
var misFunciones = {
    saludar: function(){
        console.log("Hola");
    }
}
misFunciones.saludar();

var atuendos = {
    manos : ["Guantes", "Anillos"],
    pies : ["Zapatos", "Soquetes"]
}
//agregar propiedades con brackets-notation
atuendos["piernas"] = ["Bermudas", "Pantalones"];
console.log(atuendos); // {manos:["Guantes", "Anillos"], pies:["Zapatos", "Soquetes"],piernas:["Bermudas", "Pantalones"]}

//Datos sobre Bracket-Notation:
//Muchas veces nos puede suceder que necesitemos utilizar una variable externa para guardarla
//como propiedad en un objeto. Es importante que en esos casos recordemos
//utilizar Bracket-Notation sin comillas para que funcione correctamente.
var comidas = {};
var diferenciasDeNotaciones = function (propUno, propDos){
    comidas.propUno = ["Frutas", "Vegetales"];
    comidas["propDos"] = ["Hamburguesa", "Papas Fritas"];
}
diferenciasDeNotaciones("Saludable", "NoSaludable");
console.log(comidas); //resultara en {propUno : ["Frutas", "Vegetales"], propDos : ["Hamburguesa", "Papas Fritas"]}
//forma correcta:
var diferenciasDeNotaciones = function (propUno, propDos){
    comidas[propUno] = ["Frutas", "Vegetales"];
    comidas[propDos] = ["Hamburguesa", "Papas Fritas"];
}
diferenciasDeNotaciones("Saludable", "NoSaludable");
console.log(comidas);//resultara en {Saludable : ["Frutas", "Vegetales"], NoSaludable : ["Hamburguesa", "Papas Fritas"]}