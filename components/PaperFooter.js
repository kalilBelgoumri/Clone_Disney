import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Footer from "./Footer";

export default function PaperFooter() {
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
        className="flex h-52 items-center justify-center pb-7"
        variant="outlined"
      >
        <Footer />
      </Paper>
    </Box>
  );
}
