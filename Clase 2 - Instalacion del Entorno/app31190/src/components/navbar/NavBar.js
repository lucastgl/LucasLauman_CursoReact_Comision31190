import './NavBar.css';
import { Link } from 'react-router-dom';
import CarWidget from '../CarWidget/CarWidget';

const NavBar = () => {
    return (
        <nav className="NavBar">
            <div className="divTitle">
                <Link to={'/'} className="botonMain">
                    <h1 className='h1Animado'>MyWay </h1>
                </Link>
            </div>
            <div className="Listado">
                <Link to='/category/Sneakers' className='ListadoHijo'>Sneakers</Link>
                <Link to='/category/Hodies' className='ListadoHijo'>Hoodies</Link>
                <Link to='/category/Joggers'className='ListadoHijo'>Joggins</Link>
            </div>
            <div className='divBotones'>
                < CarWidget />
            </div>
        </nav>
    )
}

export default NavBar;