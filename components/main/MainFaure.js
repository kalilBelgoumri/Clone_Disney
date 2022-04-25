import React from "react";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";
import word from "/public/world_triptyque-disneyland-paris.jpg";
import word1 from "/public/world_triptyque-disneyland-paris-wds-.jpg";
function MainFaure() {
  const isTabletOrMobile = useMediaQuery({ query: "(min-width: 778px)" });

  return (
    <>
      {isTabletOrMobile ? (
        <Image src={word} alt="test" layout="responsive" />
      ) : (
        <Image src={word1} alt="test" layout="responsive" />
      )}
      <span className="mt-5 text-center text-lg text-[#253050]">
        Nos deux Parcs : le,
        <span
          className="cursor-pointer text-blue-400"
          onClick={() => router.push("/")}
        >
          Parc Disneyland
        </span>
        , le
        <span
          className="cursor-pointer text-blue-400"
          onClick={() => router.push("/")}
        >
          Parc Walt Disney Studios
        </span>{" "}
        , et les boutiques, bars, restaurants et cinéma du{" "}
        <span
          className="cursor-pointer text-blue-400"
          onClick={() => router.push("/")}
        >
          Disney Village.
        </span>
      </span>
    </>
  );
}

export default MainFaure;
