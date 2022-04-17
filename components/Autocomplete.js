import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import datas from "../data/Datas";

export default function ComboBox({ label, options }) {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={options}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label={label} />}
    />
  );
}
