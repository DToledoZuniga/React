import './App.css';
import NavBar from './component/NavBar';
import ItemListContainer from './component/ItemListContainer';
import ItemDetailContainer from './component/ItemDetailContainer';
import Cart from './component/Cart';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { CartContextProvider } from './context/CartContext';

function App() {
    return (
        <CartContextProvider>
            <BrowserRouter>
                <div className="App">
                    <NavBar />
                    <Routes>
                        <Route exact path='/' element={<ItemListContainer />} />
                        <Route exact path='/categoria/:idCategoria' element={<ItemListContainer  />} />
                        <Route exact path='/detalle/:idDetalle' element={<ItemDetailContainer />} />
                        <Route exact path='/cart' element={<Cart />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </CartContextProvider>
    )
}

export default App;
