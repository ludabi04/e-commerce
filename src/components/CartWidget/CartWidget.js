import carrito from './assets/carrito.svg'
const CartWidget = () => {
    return (
        <div>
            <img src={carrito} alt="" className='imagenCarrito' />
            0
        </div>
    )
}

export default CartWidget