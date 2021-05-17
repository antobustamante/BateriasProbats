import React, {useContext} from "react";
import Cart from "./Cart";
import { CartContext } from '../context/cartContext';
import Table from 'react-bootstrap/Table'

export default function CartList() {
    const { cart, clearCart, totalPrice } = useContext(CartContext);
    
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th></th>
                        <th>Producto</th>
                        <th>Cantidad</th>
                        <th>Eliminar</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map(item => (
                        <Cart key={item.id} itemSale={item}/>
                    ))}
                </tbody>
                <tfoot>
                    { cart.length === 0 ? 
                        <tr>
                            <th colSpan="5">Carrito vacío</th>
                        </tr>
                        :
                        <tr>
                            <td></td>
                            <td></td>
                            <td>
                                <button onClick={clearCart}>
                                    Vaciar Carrito
                                </button>
                            </td>
                            <td className="font-weight-bold">Total a abonar</td>
                            <td className="font-weight-bold">$ <span>{totalPrice}</span></td>
                        </tr>
                    }
                </tfoot>
            </Table>
        </div>
        );
    }