// import { getProducts, getProductsCategory } from '../../asyncmock';
import './ItemsListContainer.css';
import ItemList from '../ItemList/ItemList';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '../../service/firebase';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const ItemListContainer = (props) =>{
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const { categoryId } = useParams();

    useEffect(() => {
        setLoading(true);

        const collectionRef = categoryId
            ? query(collection(db, 'products'), where('category', '==', categoryId))
            : collection(db, 'products')

        //traeme los documentos de la colección que está en mi base de datos, puntualmente la colección "products"
        getDocs(collectionRef).then(response => {
           const productos = response.docs.map(doc => {
                return { id: doc.id, ...doc.data()}
            })
           setProducts (productos)
        }).catch(error => {
            console.log(error);
        }).finally(()=>{
            setLoading(false);
        })

        // if(!categoryId){
        //     getProducts().then(response => {
        //         setProducts(response)
        //     })
        // }else{
        //     getProductsCategory(categoryId).then(response => {
        //         setProducts(response)
        //     })
        // }
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
            {/* 
            <div className='comingSoon'>
                <p>{props.greeting}</p>
            </div> 
            */}
            < ItemList products={products}/>
            {/* si quiero escribir código js tengo que abrir llaves */}
            {/*products.map(product => <p key={product.id}>{product.name}</p>) */}
            {/* {newProduct} */}
        </div> 
    )
}

export default ItemListContainer;
