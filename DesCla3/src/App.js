import logo from './logo.svg';
import './App.css';
import NavBar from './component/NavBar';
import ItemListContainer from './component/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer nombre='Diego' />
    </div>
  );
}

export default App;
