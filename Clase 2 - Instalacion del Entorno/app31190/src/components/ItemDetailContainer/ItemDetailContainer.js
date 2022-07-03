import './ItemDetailContainer.css';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { getProductsId } from '../../service/firebase/firestore';

const ItemDetailContainer = () =>{
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);

    const { productId } = useParams(); 

    useEffect(() => {

        getProductsId(productId).then(response =>{
            setProduct(response);
        }).catch(error =>{
            console.log(error);
        }).finally(()=>{
            setLoading(false);
        })
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