// function Item(props) {
//   return (
//     <div>
//       <img src="" alt="" />
//       <h3>{props.title}</h3>
//       <h4>{props.price}</h4>
//       <small>{props.description}</small>
//     </div>
//   );
// }


import "./ItemListContainer.css"



const Item = (props) => {
  return(
    <div className="card">
      <img src={props.image} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h3 className="card-title">{props.title}</h3>
        <p className="card-text">{props.description}</p>
        <h4 className="card-text">{props.price}</h4>
        <button className="btn btn-dark">Añadir al Carrito</button>
      </div>
    </div>
  )
}

export default Item;

