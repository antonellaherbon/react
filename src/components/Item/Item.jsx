import "./ItemListContainer.css" 
import ItemCount from "./ItemCount";


function Item(props){
    return(
        <div className="card">
            <img src={props.image} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h3 className="card-title">{props.title}</h3>
                <p className="card-text">{props.description}</p>
                <h4 className="card-text">{props.price}</h4>
                <ItemCount stock={props.stock}/>
                <button className="btn btn-dark">Añadir al Carrito</button>
            </div>
        </div>
    )
}

export default Item;