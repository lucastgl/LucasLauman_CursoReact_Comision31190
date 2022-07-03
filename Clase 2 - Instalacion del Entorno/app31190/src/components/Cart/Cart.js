import './Cart.css'
import CartContext from "../../context/CartContext";
import CartItem from '../CartItem/CartItem';
import CartCleaner from '../CartCleaner/CartCleaner';
import FormularioComprador from '../FormularioComprador/FormularioComprador';
import { Link, useNavigate } from 'react-router-dom'
import { useContext, useState } from "react";
import { useNotification } from '../../notification/Notification';

import { db, collectionsName } from '../../service/firebase' 
import { addDoc, collection, getDocs, query, where, documentId, writeBatch } from 'firebase/firestore'

// import { generateOrder } from '../../service/firebase/firestore';

const Cart = () => {
    const { setNotification } = useNotification()
    const { cart, getTotal, cleanCart } = useContext(CartContext);
    const totalCompra = getTotal();
    const navigate = useNavigate()

    const [ buyer , setBuyer ] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        comment: ''
    })

    // generateOrder(totalCompra, buyer, navigate)

    const createOrder = () =>{
        const objOrder = {
            buyer,
            items: cart,
            total: totalCompra
        }

        const ids = cart.map(prod => prod.id)

        const batch = writeBatch(db);
        const outOfStock = [];
        const collectionRef2 = collection(db, collectionsName.products)
        
        getDocs(query(collectionRef2, where(documentId(), 'in', ids)))
            .then(response =>{
                response.docs.forEach(doc =>{
                    const dataDoc = doc.data();
                    const prodQuantity = cart.find(prod => prod.id === doc.id)?.cantidad

                    if(dataDoc.stock >= prodQuantity){
                        batch.update(doc.ref, {stock: dataDoc.stock - prodQuantity})
                    }else{
                        outOfStock.push({id: doc.id, ...dataDoc})
                    }
                })
            }).then(()=>{
                if(outOfStock.length === 0){
                    const collectionRef = collection(db, collectionsName.orders);
                    return addDoc(collectionRef, objOrder)
                }else{
                    return Promise.reject({type: 'out_of_stock', products: outOfStock})
                }
            }).then(({id}) =>{
                batch.commit();
                cleanCart();
                setNotification('success',`se creó la orden con el id: ${id}`);
                navigate('/')
            }).catch(error =>{
                console.log(error);
                setNotification('error', `No hay stock suficiente para cubrir la orden de algunos artículos`)
            })
    }

    return(
            <div className='CartItemContainer'>
                {
                    cart.length > 0
                        ? <div>
                            <CartCleaner cart={cart}/>
                         </div>
                        :
                         <></>
                }

                {cart.map(prod => <CartItem key={prod.id} {...prod}/>)}
                
                {
                    cart.length > 0
                        ?   <div>
                                <div className='totalCompra'>
                                    <p> Total: {totalCompra}$</p>
                                </div>
                                <FormularioComprador buyer={buyer} setBuyer={setBuyer}/>
                                <div className='orderGeneratorContainer'>
                                    <button onClick={createOrder}>Generar orden</button>
                                </div>
                            </div>
                        :   <div className='CartEmpity'>
                                <p>Aún no hay nada por aquí</p>
                                <Link to='/' className='LinkCartEmpity'>Ver artículos</Link>
                            </div>
                }
            </div>
    )
}

export default Cart;