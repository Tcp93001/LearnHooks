import React, { useState, useEffect } from "react";

export default function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`
  })

  return (
    <div style={{ width: "29%", border: "1px solid red", padding: 10 }}>
      <p>Ejemplo 3</p>
      <br />
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me... </button>
      <p>Haz clic para </p>
      <button
        onClick={() => {
          setCount(0);
        }}
      >
        Borrar contador
      </button>
    </div>
  );
}

 // const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  // useEffect(() => {
  //   // Update the document title using the browser API
  //   console.log("count", count);
  //   document.title = `You clicked ${count} times`;
  // });
