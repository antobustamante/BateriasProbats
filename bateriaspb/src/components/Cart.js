import React, { useContext } from "react";
import { CartContext } from '../context/cartContext';
import Button from 'react-bootstrap/Button';

export default function Cart({ itemSale}) {
    const { updateToCart, handleRemove } = useContext(CartContext);

    function increaseQuantity(){
        const newItem = {
            id: itemSale.id,
            nombre: itemSale.nombre,
            tipo: itemSale.tipo,
            precio: itemSale.precio,
            cantidad: itemSale.cantidad +1
        };
        updateToCart(newItem);
    }

    function reduceQuantity(){
        const newItem = {
            id: itemSale.id,
            nombre: itemSale.nombre,
            tipo: itemSale.tipo,
            precio: itemSale.precio,
            cantidad: itemSale.cantidad -1
        };
        updateToCart(newItem);
    }

    return (
        <tr>
            <th>{itemSale.nombre}</th>
            <td>{itemSale.tipo}</td>
            <td>
            {
                itemSale.cantidad < 5 ? <Button onClick={increaseQuantity}>+</Button> : <Button variant="disabled"></Button>
            }
            
                <span>{itemSale.cantidad}</span>
            
            {
                itemSale.cantidad > 1 ? <Button onClick={reduceQuantity}>-</Button> : <Button variant="disabled"></Button>
            }
            
            </td>
            <td>
                <button onClick={() => handleRemove(itemSale.id)}>
                    <img src="" alt="Borrar"/>
                </button>
            </td>
            <td>$ <span>{(itemSale.precio*itemSale.cantidad).toFixed(2)}</span></td>
        </tr>
    )
}