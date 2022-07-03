import { Link } from 'react-router-dom';
import './Item.css'

const Item = (props) => {

    return(
        <div className='Card'>
            <img src={props.img} alt='imagen del artículo'></img>
            <h1>{props.name}</h1>
            <p style={{color: 'white'}}> precio: {props.price}</p>
            < Link to={`/detail/${props.id}`} className='Detalle'>Conocer más</Link>
        </div>
    )
}
export default Item;