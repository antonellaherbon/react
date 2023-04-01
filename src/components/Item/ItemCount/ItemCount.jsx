import React from "react";
import "./ItemCount.css"

export default function ItemCount({stock, count, setCount}) {

    function handleAdd(){
        setCount(count + 1)
    }

    function handleSubstract(){
        setCount(count-1)
    }

    return (
        <div className="itemCount">
            <button className="botonContador" onClick={handleSubstract} disabled={count===1}>-</button>
            <span className="contador"> {count} </span>
            <button className="botonContador" onClick={handleAdd} disabled={count===stock}>+</button>
        </div>
    );
}