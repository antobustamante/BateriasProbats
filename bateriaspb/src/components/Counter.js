import React from 'react';

export default function Counter({increment, decrement}){

    return(
        <div>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    )
}