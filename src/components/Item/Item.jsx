import ItemCount from "./ItemCount/ItemCount";
import {Link} from "react-router-dom"
import { useState } from "react";
import { useCartContext } from "../../context/cartContext";

function Item({data}){
    const [goToCart, setGoToCart] = useState(false);
    const {addItem} = useCartContext();
    const [count, setCount] = useState(1);

    const onAdd = () => {
        setGoToCart(true)
        const {id, image, title, price} = data
        addItem( {id, image, title, price}, count);
    }

    return(
        <div className="card" style={{width: '18rem'}}>
            <img src={data.image} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h3 className="card-title">{data.title}</h3>
                <h4 className="text-muted">${data.price}</h4>
                <ItemCount count={count} setCount={setCount} stock={data.stock}/>
                <button onClick={onAdd} className="btn btn-dark">Añadir al Carrito</button>
                <Link to={`/detalle/${data.id}`}>
                    <button style={{marginLeft: "0.5rem"}}className="btn btn-light">Ver Detalle</button>
                </Link>
            </div>
        </div>
    )
}

export default Item;