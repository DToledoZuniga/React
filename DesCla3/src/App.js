import logo from './logo.svg';
import './App.css';
import NavBar from './component/NavBar';
import ItemListContainer from './component/ItemListContainer';
import ItemDetailContainer from './component/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer nombre='Diego' />
      <ItemDetailContainer />
    </div>
  );
}

export default App;
