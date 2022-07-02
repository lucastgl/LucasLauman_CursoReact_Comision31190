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
            <div className='ListDetailh2Container'>
                <h2>Detalles del Artículo</h2>
            </div>
            <div className='CardSectionOfDetail'>
                <div className='ShowAndSelection'>
                    <img src={img} alt='imagen del artículo'></img>
                    {quantity > 0 
                        ? <Link to='/cart' className='EndBuy'>Finalizar compra</Link> 
                        : <ItemCount stock={stock} onAdd={onAdd} initial={getProduct(id)?.cantidad}/>}
                </div>
                <div className='Detalles'>
                    <h1>{name}</h1>
                    <p> MATERIAL: {material}</p>
                    <p> ORIGEN: {origen}</p>
                    <p> PRECIO: {price}</p>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;