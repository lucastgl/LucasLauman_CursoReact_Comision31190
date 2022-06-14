import './CartItem.css'
import CartContext from "../../context/CartContext";
import { useContext } from "react";

const CartItem = ({id, name, cantidad, price, }) =>{
    
    const { removeItem } = useContext(CartContext);

    return(
        <div className="ProductOnCart">
            <div className='name'>{name}</div>
            <div>Cantidad: {cantidad}</div>
            <div>Precio: {price}</div>
            <div>Subtotal: {price * cantidad}</div>
            <div className='Delete'>
                <button onClick={()=> removeItem(id)}>X</button>
            </div>
        </div>
    )
}

export default CartItem;