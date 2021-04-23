import React from 'react';
import Cards from './Cards';

export default function List({dataInput}) {
  return (
    <ul>
      {
        dataInput.map((data) => { 
          return (
            <Cards key={data.id} data={data}/>
          )
        })
      }
    </ul>
  )
}