import { useState, useEffect } from 'react';
import Button from './Button/Button';

const CountFunction = (props) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Me ejecuto luego del montaje")

        return () => {
            console.log("Me ejecuto antes de desmontar el elemento");
        }

    }, [])

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