import React from 'react';

function Resumen(props) {
    
    return <div>
        <h1>Estimad@ {props.comprador.nombre}, tu compra se realizó correctamente.</h1>
        <h2>ID de tu Compra: {props.idCompra}</h2>
        <h2>Total : $ {props.total}</h2>
        <br />
        <img src='https://troquelando.com/wp-content/uploads/2021/01/Gracias-por-tu-compra-redondo.png'></img>
    </div>;
}

export default Resumen;
