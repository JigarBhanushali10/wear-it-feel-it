import React from "react";
import {products} from '../localDb/db'
export const CartContext= React.createContext({
  products,
  cart: [],
  addProductToCart: (product:any) => {},
  removeProductFromCart: (productId:any) => {},
  removeEntireProduct: (productId:any) => {}
});
