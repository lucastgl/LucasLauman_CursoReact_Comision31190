import './NavBar.css'
import logo from './logo.svg';

const NavBar = () => {
    return (
        <nav className="NavBar">
            <img src={logo} className="App-logo" alt="logo"></img>
            <button className="botonNavBar">INICIO</button>
            <ul className="Listado">
                <li>Sneakers</li>
                <li>Hodies</li>
                <li>Joggers</li>
            </ul>
            <button className="botonNavBar">LOGIN</button>
        </nav>
    )
}

export default NavBar;