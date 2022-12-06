import { totalmem } from "os";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../shared/contexts/CartContext";



const Cart = () => {


  // navigator.geolocation.getCurrentPosition(function (position) {
  //   console.log("Latitude is :", position.coords.latitude);
  //   console.log("Longitude is :", position.coords.longitude);
  // });


  const { cart, addProductToCart, removeProductFromCart, products, removeEntireProduct } = useContext(CartContext)

  const addProduct = (product: any) => {
    addProductToCart(product)
  }
  const deleteEntireProduct = (id: any) => {
    removeEntireProduct(id)
    // settotalAmount(0)
  }
  const removeProduct = (id: any) => {
    removeProductFromCart(id)
  }
  const totalAmount = cart.reduce((count: any, curItem: { amount: any; }) => {
    return count + parseFloat(curItem.amount);
  }, 0)

  return (
    <div className='flex-grow-1'>
      <div className='bg-secondary '>
        <div className="container ">

          {cart.map((items: any) => {
            return (
              <div key={items.id} className='d-flex'>
                <div>
                  <figure className="w-25">
                    <img src={items.jersey1} alt="" className="img-fluid" />
                  </figure>
                  <div>
                    {items.price}
                    {items.productName}
                  </div>
                </div>
                <div>

                  <div>
                    <button onClick={() => addProduct(items)} className='btn btn-primary mx-3 px-3'>+</button>
                    <button className='btn  mx-3 px-3  py-1'>{items.quantity}</button>
                    <button onClick={() => removeProduct(items.id)} className='btn btn-primary mx-3 px-3'>-</button>
                  </div>
                  <button onClick={() => deleteEntireProduct(items.id)} className='btn btn-danger px-3  py-1'>Delete</button>
                </div>
                <div>
                  ₹ {items.amount}
                </div>
              </div>
            )
          })}

          {totalAmount}
        </div>
      </div>

    </div>)
}

export default Cart