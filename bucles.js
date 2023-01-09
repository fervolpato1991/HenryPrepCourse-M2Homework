//Los bucles permiten realizar acciones de caracter repetitivo en forma sencilla
//Ejemplo de accion repetitiva:
var suma = 0;
suma = suma + 1;
console.log(suma); // 1 
//Podria ir escalando la suma extensa:
suma = suma + 1;
suma = suma + 2;
suma = suma + 3;
suma = suma + 4;
console.log(suma) // 10
//Esto seria complicado de realizar con numeros elevados de repeticios, por ejemplo repetir
//1.000 o 100.000, los bucles permiten hacerlo mas facil.
//Bucle (for):
for(var i = 0 ; i < 10 ; i++){
    suma = suma + 1;
    console.log(suma);
} // Es la misma suma que en el primer caso

for(var i = 0 ; i < 5 ; i++){
    suma = suma + i;
    console.log("variable de iteración" , suma);
}
console.log("variable suma", suma) // se ira sumando la variable de iteracion(i), que incrementara en cada ciclo.
                                   // (0 + 1 = 1 ; 1 + 1 = 2, 1 + 2 = 3 ; 1 + 3 
//Bucle(while):
//Itera siguiendo una condicion hasta que esta sea falsa
//Se usa cuando no se sabe cuantos pasos son necesarios hasta finalizar la ejecución
while(suma < 3){
    suma = suma + 1;
    console.log(suma);
}