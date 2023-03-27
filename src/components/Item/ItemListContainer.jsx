import React, { useState, useEffect } from "react";
import "./ItemListContainer.css"
import "../Flex/Flex"
import Flex from "../Flex/Flex"
import Item from "./Item"
import discos from "../../discos" 
import { useParams } from "react-router-dom";


function getItems() {
  const promesa = new Promise((resolve) => {
    setTimeout(() => {
      resolve(discos)
    }, 1000)
  });

  return promesa
}

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
      {discosFiltrados.length == 0 ? "Estamos cargando los discos..." : discosFiltrados.map((producto) => 
        <Item
          stock={producto.stock}
          key={producto.id}
          id = {producto.id}
          title = {producto.title}
          price= {producto.price}
          description = {producto.description}
          category={producto.category}
          image= {producto.image}
        />
      )}
    </Flex> )
  
}

export default ItemListContainer;

