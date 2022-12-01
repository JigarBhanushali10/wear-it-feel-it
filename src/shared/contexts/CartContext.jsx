import React, { useEffect, useState } from 'react';

export const CartContext = React.createContext()

const CartProvider = CartContext.Provider


export const CartStore = ({ children }) => {
    const [items, addItems] = useState([])
    const setItems = (product) => {
        addItems(oldArry => [...oldArry, product])
    }



    return (
        <CartProvider value={{ items, setItems, }}>
            {children}
        </CartProvider>
    )
}

