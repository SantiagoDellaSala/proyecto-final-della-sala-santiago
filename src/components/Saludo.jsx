import { Alert } from 'react-bootstrap';
import './components.css';

function Saludo() {
  return (
    <Alert variant="success" className="text-center">
      <h1>Gracias por visitar mi web</h1>
    </Alert>
  );
}

export default Saludo;