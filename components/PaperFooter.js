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
            xs: 500,
            sm: 500,
            lg: 1000,
          },
          bottom: 80,
          boxShadow: "rgb(0 0 0 / 10%) 0px 4px 32px;",
        },
      }}
    >
      <Paper className="flex items-center justify-center" variant="outlined">
        <Footer />
      </Paper>
    </Box>
  );
}
