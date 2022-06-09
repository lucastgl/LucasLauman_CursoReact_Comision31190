import './ItemDetail.css'
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import CartContext from '../../context/CartContext';

const ItemDetail = ({id, name, img, stock, material, origen, price}) =>{
    const [quantity, setQuantity] = useState(0);

    const { addItem, getProduct } = useContext(CartContext)

    const onAdd = (cantidad) =>{
        if(cantidad > 0){
            console.log(`Se han agregado ${cantidad} ${name} al carrito`);
            setQuantity(cantidad);
            addItem({id, name, price, cantidad})
        }
    }

    return(
        <div className='ListDetail'>
            <h2>Detalles del Artículos</h2>
            <div className='CardSectionOfDetail'>
                <div className='ShowAndSelection'>
                    <img src={img} alt='imagen del artículo'></img>
                    {quantity > 0 
                        ? <Link to='/cart' className='EndBuy'>Finalizar compra</Link> 
                        : <ItemCount stock={stock} onAdd={onAdd} initial={getProduct(id)?.quantity}/>}
                </div>
                <div className='Detalles'>
                    <h1>{name}</h1>
                    <p> material: {material}</p>
                    <p> MADE IN {origen}</p>
                    <p> price: {price}</p>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;