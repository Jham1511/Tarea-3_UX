import React from "react";

function ElementoDeTarea({ tarea, alternarCompletada, eliminarTarea }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={tarea.completada}
        onChange={() => alternarCompletada(tarea.id)}
      />
      <span className={tarea.completada ? "completada" : ""}>{tarea.texto}</span>
      <button onClick={() => eliminarTarea(tarea.id)}>Eliminar</button>
    </li>
  );
}

export default ElementoDeTarea;
