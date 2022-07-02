import './NavBar.css';
import { Link /*, NavLink*/ } from 'react-router-dom';
// import { useContext } from "react";
// import CartContext from "../../context/CartContext";
import CarWidget from '../CarWidget/CarWidget';
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import { faHouse } from '@fortawesome/free-solid-svg-icons';


const NavBar = () => {

    // const { cart } = useContext(CartContext);

    return (
        <nav className="NavBar">
            {/* <div className="empaquetador">
                <img src="./images/logo.svg" className="App-logo" alt="logo"></img>
                <p className="presentation">Powered by React</p>
            </div> */}
            <div className="divTitle">
                <Link to={'/'} className="botonMain">
                    <h1 className='h1Animado'>MyWay </h1>
                </Link>
            </div>
            {/* <div className="elementsHead"> */}
            <div className="Listado">
                <Link to='/category/Sneakers' className='ListadoHijo'>Sneakers</Link>
                <Link to='/category/Hodies' className='ListadoHijo'>Hoodies</Link>
                <Link to='/category/Joggers'className='ListadoHijo'>Joggins</Link>
                {/* <NavLink to='/category/Sneakers' className={({isActive}) => isActive ? 'ActiveListadoHijo' : 'ListadoHijo'}>Sneakers</NavLink> */}
            </div>
            {/* </div> */}
            <div className='divBotones'>
                {/* <button className="botonNavBar">INICIO</button> */}
                < CarWidget />
            </div>
        </nav>
    )
}

export default NavBar;