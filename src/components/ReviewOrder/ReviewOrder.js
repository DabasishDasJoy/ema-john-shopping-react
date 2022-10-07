import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
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
        {cart.length ? (
          cart.map((product) => (
            <ReviewItem
              product={product}
              key={product.id}
              handleRemoveItem={handleRemoveItem}
            ></ReviewItem>
          ))
        ) : (
          <h2 className="mt-[80px]">
            {" "}
            No Items to review. Please{" "}
            <Link to={"/order"} className="underline text-[blue]">
              Shop More
            </Link>
          </h2>
        )}
      </div>
      <div className=" bg-[#FF9900] bg-opacity-[30%] col-span-1 min-h-screen">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default ReviewOrder;
