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

    const getProduct = (id) =>{
        return cart.find(prod => prod.id === id)
    }
    
    return(
        <CartContext.Provider value={{cart, addItem, getQuantity, getProduct}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext