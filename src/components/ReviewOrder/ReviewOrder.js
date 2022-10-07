import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";

const ReviewOrder = () => {
  const { initialCart } = useLoaderData();
  const [cart, setCart] = useState(initialCart);

  const handleRemoveItem = (id) => {
    const remainingItems = cart.filter((item) => item.id !== id);
    setCart(remainingItems);
    removeFromDb(id);
  };

  return (
    <div className="grid grid-cols-5 mt-[80px]">
      <div className="col-span-4 px-[100px] py-[120px] mx-auto">
        {cart.map((product) => (
          <ReviewItem
            product={product}
            key={product.id}
            handleRemoveItem={handleRemoveItem}
          ></ReviewItem>
        ))}
      </div>
      <div className=" bg-[#FF9900] bg-opacity-[30%] col-span-1 min-h-full">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default ReviewOrder;
