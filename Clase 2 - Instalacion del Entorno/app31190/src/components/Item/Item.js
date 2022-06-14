// import { useState } from 'react';
import { Link } from 'react-router-dom';
// import ItemCount from '../ItemCount/ItemCount';
import './Item.css'

const Item = (props) => {

    // const [quantity, setQuantity] = useState(0);

    // const onAdd = (cantidad) =>{
    //     if(cantidad >= 0){
    //         console.log(`Se han agregado ${cantidad} ${props.name} al carrito`);
    //         setQuantity(cantidad);
    //     }
    // }

    return(
        <div className='Card'>
            <h1>{props.name}</h1>
            <img src={props.img} alt='imagen del artículo'></img>
            <p style={{color: 'white'}}> price: {props.price}</p>
            < Link to={`/detail/${props.id}`} className='Detalle'>Ver detalle del artículo</Link>
            {/*{quantity > 0 ? <Link to=' /cart'>Finalizar compra</Link> : <ItemCount stock={props.stock} onAdd={onAdd}/>} */}
        </div>
    )
}
export default Item;