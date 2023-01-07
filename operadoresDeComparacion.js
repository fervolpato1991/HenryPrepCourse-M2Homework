//Operadores de comparación(relacionales):
//Son identicos a los de matematicas(< , > , <=, >= , == , !=)
//Siempre devuelven un valor booleano, ya que indican si la operación
//es verdadera o falsa

//Operaciones de comparación
console.log (4 < 7); 
console.log (4 < 1 );
console.log (4 > 4); 
console.log (4 == 7);

//El (=) es considerado un operador de asignación
//Por ej : var cajón = "verde"; Por medio de (=) le asignamos el valor
//"verde" a la variable denominada cajón

//Diferencias entre igualdad(==) e igualdad estricta(===)
console.log (3 == 3); 
console.log (3 === 3); 
console.log (3 == "3"); 
console.log (3 === "3");
console.log (7 == "7");
console.log (7 === "7");

//La igualdad estricta verifica que coincida tanto el tipo de dato como
//el valor del mismo
//La igualdad solo verifica que coincida el valor

//Asignación y asociatividad
//La precendecia en este caso no sirve ya que todos tienen la misma
//Por lo que se toma en cuenta el valor de asociatividad
//este se encuentra en la misma tabla que JS usa para la precedencia
//para el valor de asignacion(=) la asociatividad es de derecha a izquierda
var a = 1;
var b = 2;
var c = (a = b);
console.log (a); // 2
console.log (b); // 2
console.log (c); // 2
//primero a = b , luego c = a