import './Cart.css'
import { useContext } from "react";
import CartContext from "../../context/CartContext";

const Cart = () => {

    const { cart, removeItem, cleanCart } = useContext(CartContext)

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
                            <button onClick={()=> removeItem(prod.id)}>X</button>
                        </div>
                    )
                })}
                <div className='VaciarCarritoContainer'>
                    <button onClick={() => cleanCart()} className='VaciarCarrito'>
                       <p>Vaciar Carrito</p>
                        <img src='./images/reciclaje.png' alt="imagen del teacho" className='tacho'/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Cart;