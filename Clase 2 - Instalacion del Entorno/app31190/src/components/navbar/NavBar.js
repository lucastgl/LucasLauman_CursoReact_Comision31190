import CarWidget from '../CarWidget/CarWidget';
import './NavBar.css';

const NavBar = () => {
    return (
        <nav className="NavBar">
            <div className="reactHead">
                <div className="empaquetador">
                    <img src="./images/logo.svg" className="App-logo" alt="logo"></img>
                    <p className="presentation">Powered by React</p>
                </div>
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
                    < CarWidget />
                </div>
            </div>
        </nav>
    )
}

export default NavBar;