import React from "react";
import Head from "next/head";
import Image from "next/image";
import background from "../public/disney1_background.png";
import background3 from "../public/mobile.png";
import logo from "../public/logo.svg";
import { useRouter } from "next/router";
import { useMediaQuery } from "react-responsive";

export default function Layout({ children, title }) {
  const router = useRouter();

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      {/* Background */}
      <div className=" w-full h-30 shadow-2xl ">
        {/* Logo */}
        <div className="logo flex justify-center ">
          <Image
            className="cursor-pointer"
            src={logo}
            alt="logo"
            priority="responsive"
            width={160}
            onClick={() => router.push("/")}
          />
        </div>
        {/* Background_down */}
        <div className=" h-[8.5vh] border-t-gray border-[1px]" />
      </div>
      {/* Background_cover */}

      {isTabletOrMobile ? (
        <Image src={background3} priority="responsive" alt="background3" />
      ) : (
        <Image src={background} priority="responsive" alt="background" />
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
