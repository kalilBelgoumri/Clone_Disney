import React from "react";
import Head from "next/head";
import Image from "next/image";
import background from "../assets/disney1_background.png";
import logo from "../assets/logo.svg";

export default function Layout({ children, title }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="bg-gray-200 w-full h-32 shadow-2xl ">
        <div className="logo flex">
          <Image src={logo} alt="logo" />
        </div>
      </div>
      <Image
        className="absolute top-0"
        src={background}
        priority="responsive"
        alt="background"
      />
      <main>{children}</main>
    </div>
  );
}
