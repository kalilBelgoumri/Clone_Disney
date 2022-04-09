import React from "react";
import Head from "next/head";
import Image from "next/image";
import background from "../assets/disney1_background.png";
import background_down from "../assets/download.svg";
import logo from "../assets/logo.svg";
import { useRouter } from "next/router";

export default function Layout({ children, title }) {
  const router = useRouter();
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
        <div className=" h-[8.5vh] border-t-gray border-[1px]"></div>
      </div>
      {/* Background_cover */}
      <Image src={background} priority="responsive" alt="background" />
      <div className="">
        <Image
          className="bg-red-500 w-screen"
          src={background_down}
          priority="responsive"
          alt="backround_down"
        />
      </div>
      <main>{children}</main>
    </div>
  );
}
