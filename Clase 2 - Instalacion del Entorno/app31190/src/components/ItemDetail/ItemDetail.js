import './ItemDetail.css'
import Item from "../Item/Item";

const ItemDetail = ({product}) =>{

    console.log(product)
    
    return(
        <div className='List'>
            <h1>Detalles del Artículos</h1>
            <div className='CardSection'>
                <Item producto={product}/>
            </div>
        </div>
    )
}

export default ItemDetail;