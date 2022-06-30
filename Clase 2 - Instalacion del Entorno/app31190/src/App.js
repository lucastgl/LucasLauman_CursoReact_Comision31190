import './App.css';
import { CartContextProvider } from './context/CartContext';
import { BrowserRouter,Routes, Route} from 'react-router-dom'
import Cart from './components/Cart/Cart';
import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemsListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import FormularioComprador from './components/FormularioComprador/FormularioComprador';

function App() {
  return (
    <div className="App">
        <CartContextProvider>
          <BrowserRouter>
            < NavBar />
            <Routes>
              <Route path='/category/:categoryId'element={<ItemListContainer/>}/>
              <Route path='/' element={< ItemListContainer greeting="Próximamente nuevos productos"/>}/>
              <Route path='/detail/:productId' element={< ItemDetailContainer />}/>
              <Route path='/cart' element={<Cart/>}/>
              <Route path='/form' element={<FormularioComprador/>}/>
            </Routes>
          </BrowserRouter>
        </CartContextProvider>
    </div>
  );
}

export default App;