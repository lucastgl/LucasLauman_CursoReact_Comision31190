import ItemCount from '../ItemCount/ItemCount';
import './Item.css'

const Item = (props) => {

    const onAdd = (canidad) =>{
        if(canidad !== 0){
            console.log(`Se han agregado ${canidad} ${props.name} al carrito`)
        }
    } 

    return(
        <div className='Card'>
            <h1>{props.name}</h1>
            <img src={props.img} alt='imagen del artículo'></img>
            <p> price: {props.price}</p>
            < ItemCount stock={props.stock} onAdd={onAdd}/>
        </div>
    )
}

export default Item;