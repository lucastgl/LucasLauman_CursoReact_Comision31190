import './Cart.css'
import CartContext from "../../context/CartContext";
import CartItem from '../CartItem/CartItem';
import CartCleaner from '../CartCleaner/CartCleaner';
import FormularioComprador from '../FormularioComprador/FormularioComprador';
import { Link } from 'react-router-dom'
import { useContext, useState } from "react";
import { db, collectionsName } from '../../service/firebase' 
import { addDoc, collection, getDocs, query, where, documentId, writeBatch } from 'firebase/firestore'

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
        // console.log("Crear Orden");
        const objOrder = {
            buyer,
            items: cart,
            total: getTotal()
        }

        const ids = cart.map(prod => prod.id)
        console.log(objOrder);

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
                    // addDoc(collectionRef, objOrder).then(({id}) =>{
                    //     console.log(`se creó la orden con el id: ${id}`);
                    // })
                }else{
                    return Promise.reject({type: 'out_of_stock', products: outOfStock})
                }
            }).then(({id}) =>{
                batch.commit();
                console.log(`se creó la orden con el id: ${id}`);
                cleanCart();
            }).catch(error =>{
                console.log(error);
            })
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
            {/* <button className='BotonActualizar' onClick={updateDocument}>Actualizar</button> */}
        </div>
    )
}

export default Cart;