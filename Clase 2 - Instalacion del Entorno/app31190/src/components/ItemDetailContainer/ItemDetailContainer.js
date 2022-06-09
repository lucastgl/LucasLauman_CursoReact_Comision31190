import './ItemDetailContainer.css';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getProductById } from '../../asyncmock';
import ItemDetail from '../ItemDetail/ItemDetail';


const ItemDetailContainer = () =>{
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);

    const { productId } = useParams(); 

    useEffect(() => {
        getProductById( productId ).then(response => {
            setProduct(response)
        }).finally(() =>{
            setLoading(false)
        })
    }, [productId])

    if(loading) {
        return <h1>Cargando...</h1>
    }

    return(
        <div className='ItemDetailContainer'>
            <ItemDetail {...product}/>
        </div> 
    )
}

export default ItemDetailContainer;