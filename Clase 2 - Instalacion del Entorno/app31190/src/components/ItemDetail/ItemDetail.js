import './ItemDetail.css'
// import Item from "../Item/Item";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({product}) =>{
    const [quantity, setQuantity] = useState(0);

    const onAdd = (cantidad) =>{
        if(cantidad >= 0){
            console.log(`Se han agregado ${cantidad} ${product.name} al carrito`);
            setQuantity(cantidad);
        }
    }
    return(
        <div className='ListDetail'>
            <h2>Detalles del Artículos</h2>
            <h1>{product.name}</h1>
            <div className='CardSectionOfDetail'>
                <div className='ShowAndSelection'>
                    <img src={product.img} alt='imagen del artículo'></img>
                    {quantity > 0 ? <Link to=' /cart' className='EndBuy'>Finalizar compra</Link> : <ItemCount stock={product.stock} onAdd={onAdd}/>}
                </div>
                <div className='Detalles'>
                    <p> material: {product.material}</p>
                    <p> MADE IN {product.origen}</p>
                    <p> price: {product.price}</p>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;