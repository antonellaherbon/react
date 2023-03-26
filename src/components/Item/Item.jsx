import "./ItemListContainer.css" 
import ItemCount from "./ItemCount";
import {Link} from "react-router-dom"


function Item(props){
    

    return(
        <div className="card">
            <img src={props.image} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h3 className="card-title">{props.title}</h3>
                <h4 className="text-muted">{props.price}</h4>
                <ItemCount stock={props.stock}/>
                <button className="btn btn-dark">Añadir al Carrito</button>
                <Link to={`/detalle/${props.id}`}>
                    <button style={{marginLeft: "0.5rem"}}className="btn btn-light">Ver Detalle</button>
                </Link>
            </div>
        </div>
    )
}

export default Item;