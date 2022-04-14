import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import MenuTab from "./MenuTab";

export default function PaperNav() {
  return (
    <Box
      sx={{
        display: "flex",
        "& > :not(style)": {
          borderRadius: 10,
          width: {
            xs: 500,
            sm: 700,
            md: 700,
            lg: 1000,
            xl: 1200,
          },

          heigh: {
            xs: 500,
            sm: 500,
          },
          bottom: 80,
          boxShadow: "rgb(0 0 0 / 10%) 0px 4px 32px;",
        },
      }}
    >
      <Paper className="flex justify-center" variant="outlined">
        <MenuTab />
      </Paper>
    </Box>
  );
}
