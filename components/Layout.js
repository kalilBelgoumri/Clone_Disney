import React, { useRef, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import background from "../public/disney1_background.png";
import background3 from "../public/mobile.png";
import logo from "../public/logo.svg";
import { useRouter } from "next/router";
import { useMediaQuery } from "react-responsive";
import { FaSearch } from "react-icons/fa";
import Search from "./Search";

export default function Layout({ children, title }) {
  const router = useRouter();
  const searchInput = useRef(null);
  const isTabletOrMobile = useMediaQuery({ query: "(min-width: 778px)" });

  // const handleInput = () => {
  //   searchInput.current.classList.add("searchInputAdd");
  // };

  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      {/* Background */}
      <div className="h-16 w-full flex items-center md:h-28 shadow-2xl ">
        {/* Logo */}
        <div className="logo flex mx-auto items-center ">
          <Image
            width={isTabletOrMobile ? 200 : 100}
            className="cursor-pointer"
            src={logo}
            alt="logo"
            priority="responsive"
            onClick={() => router.push("/")}
          />
        </div>
        <div className="flex absolute right-6 z-10 md:hidden">
          <FaSearch size="19" />
        </div>
        <div className="absolute right-5">
          <Search />
        </div>
      </div>
      {/* Background_cover */}
      {isTabletOrMobile ? (
        <Image src={background} priority="responsive" alt="background3" />
      ) : (
        <Image src={background3} priority="responsive" alt="background" />
      )}

      {/* <Image
        className="bg-red-500 w-screen"
        src={background_down}
        priority="responsive"
        alt="backround_down"
      /> */}
      <main>{children}</main>
    </div>
  );
}
