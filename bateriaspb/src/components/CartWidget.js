import React from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

function CartWidget(){
    return(
        <div>
            <ShoppingCartIcon styles={{verticalAlign: 'inherit'}}/>
        </div>
    )
}

export default CartWidget;