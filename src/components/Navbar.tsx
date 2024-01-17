import React from "react";

import Link from "../../node_modules/next/link";
import CartIcon from "./CartIcon";
import Menu from "./Menu";
import Image from "../../node_modules/next/image";

const Navbar = () => {
  const user = false;
  return (
    <div className="h-12 flex items-center text-red-500 p-4 justify-between border-b-2 border-b-red-500 md:h-24 lg:px-20 lx:px-40 ">
      {/* left link */}
      <div className="hidden md:flex gap-4 flex-1">
        {" "}
        <Link href="/">Homepage</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/orders">My order</Link>
      </div>
      {/* logo */}

      <div className="text-xl md:font-bold flex-1 md:text-center">
        <Link href="">Aaron</Link>
      </div>

      {/* mobile menu */}

      <div className="md:hidden">
        <Menu />
      </div>

      {/* right link */}
      <div className="hidden md:flex items-center gap-4 flex-1">
        <div className="flex items-center justify-center gap-2 cursor-pointer bg-orange-300 px-1 rounded-md">
          <Image src="/phone.png" alt="" width={20} height={20} />
          <span>301-256-1212</span>
        </div>
        {!user ? (
          <Link href="/login">Login</Link>
        ) : (
          <Link href="/orders">Order</Link>
        )}

        <CartIcon />
      </div>
    </div>
  );
};

export default Navbar;
