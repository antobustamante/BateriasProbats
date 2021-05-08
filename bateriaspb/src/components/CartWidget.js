import React from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {Link} from 'react-router-dom';

function CartWidget(){
    return(
        <div>
            <Link to={`/cart`}>
                <ShoppingCartIcon styles={{verticalAlign: 'inherit'}}/>
            </Link>
        </div>
    )
}

export default CartWidget;