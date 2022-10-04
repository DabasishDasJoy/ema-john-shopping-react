import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { addToDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";

const Order = () => {
  const products = useLoaderData();
  //cart state
  const [cart, setCart] = useState([]);

  //addToCartHandler
  const addToCartHandler = (selectedProduct) => {
    // addToCart
    selectedProduct.quantity++;
    const selectedItemInCart = cart.find(
      (cartItem) => cartItem.id === selectedProduct.id
    );

    let newCart = [];
    if (selectedItemInCart) {
      const restItemsInCart = cart.filter(
        (cartItem) => cartItem.id !== selectedItemInCart.id
      );
      newCart = [...restItemsInCart, selectedProduct];
    } else {
      newCart = [...cart, selectedProduct];
    }

    setCart(newCart);
    //addToDb
    addToDb(selectedProduct.id);
  };

  return (
    <div className="grid grid-cols-5 mt-[80px]">
      <div className="grid grid-cols-3 col-span-4 px-[100px] py-[120px] gap-11">
        {products.map((product) => (
          <Product
            product={product}
            addToCartHandler={addToCartHandler}
            key={product.id}
          ></Product>
        ))}
      </div>
      <div className=" bg-[#FF9900] bg-opacity-[30%] col-span-1">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Order;
