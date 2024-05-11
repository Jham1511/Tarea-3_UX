import React from "react";

function ElementoDeTarea({ tarea, alternarCompletada }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={tarea.completada}
        onChange={() => alternarCompletada(tarea.id)}
      />
      <span className={tarea.completada ? "completada" : ""}>{tarea.texto}</span>
    </li>
  );
}

export default ElementoDeTarea;