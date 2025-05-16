import React, { useState } from 'react';
import './components.css';

function Boton() {

  const [colorRojo, setColorRojo] = useState(false);

  const manejarClick = () => {
    alert('Presionado');

    setColorRojo(true);
  };

  return (
    <div>
      <button className="btn-ejercicio1" onClick={manejarClick}>
        Presioname
      </button>
      <ul>
        <li className={colorRojo ? 'rojo' : ''}>Manzana</li>
        <li className={colorRojo ? 'rojo' : ''}>Pera</li>
        <li className={colorRojo ? 'rojo' : ''}>Banana</li>
      </ul>
    </div>
  );
}

export default Boton;
