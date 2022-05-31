import './ItemDetailContainer.css';
import { useEffect, useState } from 'react'
import { getProductById } from '../../asyncmock';
import ItemDetail from '../ItemDetail/ItemDetail';


const ItemDetailContainer = () =>{
    const [product, setProduct] = useState([]);

    useEffect(() => {
        getProductById('1').then(response => {
            setProduct(response)
        })
    }, [])

    return(
        <div className='ItemDetail'>
            <ItemDetail product={product}/>
        </div> 
    )
}

export default ItemDetailContainer;