import { createContext, useState  } from "react";

const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addItem = (productToAdd) => {

        if(!isInCart(productToAdd.id)){
            setCart([...cart, productToAdd])
        }else{
            const newCart = cart.map(prod => {
                if(prod.id === productToAdd.id){
                    const newProduct = {
                        ...prod,
                        cantidad: productToAdd.cantidad
                    }
                    return newProduct;
                }else {
                    return prod;
                }
            })
            setCart(newCart)
        }
    }
    
    const getQuantity = () => {
        let accu = 0;
        cart.forEach(prod => {
          accu += prod.cantidad;
        })
    
        return accu;
    }

    const isInCart = (id) =>{
        return cart.some(prod => prod.id === id)
    }

    const getProduct = (id) => {
        return cart.find(prod => prod.id ===id)
    }

    const removeItem = (id) =>{
        return cart.filter( prod => prod.id !== id)
    }
    
    return(
        <CartContext.Provider value={{cart, addItem, getQuantity, getProduct, removeItem}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext