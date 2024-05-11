import React, { useState } from "react";

function InputDeTarea({ agregarTarea }) {
  const [valorInput, setValorInput] = useState("");

  const manejarAgregarTarea = () => {
    agregarTarea(valorInput);
    setValorInput("");
  };

  return (
    <div>
      <input
        type="text"
        value={valorInput}
        onChange={(e) => setValorInput(e.target.value)}
        placeholder="Añadir una nueva tarea"
      />
      <button onClick={manejarAgregarTarea}>Agregar</button>
    </div>
  );
}

export default InputDeTarea;
