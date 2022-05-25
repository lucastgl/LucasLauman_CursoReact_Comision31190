import { useState } from 'react';
import Button from '../CountFunction/Button/Button';
import './ItemCount.css'

const ItemCount = (props) => {
    const [count, setCount] = useState(0);

    const decrement = () =>{
        if(count > 0){
            setCount(count - 1);
        }
    }


    const increment = () =>{
        setCount(count + 1);
    }
    
    return(
        <div className='Item'>
            <div className='PrototypeItemContainer'>
                {/* <p className='titleProduct'>Joggin</p> */}
                <div className='bloqueContador'>
                    <Button handleClick={decrement} children='-'/>
                    <p className='cifraContador'>{count}</p>
                    <Button handleClick={increment} children='+'/>
                </div>
                <button className='agregarCarritoButton'>Agregar al Carrito</button>
            </div>
        </div>
    )
}

export default ItemCount;