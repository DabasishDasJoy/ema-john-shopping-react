import { ArrowRightIcon, TrashIcon } from "@heroicons/react/24/solid";
import React from "react";

const Cart = () => {
  return (
    <div className="sticky top-[108px] flex flex-col gap-14">
      <div>
        <h4 className="font-normal text-[25px] leading-[30px] text-[#1C2B35] text-center">
          Order Summury
        </h4>
      </div>

      <div className="text-[#2A414F] font-normal text-[17px] leading-[20px] tracking-[0.005em] flex flex-col gap-[25px] px-[23px]">
        <p>Selected Items: </p>
        <p>Total Price: $</p>
        <p>Total Shipping Charges: $</p>
        <p>Tax: $</p>
        <h3 className="text-[#0E161A] font-normal text-[21px] leading-[25px] tracking-[0.0015em]">
          Grand Total: $
        </h3>
      </div>

      <div className="flex flex-col gap-[16px] justify-center items-center">
        <button className="w-[232px] h-[48px] rounded bg-[#FF3030] text-white font-normal leading-[20px] flex justify-center items-center gap-1">
          Clear Cart <TrashIcon className="h-4 w-4"></TrashIcon>
        </button>
        <button className="w-[232px] h-[48px] rounded bg-[#FF9900] text-white font-normal leading-[20px] flex justify-center items-center gap-1">
          Review Order <ArrowRightIcon className="h-4 w-4 stroke-2" />
        </button>
      </div>
    </div>
  );
};

export default Cart;
