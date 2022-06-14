import './Cart.css'
import { useContext } from "react";
import { Link } from 'react-router-dom'
import CartContext from "../../context/CartContext";
import CartCleaner from '../CartCleaner/CartCleaner';
import CartItem from '../CartItem/CartItem';


const Cart = () => {

    const { cart } = useContext(CartContext);

    return(
        <div>
            <h1 className='CartTitle'>Cart</h1>
            <div className='CartItemContainer'>
                {cart.map(prod => <CartItem key={prod.id} {...prod}/>)}
                {/* {cart.map(prod => {
                    return(
                        <div className="ProductOnCart" key={prod.id}>
                            <div>{prod.name}</div>
                            <div>Cantidad: {prod.cantidad}</div>
                            <div>Precio: {prod.price}</div>
                            <div>Subtotal: {prod.price * prod.cantidad}</div>
                            <button onClick={()=> removeItem(prod.id)}>X</button>
                        </div>
                    )
                })} */}
                {
                    cart.length > 0
                        ? <CartCleaner/>
                        :   <div className='CartEmpity'>
                                <p>Aún no hay nada por aquí</p>
                                <Link to='/' className='LinkCartEmpity'>Ver artículos</Link>
                            </div>

                }
            </div>
        </div>
    )
}

export default Cart;