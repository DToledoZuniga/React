import React from 'react';
import { Link } from 'react-router-dom';

export default function ErrorItem() {
    return <div>
        <h1>No se encontro el producto seleccionado</h1>
        <Link to='/'>
            <button className="vaciarCarrito">Ver Productos</button>
        </Link>
    </div>;
}
