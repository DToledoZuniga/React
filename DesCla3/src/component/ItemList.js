import Item from './Item'
import './Item.css';


function ItemList(props) {
    
    return (
        <div className='divProductos'>
            {props.productos.map(prod => <Item key={prod.id} producto={prod} />)}
        </div>
    )
}

export default ItemList