import './CartCleaner.css'
import { useContext } from "react";
import CartContext from "../../context/CartContext";

const CartCleaner = () => {

    const {cleanCart} = useContext(CartContext)

    return(
        <div className='VaciarCarritoContainer'>
            <button onClick={() => cleanCart()} className='VaciarCarrito'>
                <p>Vaciar Carrito</p>
                <img src='./images/reciclaje.png' alt="imagen del teacho" className='tacho'/>
            </button>
        </div>
    )
}

export default CartCleaner;