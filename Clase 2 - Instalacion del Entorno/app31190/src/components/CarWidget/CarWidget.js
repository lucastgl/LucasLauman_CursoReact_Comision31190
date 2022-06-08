import './CarWidget.css';
import { useContext } from 'react';
import CartContext from '../../context/CartContext';

const CarWidget = () => {

    const { getQuantity } = useContext(CartContext)

    const quantity = getQuantity();

    return(
        <div className='CarWidget'>
            <img src="./images/icono-de-carrito-de-compras.png" className="carrito" alt="carrito de compras"></img>
            <p>{quantity}</p>
        </div>
    )
}

export default CarWidget;