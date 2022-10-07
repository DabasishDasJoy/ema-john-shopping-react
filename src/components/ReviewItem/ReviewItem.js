import { TrashIcon } from "@heroicons/react/24/solid";
import React from "react";

const ReviewItem = ({
  handleRemoveItem,
  product: { id, img, name, price, quantity },
}) => {
  return (
    <div className="w-[600px] h-[107px] border-[1px] border-[#95A0A7] rounded-lg mb-6 flex items-center">
      <div className="m-[8px]">
        <img src={img} alt="" className="w-[91px] rounded-lg" />
      </div>
      <div className="m-[8px] flex grow items-center justify-between">
        <div className="flex flex-col gap-[8px]">
          <h5 className="font-normal text-[21px] leading-[25px] text-[#1C2B35]">
            {name}
          </h5>
          <p className="text-[15px] leading-[18px]">
            Price: <span className="text-[#FF9900]">${price}</span>
          </p>
          <p className="text-[15px] leading-[18px]">
            Quantity: <span className="text-[#FF9900]">{quantity}</span>
          </p>
        </div>
        <div>
          <button
            onClick={() => handleRemoveItem(id)}
            className="w-[55px] h-[55px] rounded-[50%] bg-[#EB5757] opacity-30 "
          >
            <TrashIcon className="h-[31.43px] w-[27.4px] m-auto color='red'"></TrashIcon>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
