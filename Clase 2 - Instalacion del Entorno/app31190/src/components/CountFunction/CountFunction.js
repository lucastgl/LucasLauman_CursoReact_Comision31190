import { useState } from 'react';
import Button from './Button/Button';

const CountFunction = (props) => {
    // const state = useState(0);
    // const count = state[0];
    // const setCount = state[1];

    //la convención pra escribir los que está comentado arriba es..
    const [count, setCount] = useState(0);

    const decrement = () =>{
        setCount(count - 1);
    }

    const increment = () =>{
        setCount(count + 1);
    }

    return(
        <div style={{display: "flex"}}>
            <Button handleClick={decrement} label="-" color='red'/>
            <p style={{color : props.color}}>{count}</p>
            <Button handleClick={increment} label="+" color='green'/>
        </div>
        
    )
}

export default CountFunction;