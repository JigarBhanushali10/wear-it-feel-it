import React, { useState, useReducer } from "react";
import {CartContext} from "./CartContext";

import { ADD_PRODUCT, REMOVE_ENTIRE_PRODUCT, REMOVE_PRODUCT, useCartReducer } from "../hooks/useCartReducer";
import { products } from "../localDb/db";


const GlobalStore = (props: any) => {
    const [cartState, dispatch] = useReducer(useCartReducer, { cart: [] });

    const addProductToCart = (product: any) => {
            dispatch({ type: ADD_PRODUCT, product: product });
    };

    const removeProductFromCart = (productId: any) => {
            dispatch({ type: REMOVE_PRODUCT, productId: productId });
    };

    const removeEntireProduct = (productId: any) => {
            dispatch({ type: REMOVE_ENTIRE_PRODUCT, productId: productId });
    };

    return (
        <CartContext.Provider
            value={{
                products: products,
                cart: cartState.cart,
                addProductToCart: addProductToCart,
                removeProductFromCart: removeProductFromCart,
                removeEntireProduct: removeEntireProduct
            }}
        >
            {props.children}
        </CartContext.Provider>
    );
};

export default GlobalStore;
