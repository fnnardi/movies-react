import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App";


// function Componente({titulo, children}){
//  // const titulo = prop.titulo;
//   //const contenido = prop.contenido;
//   //const {titulo, contenido} = prop;
//   return (
//     <div>
//       <h1>{titulo}</h1>
//       <div>{children}</div>
//     </div>
//   )
// }

ReactDOM.render(<App />, document.getElementById("root"));
