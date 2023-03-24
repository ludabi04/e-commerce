import './ItemListContainer.css'


const ItemsListContainer = (props) => {
    return (
        <div>
            <h1>{props.saludo}</h1>
            {props.children}
        </div>

    )
}

export default ItemsListContainer