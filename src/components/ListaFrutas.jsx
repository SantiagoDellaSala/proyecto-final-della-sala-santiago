function ListaFrutas({ frutas }) {
    return (
        <div>
            <h2>Lista de frutas</h2>
            <ul>
                {frutas.map((fruta, index) => (
                    <li key={index}>{fruta}</li>
                ))}
            </ul>
        </div>
    );
}

export default ListaFrutas;
