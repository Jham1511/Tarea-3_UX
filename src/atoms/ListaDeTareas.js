import React, { useState, useEffect } from "react";
import ElementoDeTarea from "./ElementoDeTarea";
import InputDeTarea from "./InputDeTarea";

function ListaDeTareas() {
  const [tareas, setTareas] = useState([]);

  useEffect(() => {
    const storedTareas = JSON.parse(localStorage.getItem("tareas")) || [];
    setTareas(storedTareas);
  }, []);

  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareas));
  }, [tareas]);

  const listaTareas = (lista) => {
    localStorage.setItem('listaTareas', JSON.stringify(lista));
  };

  const agregarTarea = (texto) => {
    if (texto.trim() !== "") {
      const nuevaTarea = {
        id: Date.now(),
        texto: texto,
        completada: false,
      };
      const nuevasTareas = [...tareas, nuevaTarea];
      setTareas(nuevasTareas);
      listaTareas(nuevasTareas); 
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
    listaTareas(tareasActualizadas); 
  };

  const eliminarTarea = (id) => {
    const tareasActualizadas = tareas.filter((tarea) => tarea.id !== id);
    setTareas(tareasActualizadas);
    listaTareas(tareasActualizadas); 
  };

  const eliminarTodasLasTareas = () => {
    setTareas([]);
    listaTareas([]); 
  };

  const eliminarTareasCompletadas = () => {
    const tareasSinCompletar = tareas.filter((tarea) => !tarea.completada);
    setTareas(tareasSinCompletar);
    listaTareas(tareasSinCompletar); 
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
      <button onClick={eliminarTodasLasTareas}>Eliminar todas las tareas</button>
      <button onClick={eliminarTareasCompletadas}>Eliminar tareas completadas</button>
    </div>
  );
}

export default ListaDeTareas;