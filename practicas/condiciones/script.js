/* Solicitar un numero entre 1 y 10 al usuario, si el numero es mayor a 10 O menor a 1 deberemos decir por alerta 'Dato incorrecto' caso contrario decir 'dato correcto' */


/* let edad = prompt("ingrese un numero del 1 al 10")
/*  alert("su resultado es: " + edad)*/
/* 
if (edad <= 1 || edad >= 10){
    alert("dato incorrecto")
}
else{
    alert("dato correcto")
}  
*/ 
/******************************************************* */
/* calcularIva(numero) y mostrara por consola el 21% del numero recibido

x_numero * 0.21
*/

/* function x_numero (numero1){
    return numero1
    
} */

//***************************************************************************** */
/* 
Dado este array de nombres generar este array de objetos (USANDO MAP)
*/

const nombres = ["pepe", "marcos", "ariel"]

const arrayObjeto = nombres.map(
    (nombres) => {
        return {nombre: + nombres}
    }
)

console.log(arrayObjeto)

