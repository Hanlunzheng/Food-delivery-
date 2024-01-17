import React from "react";
import Image from "../../../node_modules/next/image";
import Link from "../../../node_modules/next/link";

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center p-4 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)]">
      {/* box */}
      <div className="h-full shadow-2xl rounded-mf flex flex-col md:flex-row md:h-[70%] md:w-full lg:w-[60%] 2xl:w-[50%]">
        {/* img  container*/}
        <div className="relative flex-1">
          <Image src="/loginBg.png" alt="" fill className="object-cover" />
        </div>
        {/* desc */}
        <div className="flex-1 flex flex-col items-center gap-4 p-4">
          <h1 className="font-bold text-2xl uppercase">welcome</h1>
          <p>
            please login your account or create a new one using social buttons
          </p>
          <button className="flex gap-4 ring-1 ring-orange-400 rounded-md items-center p-2">
            <Image
              src="/google.png"
              alt=""
              width={20}
              height={20}
              className=""
            />
            <span>sign in with google</span>
          </button>
          <button className="flex gap-4 ring-1 ring-green-400 rounded-md items-center p-2">
            <Image
              src="/facebook.png"
              alt=""
              width={20}
              height={20}
              className=""
            />
            <span>sign in with facebook</span>
          </button>
          <p>
            have any problem?
            <Link className="underline" href="/">
              Contact us
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
