import React from 'react'


/*las funciones que devuelven HTML(o mejor dicho JSX) las llamaremos componentes */

function App() {
  

  return (
    <div>
      <Titulo/>
      <Titulo/>
      <Titulo/>
    </div>
  )
}
/*COMPONENTES
-las funciones que devuelven HTML(o mejor dicho JSX) las llamaremos componentes
-los compnentes deben ser llamados en mayuscula
-los compnentes pueden ser creados con function o arrow funciton
-para retornar JSX(html) se recomienda poner return(salto de linea)
-para usar el componente debemos llamarlo donde lo queramos usar pero como si fuera una etiqueta
  */
const Titulo = () =>{
  let Nombre = "pepe"
  return (
  <h1>Soy un titulo {Nombre}</h1>
  )
}

export default App
