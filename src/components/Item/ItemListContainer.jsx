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

const Item = (props) => {
  return(
    <h2 style={{color: props.color}}>
      {props.text}
    </h2>
  )
}
export default Item;
