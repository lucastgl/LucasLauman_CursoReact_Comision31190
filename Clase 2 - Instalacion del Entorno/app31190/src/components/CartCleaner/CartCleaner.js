import './CartCleaner.css'
import { useContext } from "react";
import CartContext from "../../context/CartContext";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

const CartCleaner = () => {

    const {cleanCart} = useContext(CartContext)

    return(
        <div className='VaciarCarritoContainer'>
            <button onClick={() => cleanCart()} className='VaciarCarrito'>
                <p>Vaciar Carrito</p>
                <FontAwesomeIcon icon={faTrashCan} className='tacho'/>
            </button>
        </div>
    )
}

export default CartCleaner;