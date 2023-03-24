import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar/NavBar';
import ItemsListContainer from './components/ItemsListContainer/ItemListContainer';
import CartWidget from './components/CartWidget/CartWidget';
import Titulo from './components/Titulo/titulo';
import Footer from './components/Footer/Footer';




function App() {
  return (

    <div className="App">
      <div className='titulo'>
        <Titulo />
      </div>
      <div className='barraNav'>
        <NavBar />
      </div>
      <div className='body'>
        <ItemsListContainer saludo={"Bienvenidos como va!"}>
          <> 
           <ul>
            <li>Lista</li>
            <li>Lista</li>
            <li>Lista</li>
           </ul>
          </>
        </ItemsListContainer>

        
      </div>
      <div className='carrito'>
        <CartWidget />
      </div>
      <div className='footer'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
