import { useState } from "react";
import "./FormCheckout.css"
export default function FormCheckout({onCheckout}) {
    
    const [userData, setUserData] = useState({
        username: "",
        email: "",
        phone: ""
    });
    console.log("User Data", userData);

    function handleInputChange(evt) {
        const inputText = evt.target.value;
        const inputName = evt.target.name;
        const newUserData = { ...userData };
        newUserData[inputName] = inputText;
        setUserData(newUserData);
    }
    function onSubmit(evt) {
        evt.preventDefault();
        onCheckout(userData)
        console.log(
            `Your name is ${userData.username}, your mail is ${userData.email} and you your phone is ${userData.phone}`
        );
    }

    function clearFormData(evt) {
        evt.preventDefault();
        setUserData({
            username: "",
            email: "",
            phone: ""
        });
    }

    return (
    <>
        <form className="form-comtainer">
            <h1>¡Estas a un segundo de finalizar tu compra!</h1>
            <h2>Ingresa tus datos para completar la compra</h2>
            <div className="form-group">
                <label className="label-input">Nombre</label>
                <input className="datos"
                value={userData.username}
                name="username"
                type="text"
                onChange={handleInputChange}
            />
        </div>
        <div className="form-group">
            <label className="label-input">Email</label>
            <input className="datos"
            value={userData.email}
            name="email"
            type="text"
            onChange={handleInputChange}
            />
        </div>
        <div className="form-group">
            <label className="label-input">Teléfono</label>
            <input required className="datos"
            value={userData.phone}
            name="phone"
            type="text"
            onChange={handleInputChange}
        />
        </div>
        <div className="button-container">
            <button onClick={onSubmit} type="submit">
            Enviar Datos
            </button>
            <button onClick={clearFormData}>Cancelar</button>
        </div>
    </form>
    </>
    );
}
