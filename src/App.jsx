import logo from './logo.svg';
import './App.css';
import Item from "./components/Item/ItemListContainer"
import NavBar from './components/NavBar/NavBar';
import "bootstrap/dist/css/bootstrap.min.css";
import ItemGreeting from "./components/Item/ItemGreeting"
import Flex from './components/Flex/Flex';

function App() {
  return (
    <div className="App">
      <NavBar color="white"/>
      <header className="App-header">
        <ItemGreeting color="black" text="Bienvenidos a un E-Commerce de musica"/>
        <Flex>
          <Item 
            image="https://akamai.sscdn.co/uploadfile/letras/albuns/a/5/c/f/1398201666349375.jpg"
            title="Midnights"
            price="$2500"
            description="album Taylor"
          />
          <Item 
            image="https://i0.wp.com/elgeneracionalpost.com/wp-content/uploads/2021/11/portada-articulo.jpg?fit=829%2C833&ssl=1"
            title="Red"
            price="$1000"
            description="album Taylor"
          />
          <Item 
            image="https://m.media-amazon.com/images/I/61ur3nQ+-mL._AC_SL1500_.jpg"
            title="Harry´s House"
            price="$2000"
            description="album Harry Styles"
          />
        </Flex>
      </header>
    </div>
  );
}

export default App;
