import ItemCount from '../ItemCount/ItemCount';
import './Item.css'

const Item = ({id, name, img, price}) => {
    return(
        <div className='Card'>
            <h1>{name}</h1>
            <img src={img} alt='imagen del artículo'></img>
            <p> price: {price}</p>
            < ItemCount/>
        </div>
    )
}

export default Item;