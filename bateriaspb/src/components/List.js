import React from 'react';
import Cards from './Items';

export default function List({dataInput}) {
  return (
    <div>
          {
            dataInput.map((data) => { 
              return (
                <Cards key={data.id} data={data}/>
              )
            })
          }
    </div>
  )
}

