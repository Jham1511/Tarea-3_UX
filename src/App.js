import React from "react";
import ListaDeTareas from "./atoms/ListaDeTareas";
import "./App.css";

function App() {
  return (
    <div className="contenedor">
      <h1>Lista de Tareas</h1>
      <ListaDeTareas />
    </div>
  );
}

export default App;