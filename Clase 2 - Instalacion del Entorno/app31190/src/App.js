//import CountFunction from './components/CountFunction/CountFunction';
//import { useState } from 'react';
import './App.css';
import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemsListContainer';
// import ItemCount from './components/ItemCount/ItemCount';


function App() {
  //const [show, setShow] = useState(true);
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Way </h1>
        < NavBar />
        < ItemListContainer greeting="Próximamente nuevos productos"/>
        {/* < ItemCount />          */}
        {/* <button onClick={()=> setShow(!show)}>Mostrar o no mostrar</button>
        {show ? < CountFunction /> : null} 
        <CountFunction color="blue" text="Contador hecho con funciones (esto viene como parametro)"/> */}
      </header>
    </div>
  );
}

export default App;
