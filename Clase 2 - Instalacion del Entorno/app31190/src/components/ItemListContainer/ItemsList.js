import './ItemsList.css'

const ItemListContainer = (props) =>{
    return(
        <div className='ItemList'>
            <div className='comingSoon'>
                <p>{props.greeting}</p>
            </div>
        </div>

    )
}

export default ItemListContainer;