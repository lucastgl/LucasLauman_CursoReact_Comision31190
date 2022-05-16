import './NavBar.css'
import logo from './logo.svg';

const NavBar = () => {
    return (
        <nav className="NavBar">
            <div className="reactHead">
                <img src={logo} className="App-logo" alt="logo"></img>
                <p className="presentation">Powered by React</p>
            </div>
            <div className="elementsHead">
                <ul className="Listado" type="none">
                    <li>Sneakers</li>
                    <li>Hodies</li>
                    <li>Joggers</li>
                </ul>
                <div className='divBotones'>
                    <button className="botonNavBar">INICIO</button>
                    <button className="botonNavBar">LOGIN</button>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;