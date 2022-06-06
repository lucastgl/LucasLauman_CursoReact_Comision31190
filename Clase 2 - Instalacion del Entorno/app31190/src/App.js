import './App.css';
import { BrowserRouter,Routes, Route} from 'react-router-dom'
import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemsListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
// import ScrollAnimation from './components/ScrollAnimation/ScrollAnimation';


function App() {

  return (
    <div className="App">
 
      <header className="App-header">
        <h1>My Way </h1>
      </header>
      
      <BrowserRouter>
        < NavBar />
        <Routes>
          <Route path='/category/:categoryId'element={<ItemListContainer/>}/>
          <Route path='/' element={< ItemListContainer greeting="Próximamente nuevos productos"/>}/>
          <Route path='/detail/:productId' element={< ItemDetailContainer />}/>
        </Routes>
      </BrowserRouter>

      {/* < ScrollAnimation/> */}
    </div>
  );
}

export default App;
