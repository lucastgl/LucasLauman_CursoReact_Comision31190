import { useState } from 'react';
import Button from '../CountFunction/Button/Button';
import './ItemCount.css'

const ItemCount = ( {stock, onAdd, initial = 1 }) => {
    const [count, setCount] = useState(initial);

    const decrement = () =>{
        if(count > 0){
            setCount(count - 1);
        }
    }

    const increment = () =>{
        if(stock > count){
            setCount(count + 1);
        }
    }

    const AgregarCantidad = () =>{
        onAdd(count);
    }
    
    return(
        <div className='Item'>
            <div className='PrototypeItemContainer'>
                <div className='bloqueContador'>
                    <Button handleClick={decrement} children='-'/>
                    <p className='cifraContador'>{count}</p>
                    <Button handleClick={increment} children='+'/>
                </div>
                <button className='agregarCarritoButton' onClick={AgregarCantidad}>Agregar al Carrito</button>
            </div>
        </div>
    )
}

export default ItemCount;