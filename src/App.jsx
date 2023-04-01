import React from 'react';
import './App.css';
import ItemListContainer from "./components/Item/ItemListContainer/ItemListContainer"
import NavBar from './components/NavBar/NavBar';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ItemDetail from "./components/Item/ItemDetail/ItemDetail"
import { CartProvider, cartContext } from './context/cartContext';
import CartContent from './components/CartContent/CartContent';


function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar color = "white"/>
          <Routes>
            <Route path='/' element={ <ItemListContainer />} />
            <Route path='/category/:categoryid' element={<ItemListContainer/>}/>
            <Route path='/detalle/:id' element={<ItemDetail/>}/>
            <Route path='/cart' element={CartContent}/>
            {/* <Route path='*' element={<h1>Error 404</h1>}/> */}
          </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
