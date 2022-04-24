import Head from "next/head";
import Image from "next/image";
import background from "../public/disney1_background.png";
import background3 from "../public/mobile.png";
import logo from "../public/logo.svg";
import { useRouter } from "next/router";
import { useMediaQuery } from "react-responsive";
import HamburgerMenu from "./HamburgerMenu";
import Navbar from "./Navbar";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import download from "../public/download.svg";
import PaperNav from "./Paper";
import { Container } from "@mui/material";
import MainOne from "./main/MainOne";
import MainTwo from "./main/MainTwo";
import Divider from "@mui/material/Divider";
import separator from "../..../../public/separator.png";
import MainThree from "./main/MainThree";
import CardMainThree from "./CardMainThree";
import DatasMain from "../data/DatasMain";
export default function Layout({ children, title }) {
  const router = useRouter();
  const isTabletOrMobile = useMediaQuery({ query: "(min-width: 778px)" });
  const testRef = useRef(null);

  const mouseOk = () => {
    testRef.current.classList.add("test");
  };
  const mouseOut = () => {
    testRef.current.classList.remove("test");
  };
  // const handleInput = () => {
  //   searchInput.current.classList.add("searchInputAdd");
  // };

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      {/* Background */}

      <div className="flex h-14 w-full items-center shadow-2xl md:h-28 md:justify-center ">
        <div className="ml-3 flex flex-col items-center md:hidden">
          <HamburgerMenu />
          <span className="text-[10px]">Menu</span>
        </div>

        {/* Logo */}
        <div className="mx-auto flex md:mb-12">
          <Image
            width={isTabletOrMobile ? 160 : 150}
            className="cursor-pointer "
            src={logo}
            alt="logo"
            priority="responsive"
            onClick={() => router.push("/")}
          />
        </div>
        <div className="absolute mt-12 hidden md:flex">
          <Link href="/billet">
            <a
              onMouseEnter={"active"}
              className={`pr-2 text-[13px] font-semibold  ${
                router.pathname == "/billet" ? "active" : ""
              }`}
            >
              NOS 2 PARCS
            </a>
          </Link>
          <Link href="/hebergement">
            <a
              onMouseEnter={mouseOk}
              onMouseOut={mouseOut}
              className={`pr-2 text-[13px] font-semibold ${
                router.pathname == "/hebergement" ? "active" : ""
              }`}
            >
              HEBERGEMENTS
            </a>
          </Link>
          <Link href="/restauration">
            <a
              onMouseEnter={mouseOk}
              onMouseOut={mouseOut}
              className={`pr-2 text-[13px] font-semibold ${
                router.pathname == "/restauration" ? "active" : ""
              }`}
            >
              RESTAURATON
            </a>
          </Link>
          <Link href="/billet">
            <a
              onMouseEnter={mouseOk}
              onMouseOut={mouseOut}
              className={`pr-2 text-[13px] font-semibold ${
                router.pathname == "/billet" ? "active" : ""
              }`}
            >
              BILLET & SEJOURS
            </a>
          </Link>
          <Link href="/visite">
            <a
              onMouseEnter={mouseOk}
              onMouseOut={mouseOut}
              className={`pr-2 text-[13px] font-semibold ${
                router.pathname == "/visite" ? "active" : ""
              }`}
            >
              PREPARER VOTRE VISITE
            </a>
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <span ref={testRef} />
      </div>

      <div className="absolute top-5 right-5">
        <Navbar />
      </div>

      {/* Background_cover */}
      {isTabletOrMobile ? (
        <Image
          className="w-screen"
          src={background}
          priority={true}
          alt="background3"
        />
      ) : (
        <Image
          src={background3}
          priority="responsive"
          loading="eager"
          alt="background"
        />
      )}

      <div className="relative bottom-28 flex justify-center">
        <PaperNav />
      </div>
      <div className="-mb-5 flex justify-center">
        <h1 className="text-2xl">En ce moment à Disneyland Paris</h1>
      </div>
      <Container maxWidth="md" className="mt-7">
        {/* MainTwo */}
        <MainOne />
      </Container>
      {/* MainTwo */}
      <Container className="mt-14" maxWidth="md">
        <MainTwo />
      </Container>

      {/* Divider */}
      <div className="mt-10">
        <Image src={separator} sizes="100%" Layout="responsive" alt="mickey" />
      </div>

      {/* MainThree */}
      <Container maxWidth="lg" className="mt-14">
        <MainThree />

        <div className="mt-10 flex   justify-center gap-5 overflow-x-auto">
          {DatasMain?.map((data) => (
            <ul key={data.id} className="flex snap-x snap-mandatory ">
              <CardMainThree
                className="snap-center snap-always"
                image={data.url}
                typo1={data.title}
                typo={data.description}
                button={
                  <span className="rounded-full border-2 border-blue-800 px-5 py-2">
                    {data.btn}
                  </span>
                }
              />
            </ul>
          ))}
        </div>
      </Container>

      <main>{children}</main>
    </>
  );
}

// This also gets called at build time
export async function getStaticProps() {
  const res = await fetch(`../data/DatasMain`);
  const DatasMain = await res.json();

  // Pass post data to the page via props
  return { props: { DatasMain } };
}

console.log(DatasMain);
