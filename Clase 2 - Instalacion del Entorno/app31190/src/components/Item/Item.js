// import ItemCount from '../ItemCount/ItemCount';
import './Item.css'

const Item = ({producto}) => {

    // console.log(props.producto);

    // const onAdd = (canidad) =>{
    //     if(canidad !== 0){
    //         console.log(`Se han agregado ${canidad} ${producto.name} al carrito`)
    //     }
    // } 

    return(
        <div className='Card'>
            <h1>{producto.name}</h1>
            <img src={producto.img} alt='imagen del artículo'></img>
            <p> price: {producto.price}</p>
            <p> material: {producto.material}</p>
            <p> MADE IN {producto.origen}</p>
            {/* < ItemCount stock={producto.stock} onAdd={onAdd}/> */}
        </div>
    )
}

export default Item;