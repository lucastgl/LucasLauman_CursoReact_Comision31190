import './App.css';
// import CountFunction from './components/CountFunction/CountFunction';
import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemsList';
// const AvatarJSX = () => {
//   const src = `https://randomuser.me/api/portraits/lego/1.jpg`

//   return (
//       <picture>
//           <img src={src} alt='Lego 1'/>
//           Mauricio
//       </picture>
//   )
// }

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* < AvatarJSX /> */}
        <h1>My Way </h1>
        < NavBar />
        < ItemListContainer greeting="Próximamente nuevos productos" />
        {/* <CountFunction/> */}
        {/* <CountFunction color="blue" text="Contador hecho con funciones (esto viene como parametro)"/> */}
      </header>
    </div>
  );
}

export default App;
