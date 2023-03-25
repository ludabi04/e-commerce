import carrito from './assets/carrito.svg'
import './CartWidget.css'
import { useState } from 'react';

function CartWidget(props) {
    const [contador, setContador] = useState(0);
  
    function incrementar() {
      setContador(contador + 1);
    }
    function descontar () {
      setContador(contador -1)
    }
  
    return (
      
        <div className='carritoCounter'>
            <img src={carrito} alt="" className='imagenCarrito' />
            <p>{contador} </p>
        
        <button onClick={incrementar}>+</button>
        <button onClick={descontar}>-</button>

      </div>
    );
  }
export default CartWidget 