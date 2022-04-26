import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Image from "next/image";
import { Container } from "@mui/material";
import { useRouter } from "next/router";

export default function MainFiveCard() {
  const router = useRouter();
  return (
    <>
      <span className="mt-20 text-center text-[24px] text-[#202249]">
        Planifiez une journée qui vous ressemble
      </span>
      <div className="mt-5 flex items-center justify-center">
        <Box
          sx={{
            display: "flex",

            "& > :not(style)": {
              display: "flex",
              alignItems: "center",
              width: 340,
              height: 130,
              borderRadius: "15px",
            },
          }}
          className="flex cursor-pointer flex-col items-center justify-center gap-10 md:flex-row"
        >
          <Paper
            onClick={() => router.push("/")}
            elevation={4}
            className="hover:shadow-2xl"
          >
            <div className="flex pl-2">
              <Image
                className="rounded-lg"
                src="/../public/world_dreams-matter-more-than-ever-key-visual-young-adults.jpg"
                alt="small"
                width="170%"
                height="170%"
              />
            </div>
            <Container maxWidth="xl">
              <div className="flex flex-col">
                <div className="flex flex-1 items-start justify-start">
                  <span className="pb-1 text-[17px] font-bold leading-none text-[#202249]">
                    Vous venez en couple ou avec des amis ?
                  </span>
                </div>

                <span className="font-sans text-[15px]  leading-tight text-[#202249]">
                  Attractions, restaurants, boutiques... Planifiez une journée
                  qui vous ressemble !
                </span>
              </div>
            </Container>
          </Paper>

          <Paper
            onClick={() => router.push("/")}
            elevation={4}
            className="hover:shadow-2xl"
          >
            <div className="flex pl-2">
              <Image
                className="rounded-lg"
                src="/../public/small-world-attraction_1-1_zoom.jpg"
                alt="small"
                width="170%"
                height="170%"
              />
            </div>
            <Container maxWidth="xl">
              <div className="flex flex-col">
                <div className="flex flex-1 items-start justify-start">
                  <span className="pb-1 text-[17px] font-bold leading-none text-[#202249]">
                    Vous avez un enfant de 0 à 6 ans ?
                  </span>
                </div>

                <span className="font-sans text-[15px]  leading-tight text-[#202249]">
                  Préparez cette journée d`aventure et de rêve, pour plaire à
                  toute la famille !
                </span>
              </div>
            </Container>
          </Paper>
        </Box>
      </div>
    </>
  );
}
