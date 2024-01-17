import React from "react";
import { menu } from "@/data";
import Link from "../../../node_modules/next/link";

const Menu = () => {
  return (
    <div className="p-4 lg:px-20 xl:px-40 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col md:flex-row items-center">
      {menu.map((item) => (
        <Link
          href={`/menu/${item.slug}`}
          key={item.id}
          style={{ backgroundImage: `url(${item.img})` }}
          className="w-full h-1/3 bg-cover p-8 md:h-1/2"
        >
          <div className={`text-${item.color} w=1/2`}>
            <h1 className="text-3xl font-bold ">{item.title}</h1>
            <p className="text-sm my-8">{item.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Menu;
