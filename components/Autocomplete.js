import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function ComboBox({ label, year }) {
  const Hotel = [{ label: label, year: year }];
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={Hotel}
      sx={{ width: "100%" }}
      renderInput={(params) => <TextField {...params} label="Movie" />}
    />
  );
}
