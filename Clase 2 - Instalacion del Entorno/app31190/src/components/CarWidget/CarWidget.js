import './CarWidget.css';
import CartContext from '../../context/CartContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons'

const CarWidget = () => {

    const { getQuantity, cart } = useContext(CartContext)

    const quantity = getQuantity();

    return(
        <Link to='/cart' className='CarWidget'>
            <FontAwesomeIcon icon={faBasketShopping} className="cartLogo" />
            {
                cart.length > 0
                    ?<p>{quantity}</p>
                    :<></>
            }
        </Link>
    )
}

export default CarWidget;
