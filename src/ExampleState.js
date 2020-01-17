import React, { useState } from "react";

const ExampleState = () => {
  const [numeroA, actNumeroA] = useState(0);
  const [numeroB, actNumeroB] = useState(0);

  return (
    <div style={{ width: "29%", border: "1px solid blue", padding: 10 }}>
      <p>Ejemplo 2</p>
      <br />
      <p>Número A</p>
      <input
        value={numeroA}
        // onChange={event => actNumeroA(+event.target.value)}
      />
      <p>Numero B</p>
      <input
        value={numeroB}
        // onChange={event => actNumeroB(+event.target.value)}
      />

      <p>La suma de los números es: {numeroA + numeroB}</p>
      <button
        onClick={() => {
          // inserta actualización de datos
        }}
      >
        Borrar contadores
      </button>
    </div>
  );
};

export default ExampleState;
