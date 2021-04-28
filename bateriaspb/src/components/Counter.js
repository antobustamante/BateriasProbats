import React from 'react';
import './../containers/CounterContainer.css'

export default function Counter({increment, decrement}){

    return(
        <div>
            <button className='boton' onClick={increment}>+</button>
            <button className='boton' onClick={decrement}>-</button>
        </div>
    )
}