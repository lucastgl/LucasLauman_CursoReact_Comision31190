import './ItemsListContainer.css';
import { useEffect, useState } from 'react'
import { getProducts, getProductsCategory } from '../../asyncmock';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';


const ItemListContainer = (props) =>{
    const [products, setProducts] = useState([]);

    const { categoryId } = useParams();

    console.log(categoryId);

    useEffect(() => {
        if(!categoryId){
            getProducts().then(response => {
                setProducts(response)
            })
        }else{
            getProductsCategory(categoryId).then(response => {
                setProducts(response)
            })
        }
    }, [categoryId])
    // const newProduct = products.map( product => <p>{product.name}</p>);

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