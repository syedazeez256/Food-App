import React from "react";
import { AiFillBehanceCircle } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="w-full h-20 fixed top-0 bg-white z-30 md:2text-xl">
      <div className="flex items-center justify-between w-full h-20 fixed top-0 bg-white z-30 md:text-2xl">
        <div className="flex items-center ml-2">
          <p className="mr-1 cursor-pointer">
            <AiFillBehanceCircle size={25} />
          </p>
          <p className="md:text-2xl text-2xl">
            Best <span className="font-bold">Eats</span>
          </p>
        </div>
        <div className="hidden flex items-center justify-evenly sm:block ">
          <p className="relative left-9 top-8">
            <AiOutlineSearch size={20} />
          </p>
          <input
            type="search"
            placeholder="Search foods..."
            className="bg-gray-100 px-24 py-2 rounded-2xl w-full hover:scale-105 duration-300"
          />
        </div>
        <div className="sm:flex items-center justify-between sm:mr-2 mr-2">
          <div className="flex justify-center items-center items-end cursor-pointer ">
            <p className="relative left-9 text-black">
              <AiOutlineShoppingCart size={25} />
            </p>
            <p className="px-10 pr-3 font-bold rounded-full border-black bg-white border-2 text-black py-2 text-white font-regular text-sm mr-1">
              Cart
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-evenly sm:hidden relative top-16 z-40 w-full mt-1 pb-2 ml-0 bg-white">
        <p className="relative left-6 text-black">
          <AiOutlineSearch size={20} />
        </p>
        <input
          type="search"
          placeholder="Search foods..."
          className="bg-gray-100 px-12 py-2 mr-2 rounded-2xl w-full hover:scale-105 duration-300"
        />
      </div>
    </div>
  );
};

export default Navbar;
