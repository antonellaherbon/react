const Button = () => {
    function handleClick(){
        alert("clickeaste");
    }

        return(
            <button onClick={handleClick}>Click Me</button>
        );
}

export default Button