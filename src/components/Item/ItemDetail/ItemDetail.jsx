import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { getSingleItem } from "../../../service/database";

const ItemDetail = (props) => {
    const [disco, setDisco] = useState({})
    const {id} = useParams();

    useEffect(() => {
        getSingleItem(id).then((respuesta) => {
            setDisco(respuesta)
        })
    }, [])
    

    return(
        disco && disco.title ? 
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <img src={disco.image} style={{width: '675px', height: '675px', padding: '2%' }} alt="..."></img>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <div style={{padding: '2%', marginLeft: '6%'}}>
                            <h1 style={{textAlign: 'center', marginTop: '6%', fontWeight: '700'}}>{disco.title}</h1>
                            <h2 style={{textAlign: 'center', paddingLeft: '5%', fontWeight: '300'}}>Artista: {disco.artista}</h2>
                            <h3 style={{textAlign: 'center', padding: '%1', fontWeight: '100'}}>{disco.description}</h3>
                            <h4 className="text-muted" style={{textAlign: 'center', padding: '%1', fontWeight: '100'}}>Precio: ${disco.price}</h4>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <iframe src={disco.spotify}></iframe>
                </div>
            </div>
        : 
            <div>No se encontro el disco</div>)
    
}
        
export default ItemDetail;