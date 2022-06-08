import { createContext, useState  } from "react";

const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addItem = (productToAdd) => {
        setCart([...cart, productToAdd])
    }
    
    const getQuantity = () => {
        let accu = 0;
        cart.forEach(prod => {
          accu += prod.cantidad;
        })
    
        return accu;
    }
    
    return(
        <CartContextProvider.Provider value={{cart, addItem, getQuantity}}>
            {children}
        </CartContextProvider.Provider>
    )
}

export default CartContext