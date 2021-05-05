import React from 'react';
import './../containers/CounterContainer.css';
import Button from 'react-bootstrap/Button';

export default function Counter({increment, decrement}){

    return(
        <div>
            <Button className='boton' onClick={increment}>+</Button>
            <Button className='boton' onClick={decrement}>-</Button>
        </div>
    )
}