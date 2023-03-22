import './App.css';
import ItemListContainer from "./components/Item/ItemListContainer"
import NavBar from './components/NavBar/NavBar';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Item from './components/Item/Item';

function App() {
  return (
    <BrowserRouter>
      <NavBar color = "white"/>
      <Routes>
        <Route path='/' element={ <ItemListContainer />} />
        <Route path='/category/:categoryid' element={<ItemListContainer/>}/>
        <Route path='/item/:id' element={<Item/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
