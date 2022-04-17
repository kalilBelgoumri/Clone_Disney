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
        <div className="hidden md:flex absolute mt-12">
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
      <div className="flex justify-center items-center">
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
      {/* <div className="absolute top-[172vh]">
        <Image src={download} priority="responsive" alt="download" />
      </div> */}

      <div className="flex justify-center relative bottom-28">
        <PaperNav />
      </div>
      <div className="flex justify-center">
        <h1 className="text-2xl">En ce moment à Disneyland Paris</h1>
      </div>

      <Container maxWidth="md" className="mt-5">
        <div className="flex gap-5 justify-center flex-col lg:flex-row">
          <div className="flex">
            <Image
              className="rounded-lg"
              src={mickey}
              priority="responsive"
              alt="mickey"
            />
            {/* <h1>Découvrez nos prix du moment</h1>
            <p>
              Et évadez-vous le temps d’un séjour magique au Coeur du 30e
              Anniversaire !
            </p> */}
          </div>
          <div className="grid">
            <Image
              className="rounded-lg"
              src={mickey1}
              priority="responsive"
              // width={500}
              // height={280}
              alt="mickey"
            />
            {/* <h1>Disney Premier Access</h1>
            <p>
              Évitez la file à certaines de nos attractions les plus populaires
              grâce à un accès rapide par la file dédiée Disney Premier Access
              (accès rapide aux attractions), à partir de 5 € par personne et
              par attraction en semaine. Quantités limitées !
            </p> */}
          </div>
        </div>
      </Container>
      <main>{children}</main>
    </>
  );
}
