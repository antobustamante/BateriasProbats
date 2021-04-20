import React, {useState, useEffect} from 'react';
import Visualizer from '../components/Visualizer';
import Counter from '../components/Counter';
import './CounterContainer.css';

export default function CounterContainer(props) {
    const [number, setNumber] = useState(0);
    let stock = 4;
  
    useEffect(() => {
      console.log('componentDidMountEffect');
  
    }, []);
  
  
    function onIncrement(){
      if(stock>number){
      setNumber(number + 1);
      }
    }
  
    function onDecrement(){
      if(number>0){
      setNumber(number - 1);
      }
    }
  
      return(
        <div className='container'>
          <Visualizer number={number}/>
          <Counter increment={onIncrement} decrement={onDecrement} stock={stock}/>
        </div>
      )
}