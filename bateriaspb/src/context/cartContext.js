import {createContext, useState } from 'react';

export const CartContext = createContext([]);

export default function AppContextProvider({defaultValue= [], children}){
    const [cart, setCart] = useState(defaultValue);

    function isInCart (id) {
        return cart.some(item => item.id === id)
    }

    function addToCart({id, tipo, precio, cantidad}) {
        const isCurrentInCart = isInCart(id)
        if (isCurrentInCart) {
            const newCart = cart.map(item => {
                if (item.id === id) {
                    return {
                        ...item,
                        cantidad: cantidad + item.cantidad
                    }
                }
                return item
            })
            return setCart([...newCart])
        }
        setCart([...cart, {id, tipo, precio, cantidad}])
    }

    function updateToCart({id, tipo, precio, cantidad}) {
        const isCurrentInCart = isInCart(id)
        if (isCurrentInCart) {
            const newCart = cart.map(item => {
                if (item.id === id) {
                    return {
                        ...item,
                        cantidad: cantidad
                    }
                }
                return item
            })
            return setCart([...newCart])
        }
        setCart([...cart, {id, tipo, precio, cantidad}])
    }

    function clearCart(){
        setCart([]);
    }

    function handleRemove(id) {
        const newcart = cart.filter((item) => item.id !== id);
        setCart(newcart);
    }

    return (
        <CartContext.Provider value={
            {
                cart,
                setCart,
                addToCart,
                clearCart,
                updateToCart,
                handleRemove
            }
        }>
            {children}
        </CartContext.Provider>
    )
}