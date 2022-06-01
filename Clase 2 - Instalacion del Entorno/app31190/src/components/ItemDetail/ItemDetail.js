import './ItemDetail.css'
// import Item from "../Item/Item";

const ItemDetail = ({product}) =>{

    return(
        <div className='ListDetail'>
            <h1>Detalles del Artículos</h1>
            <div className='CardSectionOfDetail'>
                <h2>{product.name}</h2>
                <img src={product.img} alt='imagen del artículo'></img>
                <p> price: {product.price}</p>
                <p> material: {product.material}</p>
                <p> MADE IN {product.origen}</p>
                {/* <Item producto={product}/> */}
            </div>
        </div>
    )
}

export default ItemDetail;