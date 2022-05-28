import './App.css';
import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemsListContainer';
// import ItemCount from './components/ItemCount/ItemCount';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Way </h1>
        < NavBar />
        < ItemListContainer greeting="Próximamente nuevos productos"/>
      </header>
    </div>
  );
}

export default App;
