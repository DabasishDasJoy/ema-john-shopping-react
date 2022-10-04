import React from "react";
import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";

const Order = () => {
  const products = useLoaderData();

  return (
    <div className="grid grid-cols-5 mt-[80px]">
      <div className="grid grid-cols-3 col-span-4 px-[100px] py-[120px] gap-11">
        {products.map((product) => (
          <Product product={product} key={product.id}></Product>
        ))}
      </div>
      <div className=" bg-[#FF9900] bg-opacity-[30%] col-span-1">
        <Cart></Cart>
      </div>
    </div>
  );
};

export default Order;
