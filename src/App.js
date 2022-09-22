import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import CartWidget from './components/CartWidget';
import ItemListContainer from './components/shop/ItemListContainer';

function App() {

  const styles={
    border:'solid 2px purple',
    padding:'20px',
  }
  return (
    <>
    <NavBar/>
   
    <h2 style={styles}>Subtitulo</h2>
    <li>Cap1</li>
    <li>Cap2</li>
    <li>Cap3</li>
    <li>Cap4</li>
    <strong>Bibliografia</strong>
    </>
  );
}

export default App;
