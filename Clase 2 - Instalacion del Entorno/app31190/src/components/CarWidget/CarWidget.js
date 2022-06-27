import './CarWidget.css';
import CartContext from '../../context/CartContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom'

const CarWidget = () => {

    const { getQuantity } = useContext(CartContext)

    const quantity = getQuantity();

    return(
        <Link to='/cart' className='CarWidget'>
            <img src="../../icoCarritoCompras.png" className="carrito" alt="carrito"></img>
            <p>{quantity}</p>
        </Link>
    )
}

export default CarWidget;