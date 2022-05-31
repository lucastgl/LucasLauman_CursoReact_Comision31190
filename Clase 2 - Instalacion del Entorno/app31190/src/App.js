import './App.css';
import NavBar from './components/navbar/NavBar';
// import ItemListContainer from './components/ItemListContainer/ItemsListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

//import MercadoLibre from './components/MercadoLibre/MercadoLibre';



function App() {
  //const [show, setShow] = useState(true);
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Way </h1>
        
        {/* COMPONENTES EFECTIVOS */}
        < NavBar />
        < ItemDetailContainer />
        {/* < ItemListContainer greeting="Próximamente nuevos productos"/> */}



        {/* EJEMPLO DE CLASE */}
        {/* <MercadoLibre/> */}
      </header>
    </div>
  );
}

export default App;
