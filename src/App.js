import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ExampleEffect from "./ExampleEffect";
import ExampleState from "./ExampleState";
import ExampleLifeCycles from "./ExampleLifeCycles";
import WhitePage from "./WhitePage";
import { BrowserRouter, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <BrowserRouter>
          <Route exact path="/">
            <ExampleLifeCycles />
          </Route>
          <Route path="/unmount">
            <WhitePage />
          </Route>
          <Route path="/hooks">
            <ExampleState />
            <ExampleEffect />
          </Route>
          <div style={{ width: "29%", border: "1px solid peru", padding: 10 }}>
            <p>
              <Link to="/">Clic para Ejercicio Inicial</Link>
            </p>
            <p>
              <Link to="/unmount">Clic para Unmount</Link>
            </p>
            <p>
              <Link to="/hooks">Clic para ejercicio Hooks</Link>
            </p>
          </div>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
