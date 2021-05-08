import React from "react";
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import CartList from '../components/CartList';

export default function CartPageContainer() {

    return(
        <div>
            <h2 style={{marginTop:'12vh', textAlign:'center'}}>Carrito de Compras</h2>
            <div>
                <CartList/>
            </div>
            <Button>
                <Link to={`/products`}>Continuar comprando</Link>
            </Button>
        </div>
    )
}