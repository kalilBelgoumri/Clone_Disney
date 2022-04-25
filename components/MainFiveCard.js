import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Image from "next/image";
import { Container } from "@mui/material";

export default function MainFiveCard() {
  return (
    <>
      <span className="mt-20 text-center text-[24px] text-[#202249]">
        Planifiez une journée qui vous ressemble
      </span>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            display: "flex",
            alignItems: "center",
            width: 340,
            height: 130,
            borderRadius: "12px",
          },
        }}
      >
        <Paper elevation={4}>
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
                <span className="text-[17px] font-bold leading-none text-[#202249]">
                  Vous venez en couple ou avec des amis ?
                </span>
              </div>
              <span className="font-sans text-[15px]  leading-tight text-[#202249]">
                Attractions, restaurants, boutiques... Planifiez une journée qui
                vous ressemble !
              </span>
            </div>
          </Container>
        </Paper>
      </Box>
    </>
  );
}
