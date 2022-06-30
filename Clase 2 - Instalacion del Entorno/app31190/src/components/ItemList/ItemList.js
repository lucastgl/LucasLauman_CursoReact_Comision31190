import './ItemList.css'
import Item from "../Item/Item";

const ItemList = ({products}) =>{
    return(
        <div className='List'>
            <h1 className='Listh1'>Lista de Artículos</h1>
            <div className='CardSection'>
                {products.map(prod => <Item key={prod.id} {...prod}/>)}
            </div>
        </div>
    )
}

export default ItemList;