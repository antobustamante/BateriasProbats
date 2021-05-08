import React, { useState, useContext } from "react";
import { CartContext } from '../context/cartContext';
import Button from 'react-bootstrap/Button';

export default function Cart({ itemSale, stock }) {
    const [number, setNumber] = useState(itemSale.cantidad);
    const { updateToCart, handleRemove } = useContext(CartContext);

    function onIncrement() {
        if(stock>number){
            setNumber(number + 1);
        }
        itemSale.cantidad = number;
    }

    function onDecrement() {
        if(number>0){
            setNumber(number - 1);
        }
        itemSale.cantidad = number;
    }

    const [show, setShow] = useState(false);

    function updateQuantity(){
        const newItem = {
            id: itemSale.id,
            tipo: itemSale.tipo,
            precio: itemSale.precio,
            cantidad: number
        };
        updateToCart(newItem);
        setShow({
            hidden: true
        });
    }

    var subTotal = itemSale.precio*number;

    return (
        <tr>
            <th>{itemSale.id}</th>
            <td>{itemSale.tipo}</td>
            <td>
                <Button onClick={onIncrement} hidden={show.hidden}>+</Button>
            
                <span>{number}</span>
            
                <Button onClick={onDecrement} hidden={show.hidden}>-</Button>
            </td>
            <td>
                <button onClick={updateQuantity}>Confirmar</button>
                <button onClick={() => handleRemove(itemSale.id)}>
                    <img src="" alt="Borrar"/>
                </button>
            </td>
            <td>$ <span>{subTotal}</span></td>
        </tr>
    )
}