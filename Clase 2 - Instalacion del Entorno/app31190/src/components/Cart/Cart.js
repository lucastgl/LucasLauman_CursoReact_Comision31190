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
                        <div className="ProductOnCart" key={prod.id}>
                            <div>{prod.name}</div>
                            <div>Cantidad: {prod.cantidad}</div>
                            <div>Precio: {prod.price}</div>
                            <div>Subtotal: {prod.price * prod.cantidad}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Cart;