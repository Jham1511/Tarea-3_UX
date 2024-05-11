import React, { useState, useEffect } from "react";
import ElementoDeTarea from "./ElementoDeTarea";
import InputDeTarea from "./InputDeTarea";

function ListaDeTareas() {
  const [tareas, setTareas] = useState([]);

  useEffect(() => {
    const tareasGuardadas = JSON.parse(localStorage.getItem("tareas")) || [];
    setTareas(tareasGuardadas);
  }, []);

  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareas));
  }, [tareas]);

  const agregarTarea = (texto) => {
    if (texto.trim() !== "") {
      const nuevaTarea = {
        id: Date.now(),
        texto: texto,
        completada: false,
      };
      setTareas([...tareas, nuevaTarea]);
    }
  };

  const alternarCompletada = (id) => {
    const tareasActualizadas = tareas.map((tarea) => {
      if (tarea.id === id) {
        return { ...tarea, completada: !tarea.completada };
      }
      return tarea;
    });
    setTareas(tareasActualizadas);
  };

  const eliminarTarea = (id) => {
    const tareasActualizadas = tareas.filter((tarea) => tarea.id !== id);
    setTareas(tareasActualizadas);
  };

  return (
    <div>
      <InputDeTarea agregarTarea={agregarTarea} />
      <ul>
        {tareas.map((tarea) => (
          <ElementoDeTarea
            key={tarea.id}
            tarea={tarea}
            alternarCompletada={alternarCompletada}
            eliminarTarea={eliminarTarea}
          />
        ))}
      </ul>
    </div>
  );
}

export default ListaDeTareas;
