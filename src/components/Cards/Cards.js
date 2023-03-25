import pantalon from './assets/pantalon.svg'
import carrito from './assets/carrito.svg'
import './Cards.css'
import { useState } from 'react'



const Cards = () => {
    const [contador, setContador] = useState(0);
  
    function incrementar() {
      setContador(contador + 1);
    }
    function descontar () {
      setContador(contador -1)
    }
    return (
        <>   
        <div className='carritoCounter'>
            <img src={carrito} alt="" className='fotoCarrito' />
            <p className='contadorCarrito'>{contador} </p>
        </div>
        <div className='plantillaCards'>
        <div className='card'>
            <img src={pantalon} alt="" />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, eum maxime? Reiciendis culpa, dicta iure asperiores corrupti natus consectetur distinctio nostrum impedit, repellat praesentium vitae minus dignissimos animi nemo aut?</p>
            <div className='carritoCompras'>
                <button onClick={incrementar} className="botonSuma">+</button>
                <img src={carrito} alt="" className='imgCarrito'/>
                <button onClick={descontar} className="botonResta">-</button>
            </div>
        </div>
        <div className='card'>
            <img src={pantalon} alt="" />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, eum maxime? Reiciendis culpa, dicta iure asperiores corrupti natus consectetur distinctio nostrum impedit, repellat praesentium vitae minus dignissimos animi nemo aut?</p>
            <div className='carritoCompras'>
                <button onClick={incrementar} className="botonSuma">+</button>
                <img src={carrito} alt="" className='imgCarrito'/>
                <button onClick={descontar} className="botonResta">-</button>
            </div>
        </div>
        <div className='card'>
            <img src={pantalon} alt="" />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, eum maxime? Reiciendis culpa, dicta iure asperiores corrupti natus consectetur distinctio nostrum impedit, repellat praesentium vitae minus dignissimos animi nemo aut?</p>
            <div className='carritoCompras'>
                <button onClick={incrementar} className="botonSuma">+</button>
                <img src={carrito} alt="" className='imgCarrito'/>
                <button onClick={descontar} className="botonResta">-</button>
            </div>
        </div>
        <div className='card'>
            <img src={pantalon} alt="" />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, eum maxime? Reiciendis culpa, dicta iure asperiores corrupti natus consectetur distinctio nostrum impedit, repellat praesentium vitae minus dignissimos animi nemo aut?</p>
            <div className='carritoCompras'>
                <button onClick={incrementar} className="botonSuma">+</button>
                <img src={carrito} alt="" className='imgCarrito'/>
                <button onClick={descontar} className="botonResta">-</button>
            </div>
        </div>
        <div className='card'>
            <img src={pantalon} alt="" />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, eum maxime? Reiciendis culpa, dicta iure asperiores corrupti natus consectetur distinctio nostrum impedit, repellat praesentium vitae minus dignissimos animi nemo aut?</p>
            <div className='carritoCompras'>
                <button onClick={incrementar} className="botonSuma">+</button>
                <img src={carrito} alt="" className='imgCarrito'/>
                <button onClick={descontar} className="botonResta">-</button>
            </div>
        </div>
        <div className='card'>
            <img src={pantalon} alt="" />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, eum maxime? Reiciendis culpa, dicta iure asperiores corrupti natus consectetur distinctio nostrum impedit, repellat praesentium vitae minus dignissimos animi nemo aut?</p>
            <div className='carritoCompras'>
                <button onClick={incrementar} className="botonSuma">+</button>
                <img src={carrito} alt="" className='imgCarrito'/>
                <button onClick={descontar} className="botonResta">-</button>
            </div>
        </div>
        <div className='card'>
            <img src={pantalon} alt="" />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, eum maxime? Reiciendis culpa, dicta iure asperiores corrupti natus consectetur distinctio nostrum impedit, repellat praesentium vitae minus dignissimos animi nemo aut?</p>
            <div className='carritoCompras'>
                <button onClick={incrementar} className="botonSuma">+</button>
                <img src={carrito} alt="" className='imgCarrito'/>
                <button onClick={descontar} className="botonResta">-</button>
            </div>
        </div>
        <div className='card'>
            <img src={pantalon} alt="" />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, eum maxime? Reiciendis culpa, dicta iure asperiores corrupti natus consectetur distinctio nostrum impedit, repellat praesentium vitae minus dignissimos animi nemo aut?</p>
            <div className='carritoCompras'>
                <button onClick={incrementar} className="botonSuma">+</button>
                <img src={carrito} alt="" className='imgCarrito'/>
                <button onClick={descontar} className="botonResta">-</button>
            </div>
        </div>
   
        </div>
        </>

        
    )
}


export default Cards