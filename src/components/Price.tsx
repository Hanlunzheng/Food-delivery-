"use client";
import { type } from "os";
import React, { useEffect, useState } from "react";

type Props = {
  price: number;
  id: number;
  options?: { title: string; additionalPrice: number }[];
};

const Price = ({ price, id, options }: Props) => {
  const [total, setTotal] = useState(price);
  const [quantity, setQuantity] = useState(1);
  const [itemSelected, setItemSelected] = useState(0); //item idex

  useEffect(() => {
    setTotal(
      quantity *
        (options ? price + options[itemSelected].additionalPrice : price)
    );
  }, [quantity, itemSelected, options, price]);

  return (
    <div className="flex flex-col gap-4">
      <span className="text-2xl font-bold">${total.toFixed(2)}</span>
      {/* optitons container */}
      <div className="flex justify-between items-center ">
        {options?.map((item, index) => (
          <button
            onClick={() => setItemSelected(index)}
            className="text-red-500 p-2 ring-1 ring-red-500 rounded-md text-m min-w-[6rem]"
            key={item.title}
            style={{
              background: itemSelected === index ? "black" : "white",
              color: itemSelected === index ? "white" : "red",
            }}
          >
            {item.title}
          </button>
        ))}
      </div>

      {/* quanitiy and button */}

      <div className="flex justify-center items-center">
        <div className="flex w-full justify-between p-2 ring-1 ring-red-500">
          <span>Quantity</span>
          <div className="flex gap-3">
            <button
              onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
            >
              {"<"}
            </button>
            <span>{quantity}</span>
            <button onClick={() => setQuantity((prev) => prev + 1)}>
              {">"}
            </button>
          </div>
        </div>
        <button className="uppercase w-56 bg-red-500 text-white p-2 ring-1 rounded-md">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Price;
