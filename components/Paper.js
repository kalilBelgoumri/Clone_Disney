import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

export default function PaperNav() {
  return (
    <Box
      sx={{
        display: "flex",
        "& > :not(style)": {
          m: 1,
          width: 1000,
          height: 1000,
          backgroundColor: "red",
          position: "absolute",
          top: 0,
          zIndex: 1000,
        },
      }}
    >
      <Paper variant="outlined" />
      <Paper variant="outlined" square />
    </Box>
  );
}
