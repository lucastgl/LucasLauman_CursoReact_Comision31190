// import { getProductById } from '../../asyncmock';
import './ItemDetailContainer.css';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../service/firebase';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';


const ItemDetailContainer = () =>{
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);

    //Para qué se usaba el useParams??
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
        return (
            <div className='LoadingContainer'>
                <FontAwesomeIcon icon={faSpinner} className="LoadingIcon" />
            </div>
            )
    }

    return(
        <div className='ItemDetailContainer'>
            <ItemDetail {...product}/>
        </div> 
    )
}

export default ItemDetailContainer;