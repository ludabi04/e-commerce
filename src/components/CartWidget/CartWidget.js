import carrito from './assets/carrito.svg'
import './CartWidget.css'

const CartWidget = () => {
    return (
        <div className='carritoCounter'>
            <img src={carrito} alt="" className='imagenCarrito' />
            <p>0 </p>
        </div>
    )
}

export default CartWidget 