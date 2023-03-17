import CartWidget from "../CardWidget/CartWidget";
const NavBar = () => {
    return (
        <nav>
            <h3>E-Commerce</h3>
            <div className="navbar">
                <button>Jeans</button>
                <button>Pantalones</button>
                <button>Remeras</button>
            </div>
            <CartWidget />

        </nav>

    )
}

export default NavBar