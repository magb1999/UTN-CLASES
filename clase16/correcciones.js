/* Practica de funciones y bucles:
--1--Crear una funcion llamada sumatoria(cantidad) que recibira un numero llamado cantidad y la funcion solicitara la cantidad de numeros que se indique en el parametro cantidad y los sumara

Ejemplo:
sumatoria(2) solicitara 2 numeros y los acumulara, dara como valor de retorno la suma de los 2 numeros
Si el primer numero es 3 y el segundo 2, el retorno de la funcion debe ser 5
*/
/*
--2--Crear una funcion llamada saludar(nombre), dicha funcion recibira un nombre y retornara un string que sea 'hola {nombre}'
Ejemplo:
saludar('pepe') retornara el string 'hola pepe'

--3--Crear una funcion llamada seleccionar, la misma recibira un string y retornara un valor en base al string recibido
las opciones validas son:
'sumar', '+', 'add' retornara 'SUMAR'
'restar', '-', 'subtract' retornara 'RESTAR'
'multiplicar', '*', 'multiply' retornara 'MULTIPLICAR'
Si no es ninguna de las anteriores debe retornar null */



/*
--1--
-tiene que ser una funcion que recibe un paremetro numerico y este parametro es la cantidad de veces que debo solicitar un numero
-a medida que voy solicitadon numeros debere ir acumulandolos
*/


function sumatoria (){
    let aculador = 0

    for(let contador = 1; conador <= cantidad; contador = contador +1){
        let numeroIngresado = Number(prompt("ingrese un numero"))
        acumulador = acumulador + numeroIngresado
    }

    return acumulador
}


/* --2-- */
function saludar(Nombre) {
    return("Hola" + Nombre + "!")
}


/* --3-- */

/* declarado la funcion seleccionar */
function seleccionar(opcion) {

    let resultado = null

    if (opcion === 'sumar' || opcion === '+' || opcion === 'add') {
        return 'SUMAR'
    } else if (opcion === 'restar' || opcion === '-' || opcion === 'subtract') {
        return 'RESTAR'
    } else if (opcion === 'multiplicar' || opcion === '*' || opcion === 'multiply') {
        return 'MULTIPlICAR'
    }

    return null
}


/* Invocando (solo sucede si exste la funcion (osea que fue declarada)) */
/* let resultado = seleccionar("multiplay")
console.log(resultado) */