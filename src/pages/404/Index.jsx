import React from "react";
import { FaArrowAltCircleLeft, FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const Notfound = () => {
  return (
    <div className="relative h-screen w-full bg-404-image bg-cover bg-no-repeat bg-bottom flex items-center justify-center before:contents-[''] before:absolute before:bg-black before:bg-opacity-30 before:inset-0">
      <div className="flex flex-col space-y-6 items-center -mt-32 z-10 text-white">
        <span className="text-xl font-bold">404</span>
        <span className="text-5xl font-[700]">Page not found</span>
        <span className="text-sm font-[400]">
          Sorry, We could't find the page you were looking for
        </span>
        <div className="relative pl-7 cursor-pointer text-grape border-[1px] border-vine py-2 pr-2 rounded-md ">
          <FaArrowLeft className="absolute left-2 top-0 bottom-0 my-auto text-sm font-bold" />
          <Link className="text-[1rem] font-bold" to={"/"}>
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Notfound;
