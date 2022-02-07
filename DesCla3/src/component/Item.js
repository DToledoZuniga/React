import './Item.css';
import {Link} from 'react-router-dom'

function Item(props) {
    return (
        <div key={props.producto.id} className='divProductoUnitario'>
            <center>
                <div className='divProd'>
                    <div className='divCabecera'>
                        {props.producto.marca} {props.producto.nombreCorto}
                    </div>
                    <div >
                        <img className='imagenProducto' src={props.producto.url} />
                        <label className='precioProd'>${props.producto.precio}</label> 
                    </div>
                    <div>
                        <Link to={`/detalle/${props.producto.id}`}>
                            <button className='botonProd'> Detalle Producto </button>
                        </Link>
                    </div>
                </div>
            </center>
            <br/>
        </div>
    )
}

export default Item