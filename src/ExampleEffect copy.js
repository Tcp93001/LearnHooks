import React, { useState, useEffect } from "react";

export default function Example() {
  const [secondCount, setSecondCount] = useState(0);
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    console.log("count", count);
    document.title = `You clicked ${count} times`;
  });

  useEffect(() => {
    // Update the document title using the browser API
    console.log("secondCount", secondCount);
    document.title = `You clicked ${secondCount} times`;
  });

  return (
    <div style={{ width: "29%", border: "1px solid red", padding: 10 }}>
      <p>Reto 1</p>
      <br />
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me... </button>
      <p>You clicked {secondCount} times</p>
      <button onClick={() => setSecondCount(secondCount + 1)}>
        ...then click me
      </button>
      <p>Haz clic para </p>
      <button
        onClick={() => {
          setSecondCount(0);
          setCount(0);
        }}
      >
        Borrar contadores
      </button>
    </div>
  );
}
