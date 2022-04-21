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
import { useRef } from "react";
import download from "../public/download.svg";
import PaperNav from "./Paper";
import { Container } from "@mui/material";
import mickey from "../public/family-shoot-mickey-newport-bay-club_.jpg";
import mickey1 from "../public/world_disney-premier-access-screen.jpg";

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
        <div className="grid-flow-col grid-cols-2 gap-10 overflow-hidden lg:grid">
          <div className="grid place-content-center ">
            <Image
              className="rounded-lg"
              src={mickey}
              priority="responsive"
              alt="mickey"
            />
            <div className="place-center grid  pt-3">
              <p className="text-lg">Découvrez nos prix du moment</p>
              <p className="mt-4 text-xs text-gray-500">
                Et évadez-vous le temps d’un séjour magique au Coeur du 30e
                Anniversaire !
              </p>
            </div>
            <div className="mt-16 flex items-center justify-center">
              <button
                className="rounded-full border-2 border-[#0046E4] py-1 px-16 text-[#0046E4] "
                type="submit"
              >
                Découvrir
              </button>
            </div>
          </div>
          <div className="grid ">
            <Image
              className="rounded-lg"
              src={mickey1}
              priority="responsive"
              alt="mickey"
            />
            <div className="grid pt-1">
              <p className="text-lg">Disney Premier Access</p>
              <p className="mt-4 text-xs  text-gray-500">
                Évitez la file à certaines de nos attractions les plus
                populaires grâce à un accès rapide par la file dédiée Disney
                Premier Access (accès rapide aux attractions), à partir de 5 €
                par personne et par attraction en semaine. Quantités limitées !
              </p>
            </div>
            <div className="mt-10 flex items-center justify-center">
              <button
                className="rounded-full border-2 border-[#0046E4] py-1 px-14 text-[#0046E4] "
                type="submit"
              >
                <span className="text-bold text-md">En savoir plus</span>
              </button>
            </div>
          </div>
        </div>
      </Container>

      <main>{children}</main>
    </>
  );
}
