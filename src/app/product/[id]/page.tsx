import Price from "@/components/Price";
import { singleProduct } from "@/data";
import React from "react";
import Image from "../../../../node_modules/next/image";
import Link from "../../../../node_modules/next/link";

const SingleProductPage = () => {
  return (
    <div className="py-8 h-screen flex flex-col lg:px-20 xl:px-40 text-red-500  md:flex-row justify-center items-center lg:flex-row ">
      {/* image */}
      {singleProduct.img && (
        <div className="relative w-full h-1/2">
          <Image
            src={singleProduct.img}
            alt=""
            fill
            className="object-contain"
          />
        </div>
      )}

      {/* price */}
      <div className="h-1/2 flex flex-col gap-4 px-4 justify-center">
        <h1 className="font-bold text-3xl uppercase">{singleProduct.title}</h1>
        <p>{singleProduct.desc}</p>
        <Price
          price={singleProduct.price}
          id={singleProduct.id}
          options={singleProduct.options}
        />
      </div>
    </div>
  );
};

export default SingleProductPage;
