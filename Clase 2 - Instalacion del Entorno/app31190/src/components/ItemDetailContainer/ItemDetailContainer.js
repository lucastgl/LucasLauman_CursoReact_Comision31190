// import { getProductById } from '../../asyncmock';
import './ItemDetailContainer.css';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../service/firebase';


const ItemDetailContainer = () =>{
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);

    const { productId } = useParams(); 

    useEffect(() => {

        getDoc(doc(db, 'products', productId)).then(response => {
            const producto = {id: response.id, ...response.data()}
            setProduct(producto)
        }).catch(error => {
            console.log(error);
        }).finally(()=>{
            setLoading(false);
        })

        // getProductById( productId ).then(response => {
        //     setProduct(response)
        // }).finally(()=>{
        //     setLoading(false);
        // })
    }, [productId])

    if(loading){
        return <h1>Cargando...</h1>
    }

    return(
        <div className='ItemDetailContainer'>
            <ItemDetail {...product}/>
        </div> 
    )
}

export default ItemDetailContainer;