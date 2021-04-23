import React from 'react';

export default function Item({data}) {
  return (
    <li>Nombre: {data.nombre} Tipo: {data.tipo}</li>
  )
}