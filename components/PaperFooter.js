import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Footer from "./Footer";
import Image from "next/image";
import { useRouter } from "next/router";

export default function PaperFooter() {
  const router = useRouter();
  return (
    <Box
      sx={{
        display: "flex",
        "& > :not(style)": {
          borderRadius: 4,
          minWidth: {
            xs: 0,
            sm: 640,
            md: 768,
            lg: 960,
            xl: 1100,
          },

          heigh: {
            lg: "1000px",
          },
          boxShadow: "rgb(0 0 0 / 10%) 0px 4px 32px;",
        },
      }}
    >
      <Paper
        className="flex h-52 flex-col items-center justify-center pb-44"
        variant="outlined"
      >
        <Footer />
        <span className="mt-10 mb-10 w-[90%] border-b-[0.1px] border-gray-300" />
        <div className="flex  self-start">
          <p className="pl-16 text-[16px] font-bold text-[#253b56]">
            Restons connectés
          </p>
        </div>
        <div className="flex self-start pl-12">
          <ul className="flex">
            <li className="cursor-pointer px-1">
              <Image
                src="/social/social_facebook_tcm808-174864.svg"
                width="36"
                height="36"
                alt="facebook"
                onClick={() =>
                  router.push("https://www.facebook.com/DisneylandParisfr/")
                }
              />
            </li>
            <li className="cursor-pointer px-1">
              <Image
                src="/social/social_youtube_tcm808-174868.svg"
                width="36"
                height="36"
                alt="facebook"
                onClick={() =>
                  router.push("https://www.youtube.com/user/disneylandparis")
                }
              />
            </li>{" "}
            <li className="cursor-pointer px-1">
              <Image
                src="/social/social_instagram_tcm808-174866.svg"
                width="36"
                height="36"
                alt="facebook"
                onClick={() =>
                  router.push("https://instagram.com/disneylandparis/")
                }
              />
            </li>{" "}
            <li className="cursor-pointer px-1">
              <Image
                src="/social/social_twitter_tcm808-174867.svg"
                width="36"
                height="36"
                alt="facebook"
                onClick={() =>
                  router.push("http://www.twitter.com/disneylandparis")
                }
              />
            </li>
          </ul>
          <div className="flex flex-col self-end pl-52">
            <p className="text-right">
              Une question sur tous les produits et offres disponibles ?
            </p>
            <p>
              Demandez l’aide de nos experts basés au cœur des Parcs Disney en
              les contactant au
            </p>
          </div>
          <div className="flex items-center justify-center">
            <div className="ml-10">
              <button
                className="flex items-center rounded-full border-2 py-2  px-8 "
                type="submit"
              >
                <Image
                  src="/disney-btn-fixe.png"
                  width="20"
                  height="20"
                  alt="mickey"
                />
                <span className="pl-1 text-black"> 0 825 300 500 </span>
              </button>
              <p className="text-center text-[9px]">
                Service 0,15 €/min + prix appel
              </p>
            </div>
          </div>
        </div>
      </Paper>
    </Box>
  );
}
