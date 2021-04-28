import React, {useState} from 'react';
import Visualizer from '../components/Visualizer';
import Counter from '../components/Counter';
import './CounterContainer.css';
import datajson from '../data.json'

export default function CounterContainer({stock}) {
    const [number, setNumber] = useState(0);
    const [data, setData] = useState([]);


    new Promise((resolve) => {
      resolve(datajson); 
    })
    .then(res=> setData(res))

  
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
        <div className='containerdiv'>
          <Visualizer number={number}/>
          <Counter className='boton' increment={onIncrement} decrement={onDecrement} dataInput={data}/>
        </div>
      )
}