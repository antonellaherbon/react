import logo from './logo.svg';
import './App.css';
import Item from "./components/Item/ItemListContainer"
import NavBar from './components/NavBar/NavBar';
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <div className="App">
      <NavBar color="white"/>
      <header className="App-header">
        <Item color="black" text="Bienvenidos a un E-Commerce de musica"/>
      </header>
    </div>
  );
}

export default App;
