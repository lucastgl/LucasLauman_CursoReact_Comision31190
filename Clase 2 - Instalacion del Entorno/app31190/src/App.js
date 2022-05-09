import logo from './logo.svg';
import './App.css';


const AvatarJSX = () => {
  const src = `https://randomuser.me/api/portraits/lego/1.jpg`

  return (
      <picture>
          <img src={src} alt='Lego 1'/>
          Mauricio
      </picture>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        < AvatarJSX />
        < AvatarJSX />
      </header>
    </div>
  );
}

export default App;
