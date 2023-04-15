import React, { useState, useEffect } from "react";
import "./ItemListContainer.css"
import "../../Flex/Flex"
import Flex from "../../Flex/Flex"
import Item from "../Item"
import { useParams } from "react-router-dom";
import { getItems } from "../../../service/database";

const ItemListContainer = (props) => {
  const [listadoDiscos, setListadoDiscos] = useState([])

  let {categoryid} = useParams()
  
  useEffect(() => {
    async function fetchData() {
        const discosObtenidos = await getItems()
        setListadoDiscos(discosObtenidos)
      }
      fetchData();
  }, []) 

  let discosFiltrados = listadoDiscos

  if (categoryid){
    discosFiltrados = listadoDiscos.filter((disco) => 
      categoryid === disco.category
    )
  }

  return(
    <Flex>
      {discosFiltrados.length === 0 ? "Estamos cargando los discos..." : discosFiltrados.map((producto) => 
        <Item
        key={producto.id}
        data={producto}
        />
      )}
    </Flex> )
  
}

export default ItemListContainer;

