import Boton from './components/Boton';
import Saludo from './components/Saludo';
import ListaFrutas from './components/ListaFrutas';
import Tarjeta from './components/Tarjeta';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const frutas = ['manzana', 'pera', 'banana']; 
  return (   
    <>
    <Saludo/>
    <Boton/>
    <ListaFrutas frutas={frutas}/>
    <Tarjeta
        titulo="Oferta especial"
        descripcion="20% de descuento en todos los productos"
        botonTexto="Ver más"
      />
    </>
  )
}

export default App
