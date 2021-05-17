import React, {useState} from 'react';
import Visualizer from '../components/Visualizer';
import Counter from '../components/Counter';
import './CounterContainer.css';
import Button from 'react-bootstrap/Button';

export default function CounterContainer({finalizar}) {
    const [number, setNumber] = useState(0);

  
    function onIncrement(){
      
      if(number<5){
      setNumber(number + 1);
      }
    }
  
    function onDecrement(){
      if(number>0){
      setNumber(number - 1);
      }
    }

    function addToCart(){
      finalizar(number);
    }

      return(
        <div className='containerdiv'>
          <div>
          <Button variant="contained" size="small" color="primary" onClick={addToCart}>
          Agregar al carrito
          </Button>
          </div>
          <Visualizer number={number}/>
          <Counter increment={onIncrement} decrement={onDecrement}/>
        </div>
      )
}