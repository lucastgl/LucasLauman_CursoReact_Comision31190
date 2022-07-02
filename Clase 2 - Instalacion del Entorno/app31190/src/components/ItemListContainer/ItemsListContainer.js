import './ItemsListContainer.css';
import ItemList from '../ItemList/ItemList';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

// import { getDocs, collection, query, where } from 'firebase/firestore';
// import { db } from '../../service/firebase';
import { getProducts } from '../../service/firebase/firestore';

const ItemListContainer = (props) =>{

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const { categoryId } = useParams();

    useEffect(() => {
        setLoading(true);
        getProducts(categoryId).then(response => {
            setProducts(response);
        }).catch(error =>{
            console.log(error)
        }).finally(()=> {
            setLoading(false);
        })
        // const collectionRef = categoryId;
        //     ? query(collection(db, 'products'), where('category', '==', categoryId))
        //     : collection(db, 'products')

        // getDocs(collectionRef).then(response => {
        //    const productos = response.docs.map(doc => {
        //         return { id: doc.id, ...doc.data()}
        //     })
        //    setProducts (productos)
        // }).catch(error => {
        //     console.log(error);
        // }).finally(()=>{
        //     setLoading(false);
        // })
    }, [categoryId])

    if(loading){
        return (
        <div className='LoadingContainer'>
            <FontAwesomeIcon icon={faSpinner} className="LoadingIcon" />
        </div>
        )
    }

    return(
        <div className='ItemList'>
            < ItemList products={products}/>
        </div> 
    )
}

export default ItemListContainer;
