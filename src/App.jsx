import React, { useState } from "react";
import "./App.css";

const Contador = () => {
  const [count, setCount] = useState(0);

  const incrementarContador = () => {
    setCount(count + 1);
  };

  const resetarContador = () => {
    setCount(0);
  };

  return (
    <div className="container">
      <div className="card">
        <h1 className="titulo">
          Contador <span className="devstart">DEVstart</span>
        </h1>

        <div className="contador-display">
          <p className="contador-label">Contagem atual</p>
          <p className="contador-numero">{count}</p>
        </div>

        <button
          onClick={incrementarContador}
          className="botao botao-incrementar"
        >
          Clique aqui
        </button>

        {count > 0 && (
          <>
            <button onClick={resetarContador} className="botao botao-resetar">
              Resetar
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Contador;
