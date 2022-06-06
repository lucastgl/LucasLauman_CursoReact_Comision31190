import { useState, useEffect } from 'react';
import Button from './Button/Button';

const CountFunction = (props) => {
    // const state = useState(0);
    // const count = state[0];
    // const setCount = state[1];

    //la convención para escribir los que está comentado arriba es..
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Me ejecuto luego del montaje")

        return () => {
            console.log("Me ejecuto antes de desmontar el elemento");
        }

    }, [])//sin el array "[]"se ejecuta siempre que se hace re-render, con él, solo se ejecuta una sola vez

    const decrement = () =>{
        setCount(count - 1);
    }

    const decrement5 = () =>{
        for( let i=0; i<5 ; i++){
            setCount((prev) => prev - 1)
        }
    }

    const increment = () =>{
        setCount(count + 1);
    }

    const increment5 = () =>{
        for( let i=0; i<5 ; i++){
            setCount((prev) => prev + 1)
        }
    }

    // console.log("me ejecuto antes del montaje");
    
    return(
        <div style={{display: "flex"}}>
            <Button  handleClick={decrement5} children="-5"/>
            <Button handleClick={decrement} color='red'>
                <p>-</p>
            </Button>
            <p style={{color : props.color}}>{count}</p>
            <Button handleClick={increment} children="+" color='green'/>
            <Button handleClick={increment5} children="+5"/>
        </div>
    )
}

export default CountFunction;