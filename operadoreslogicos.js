//Los operadores logicos sirven para hacer comparaciones avanzadas
//Estos son negación(not), conjunción(and), disyunción(or)
//Las condicionales permiten controlar el flujo del codigo
//ej: "si llueve me quedo en casa mirando series", se evalua si la condicion lluvia es verdad para ejecutar la accion
//pero puede pasar que sea un ejemplo mas complejo, por ej:"si llueve y hace frio me quedo en casa"
//Programar sirve para encontrar soluciones a problemas reales
//con los operadores logicos se modela este tipo de condiciones.
//el operador &&(and) permite conjugar dos o mas operaciones al mismo tiempo:

function mayorMenor(num){
    if(num > 5 && num < 10){
        console.log(true);
    } //si ninguna o alguna de las dos condiciones no se cumple, entonces:
    else{
        console.log(false);
    }
}
mayorMenor(2) //false
mayorMenor(7) //true
//Si se usa el condicional AND(&&) todas las condiciones deben ser true para que la condicion final lo sea
//en el caso de haber dos o mas operaciones.

function mayorMenorYPar(num){
    if(num > 5 && num < 10 && num % 2 === 0){
        console.log(true);
    } //si ninguna o alguna de las dos condiciones no se cumple, entonces:
    else{
        console.log(false);
    }
}

mayorMenor(7) //false porque si es mayor a 5, y menos a 10, pero es impar, no cumple todas las condiciones AND
mayorMenor(8) //true porque cumple todas las condiciones

//Operador OR(||) permite conjugar dos o mas operaciones como AND, pero de diferente evaluacion logica

function operadorOr(str){
    if(str === "Henry" || str.length < 2){
        console.log(true);
    } else{
        console.log(false);
    }
}

operadorOr("Henry") //true ya que se esta cumpliendo al menos una de las dos condiciones(la primer condicion)
operadorOr("JavaScript") //false porque no se cumple ninguna de las dos condiciones
operadorOr("H") //true ya que se cumple al menos una de las condiciones(la segunda condicion)

//Operador NOT(!==) verifica condiciones opuestas

function negacion(permiso){
//permiso es un valor booleano
if(permiso){
    console.log("Tiene permiso")
} // es igual a if(permiso === true)
}
negacion(true) //imprime "Tiene permiso" porque la funcion pedia que solo mostrara si es verdadero
negacion(false) //no muestra nada

function negacion(permiso){
    //permiso es un valor booleano
    if(!permiso){
        console.log("Tiene permiso")
    } //agregando "!" para preguntar el valor opuesto 
      // es igual a if(permiso !== true)
    }

negacion(true) //no muestra nada
negacion(false) //imprime "Tiene permiso" ya que al agregar "!" cambio el valor que se pedia

function condicionCompleja(num){
    if(num > 9 && num % 2 === 0 || num === 3){
        console.log(true);
    } else{
        console.log(false);
    }
}
condicionCompleja(10); //true cumple la condicion (num > 9 && num % 2 === 0)
condicionCompleja(6); //false
condicionCompleja(3); //true cumple la condicion(num === 3)
condicionCompleja(5); //false