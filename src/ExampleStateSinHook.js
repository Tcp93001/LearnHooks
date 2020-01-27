import React, { Component } from "react";

class ExampleState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numeroA: 0,
      numeroB: 0
    }
    this.handleChangeA = this.handleChangeA.bind(this)
    this.handleChangeB = this.handleChangeB.bind(this)
  }

  handleChangeA = event => {
    this.setState({ numeroA: event.target.value })
  }

  handleChangeB = event => {
    this.setState({ numeroB: event.target.value })
  }

  render() {
    return (
      <div style={{ width: "29%", border: "1px solid blue", padding: 10 }}>
        <p>Ejemplo 2</p>
        <br />
        <p>Número A</p>
        <input
          value={numeroA}
          // onChange={this.handleChangeA}
        />
        <p>Numero B</p>
        <input
          value={numeroB}
          // onChange={this.handleChangeB}
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
  }
};

export default ExampleState;
