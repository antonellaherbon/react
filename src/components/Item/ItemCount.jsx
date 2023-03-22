import React, { useState } from "react";
import "./ItemCount.css"

export default function ItemCount(props) {
    const [count, setCount] = useState(1);

    const stock = props.stock;

    function handleAdd(){
        setCount(count + 1)
    }

    function handleSubstract(){
        setCount(count-1)
    }

    return (
        <div className="itemCount">
            <button className="botonContador" onClick={handleSubstract} disabled={count===1}>-</button>
            <span> {count} </span>
            <button className="botonContador" onClick={handleAdd} disabled={count===stock}>+</button>
        </div>
    );
}