import './NavBar.css';
import { Link /*, NavLink*/ } from 'react-router-dom';
import { useContext } from "react";
import CartContext from "../../context/CartContext";
import CarWidget from '../CarWidget/CarWidget';

const NavBar = () => {

    const { cart } = useContext(CartContext);

    return (
        <nav className="NavBar">
            <div className="reactHead">
                <div className="empaquetador">
                    <img src="./images/logo.svg" className="App-logo" alt="logo"></img>
                    <p className="presentation">Powered by React</p>
                </div>
            </div>
            <div className="elementsHead">
                <div className="Listado">
                    <Link to='/category/Sneakers' className='ListadoHijo'>Sneakers</Link>
                    <Link to='/category/Hodies' className='ListadoHijo'>Hodies</Link>
                    <Link to='/category/Joggers'className='ListadoHijo'>Joggers</Link>
                    {/* <NavLink to='/category/Sneakers' className={({isActive}) => isActive ? 'ActiveListadoHijo' : 'ListadoHijo'}>Sneakers</NavLink> */}
                </div>
                <div className='divBotones'>
                    {/* <button className="botonNavBar">INICIO</button> */}
                    <Link to={'/'} className="botonNavBar">INICIO</Link>
                    <button className="botonNavBar">LOGIN</button>
                    {
                        cart.length > 0
                        ?    < CarWidget />
                        :   <></>
                    }
                </div>
            </div>
        </nav>
    )
}

export default NavBar;