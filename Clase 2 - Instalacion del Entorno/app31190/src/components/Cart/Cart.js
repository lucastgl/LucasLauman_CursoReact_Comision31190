import './Cart.css'
import CartContext from "../../context/CartContext";
import CartItem from '../CartItem/CartItem';
import CartCleaner from '../CartCleaner/CartCleaner';
import FormularioComprador from '../FormularioComprador/FormularioComprador';
import { Link } from 'react-router-dom'
import { useContext, useState } from "react";
import { db, collectionsName } from '../../service/firebase' 
import { addDoc, collection, updateDoc, doc } from 'firebase/firestore'

const Cart = () => {

    const { cart, getTotal, cleanCart } = useContext(CartContext);
    const totalCompra = getTotal();

    const [ buyer , setBuyer ] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        comment: ''
    })

    const createOrder = () =>{
        console.log("Crear Orden");
        
        const objOrder = {
            buyer,
            items: cart,
            total: getTotal()
        }
        
        console.log(objOrder);

        const collectionRef = collection(db, 'orders');

        addDoc(collectionRef, objOrder).then(({id}) =>{
            console.log(`se creó la orden con el id: ${id}`);
        })

        cleanCart();
    }

    // //Vamos a actualizar el stock del producto que tengo agregado al carrito
    // const updateDocument = () => {
    //     // selecciono el id del primer artículo de mi carrito
    //     const  id = cart[0].id;
    //     //llamo al documento en db en la lista doc con el id, "id".
    //     const docRef = doc(db, 'products', id);
    //     updateDoc(docRef, {stock: 1000})
    // }

    return(
        <div>
            <h1 className='CartTitle'>Cart</h1>
            <div className='CartItemContainer'>
                {cart.map(prod => <CartItem key={prod.id} {...prod}/>)}
                
                {
                    cart.length > 0
                        ?   <div>
                                <p> Total de la compra: {totalCompra}$</p>
                                <CartCleaner cart={cart}/>

                                <FormularioComprador buyer={buyer} setBuyer={setBuyer}/>

                                <button onClick={createOrder}>Generar orden</button>
                            </div>
                        :   <div className='CartEmpity'>
                                <p>Aún no hay nada por aquí</p>
                                <Link to='/' className='LinkCartEmpity'>Ver artículos</Link>
                            </div>

                }
            </div>
            {/* boton provistorio */}
            {/* <button className='BotonActualizar' onClick={updateDocument}>Actualizar</button> */}
        </div>
    )
}

export default Cart;

