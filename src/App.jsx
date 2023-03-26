import './App.css';
import ItemListContainer from "./components/Item/ItemListContainer"
import NavBar from './components/NavBar/NavBar';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ItemDetail from "./components/Item/ItemDetail"

function App() {
  return (
    <BrowserRouter>
      <NavBar color = "white"/>
      <Routes>
        <Route path='/' element={ <ItemListContainer />} />
        <Route path='/category/:categoryid' element={<ItemListContainer/>}/>
        <Route path='/detalle/:id' element={<ItemDetail/>}/>
        {/* <Route path='*' element={<h1>Error 404</h1>}/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
