"use client";
import React, { useState, useEffect } from "react";
import Image from "../../node_modules/next/image";

const data = [
  {
    id: 1,
    title: "always fresh & always crispy & always hot",
    //image: "/slide1.png",
    image:
      "https://media.istockphoto.com/id/1335052543/photo/waitress-serving-food-to-a-group-of-customers-at-a-restaurant.jpg?s=612x612&w=0&k=20&c=cJGmAEOWeUw93TnVDJ2M1YjvG2RQkFFGoSmmagO22Tg=",
  },
  {
    id: 2,
    title: "we deliver your order wherever you are in NY",
    image: "/slide2.png",
  },
  {
    id: 3,
    title: "the best pizza to share with your family",
    image: "/slide3.jpg",
  },
];

const Slider = () => {
  const [curr, setCurr] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Increment the current index in a cyclic manner
      setCurr((prevIndex) => (prevIndex + 1) % data.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div className="flex flex-col h-[calc(100vh-6rem)]  md:h-[calc(100vh-9rem)] lg:flex-row">
      {/* text */}
      <div className="h-1/2 flex flex-col gap-8 justify-center items-center text-red-500 font-bold lg:h-full lg:w-1/2">
        <h1 className="text-5xl text-center uppercase p-4 md:text-6xl xl:text-7xl">
          {data[curr].title}
        </h1>
        <button className="bg-red-500 text-white py-4 px-8">Order now</button>
      </div>

      {/* image */}
      <div className="h-1/2 w-full relative lg:h-full lg:w-1/2">
        <Image src={data[curr].image} alt="" fill className="object-cover" />
      </div>
    </div>
  );
};

export default Slider;
