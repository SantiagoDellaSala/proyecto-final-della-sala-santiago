function Tarjeta({ titulo, descripcion, botonTexto }) {
    return (
        <div className="tarjeta" style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '8px', width: '250px' }}>
            <h3>{titulo}</h3>
            <p>{descripcion}</p>
            <button className="btn btn-primary">{botonTexto}</button>
        </div>
    );
}

export default Tarjeta;
