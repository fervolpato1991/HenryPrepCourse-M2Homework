function cuidadoConElConsoleLog(nombre){
    console.log(nombre);
    return nombre;
}
// el primer resultado al invocar la función es camilo porque nos muestra el valor de console.log()
// el segundo es "camilo" porque al invocar la función retorna el valor, un string con la palabra camilo
// debemos siempre retornar(return) el valor de la función para poder continuar con el flujo de codigo

function otraFuncion(){
    return "Lo que retorna la función cuidadoConElConsoleLog es:" + cuidadoConElConsoleLog("Fer");
}

function cuidadoConElReturn(nombre){
    return nombre;
    console.log(nombre); // No se ejecuta porque el return obliga a salir de la función
}