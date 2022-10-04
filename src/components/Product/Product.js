import React from "react";
import { Card } from "react-daisyui";

const Product = ({ product: { id, name, seller, ratings, img, price } }) => {
  return (
    <Card className="w-[300px] h-[508px] rounded-lg border-[1px] border-[#95A0A7]">
      <Card.Image
        src={img}
        alt="Shoes"
        className="w-[286px] h-[286px] my-[8px] mx-[7px] rounded-lg"
      />
      <Card.Body className="px-3 py-[2px] flex flex-col gap-5">
        <div className="text-[#0E161A]">
          <h6 className="text-[21px] font-normal leading-6 tracking-[0.0015em] normal">
            {name}
          </h6>
          <p className="font-normal text-[17px] leading-5">Price: ${price}</p>
        </div>
        <div className="font-normal text-[12px] leading-[14.4px] tracking-[0.4%git add .] text-[#2A414F]">
          <p>
            <small>Manufacturer: {seller}</small>
          </p>
          <p>
            <small>Ratings: {ratings} stars</small>
          </p>
        </div>
      </Card.Body>
      <button className="bg-orange-300 absolute bottom-0 w-full m-0 h-[48px] border-t-[1px] border-t-[#95A0A7] font-normal text-[15px] leadin-[18px] tracking-[0.0125em] text-[#0E161A]">
        Add to Cart
      </button>
    </Card>
  );
};

export default Product;
