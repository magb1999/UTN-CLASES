/* arrays */
/* sirven:
    listas elementos
*/


/* const lsitaNumeros = [2,3,3]*/

//const diasQuePagueATiempo = [true, true, false, true]

//const arrayRandom =[2, "pepe", "false"]


/* indice/index: la posicion de un elemento en array */

//const nombres = ["pepe", "juan", "maria"]
//                 0        1       2
//si quiero llamar a maria deberia concer su posicion
//console.log(nombres[2])

/* const tateti = [
    ["X", " ", "O"],
    ["O", "X", " "],
    ["O", " ", "X"]
]

console.log(tateti[1][1]) */


const nombres = ["pepe", "juan", "maria"]
for(let indice = 0; indice <= 3; indice = indice + 1){
    console.log("valor indice " + indice)
    console.log("elemento en la posicion " + indice + "es " + nombres[indice])
}
