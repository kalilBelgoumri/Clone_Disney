import React, { useRef, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import background from "../public/disney1_background.png";
import background3 from "../public/mobile.png";
import logo from "../public/logo.svg";
import { useRouter } from "next/router";
import { useMediaQuery } from "react-responsive";

import HamburgerMenu from "./HamburgerMenu";
import Navbar from "./Navbar";

export default function Layout({ children, title }) {
  const router = useRouter();
  const searchInput = useRef(null);
  const isTabletOrMobile = useMediaQuery({ query: "(min-width: 778px)" });

  // const handleInput = () => {
  //   searchInput.current.classList.add("searchInputAdd");
  // };

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      {/* Background */}

      <div className="h-14 w-full flex items-center md:justify-center md:h-28 shadow-2xl ">
        <div className="flex flex-col items-center ml-3 md:hidden">
          <HamburgerMenu />
          <span className="text-[10px]">Menu</span>
        </div>
        {/* Logo */}
        <div className="flex mx-auto md:mb-12">
          <Image
            width={isTabletOrMobile ? 160 : 150}
            className="cursor-pointer "
            src={logo}
            alt="logo"
            priority="responsive"
            onClick={() => router.push("/")}
          />
        </div>
      </div>
      <div className="absolute top-5 right-5">
        <Navbar />
      </div>

      {/* Background_cover */}
      {isTabletOrMobile ? (
        <Image
          className="w-screen"
          src={background}
          priority="responsive"
          alt="background3"
        />
      ) : (
        <Image src={background3} priority="responsive" alt="background" />
      )}
      <main>{children}</main>
    </>
  );
}
