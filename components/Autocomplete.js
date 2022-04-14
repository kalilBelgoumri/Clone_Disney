import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function ComboBox({ label, year, label1 }) {
  const Hotel = [{ label: label, year: year }];
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={Hotel}
      getOptionLabel={(option) => (option.label ? option.label : "")}
      sx={{ width: "100%" }}
      renderInput={(params) => <TextField {...params} label={label1} />}
    />
  );
}
