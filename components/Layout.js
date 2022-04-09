import React from "react";
import Head from "next/head";
import Image from "next/image";
import background from "../assets/disney1_background.png";
import background_down from "../assets/download.svg";
import logo from "../assets/logo.svg";

export default function Layout({ children, title }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <div className=" w-full h-30  shadow-2xl ">
        <div className="logo flex justify-center">
          <Image src={logo} alt="logo" priority="responsive" width={160} />
        </div>
      </div>
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
