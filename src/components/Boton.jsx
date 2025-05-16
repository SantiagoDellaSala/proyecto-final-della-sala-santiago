import React from 'react';
import './components.css';

function Boton() {
  const manejarClick = () => {
    alert('Presionado');
  };

  return (
    <button className="btn-ejercicio1" onClick={manejarClick}>
      Presioname
    </button>
  );
}

export default Boton;
