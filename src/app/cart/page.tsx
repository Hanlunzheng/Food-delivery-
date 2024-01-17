import React from "react";
import Image from "../../../node_modules/next/image";

const CartPage = () => {
  return (
    <div className="h-[calc(100vh-6rem) text-red-500] md:h-[calc(100vh-9rem)] flex flex-col lg:flex-row">
      {/* product container */}
      <div className="flex-1 p-4 flex flex-col justify-center gap-4 overflow-scroll lg:h-full lg:w-2/3">
        {/* single product */}
        <div className="flex items-center justify-between mb-2">
          <Image src="/temporary/p1.png" alt="" width={100} height={100} />

          <div className="">
            <h1 className="uppercase text-xl font-bold">Sliciliab pizza</h1>
            <span>large</span>
          </div>

          <span className="font-bold">$24.99</span>
          <span className="cursor-pointer">X</span>
        </div>
        <div className="flex items-center justify-between mb-2">
          <Image src="/temporary/p1.png" alt="" width={100} height={100} />

          <div className="">
            <h1 className="uppercase text-xl font-bold">Sliciliab pizza</h1>
            <span>large</span>
          </div>

          <span className="font-bold">$24.99</span>
          <span className="cursor-pointer">X</span>
        </div>
        <div className="flex items-center justify-between mb-2">
          <Image src="/temporary/p1.png" alt="" width={100} height={100} />

          <div className="">
            <h1 className="uppercase text-xl font-bold">Sliciliab pizza</h1>
            <span>large</span>
          </div>

          <span className="font-bold">$24.99</span>
          <span className="cursor-pointer">X</span>
        </div>
      </div>

      {/* payment */}
      <div className=" flex-1  flex flex-col   justify-center p-4 gap-4 bg-fuchsia-50 lg:h-full lg:w-1/3">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>$81</span>
        </div>
        <div className="flex justify-between">
          <span>Service Cost</span>
          <span>$00.00</span>
        </div>
        <div className="flex justify-between">
          <span>Delivery Cost</span>
          <span className="uppercase text-green-400 ">Free!</span>
        </div>
        <hr className="mb-4" />
        <div className="flex justify-between ">
          <span>Total cost</span>
          <span>$34.44</span>
        </div>

        <div className="flex justify-center">
          <button className="bg-red-500 text-white p-3 rounded-md w-1/2">
            Check out
          </button>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default CartPage;
