import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar/NavBar';
import ItemsListContainer from './components/ItemsListContainer/ItemsListContaines';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemsListContainer hola={'Bienvendios'} />
    </div>
  );
}

export default App;
