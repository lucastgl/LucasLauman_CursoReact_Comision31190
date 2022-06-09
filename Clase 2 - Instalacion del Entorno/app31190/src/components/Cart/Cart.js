import './Cart.css'
import { useContext } from "react";
import CartContext from "../../context/CartContext";

const Cart = () => {

    const { cart } = useContext(CartContext)

    return(
        <div>
            <h1>Cart</h1>
            <div>
                {cart.map(prod => {
                    return(
                        <div key={prod.id} className='ArticuloAgregado'>
                            <div >{prod.name}</div>
                            <div>Cantidad: {prod.cantidad}</div>
                            <div>Precio unitario: ${prod.price}</div>
                        </div>
                    )})
                }
            </div>
        </div>
    )
}

export default Cart;