import React from "react";
import horloge from "../assets/horloge.svg";
import france from "../public/france.svg";
import CartBadge from "./Cart";
import { FaUserAlt } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import Search from "./Search";
import Image from "next/image";

function Navbar() {
  return (
    <>
      {/* Horaire */}
      <div className="flex justify-center items-center">
        <div className="menu__right flex items-center">
          <div className="hidden pr-2  md:inline-flex ">
            <button className=" rounded-full border  shadow-2xl py-1 px-3 flex items-center ">
              <Image src={horloge} alt="horloge" />
              <span className="text-[10px] font-semibold pl-1">
                Horaires des Parcs
              </span>
            </button>
          </div>
          {/* Mobile */}
          <div className="hidden mr-4 md:inline-flex   rounded-full border p-1 shadow-2xl">
            <FaSearch size="14" />
          </div>
          {/* Drapeau */}
          <div className="hidden mr-4 md:inline-flex w-7   rounded-full border  shadow-2xl">
            <Image src={france} alt="france" />
          </div>
          {/* Login */}
          <div className="hidden mr-6 lg:flex items-center ">
            <button className=" rounded-full border  shadow-2xl py-1 px-2 flex items-center ">
              <FaUserAlt size="12" />
              <span className="text-[9px] font-semibold pl-1 flex">
                Me connecter
              </span>
            </button>
          </div>
          <div className="login flex items-center  md:hidden ">
            <FaUserAlt />
          </div>
          {/* Cart */}
          <div className="hidden md:inline-flex w-7  rounded-full border  shadow-2xl">
            <CartBadge />
          </div>
          {/* Desktop */}
          <div className="flex  z-10 lg:hidden">
            <FaSearch size="19" />
          </div>
          <div className="">
            <Search />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
