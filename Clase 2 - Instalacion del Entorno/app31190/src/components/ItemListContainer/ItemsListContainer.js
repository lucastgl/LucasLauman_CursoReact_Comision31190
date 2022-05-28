import './ItemsListContainer.css';
import ItemCount from '../ItemCount/ItemCount';

const ItemListContainer = (props) =>{

    const onAdd = (canidad) =>{
        console.log(`Se ha agregado ${canidad}`)
    } 

    return(
        <div className='ItemList'>
            <div className='comingSoon'>
                <p>{props.greeting}</p>
            </div>
        < ItemCount stock={5} initial={1} onAdd={onAdd}/>        
        </div> 
    )
}

export default ItemListContainer;