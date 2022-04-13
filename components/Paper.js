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
          width: 1000,
          height: 220,
          bottom: 100,
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
