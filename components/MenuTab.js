import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import DatePickers from "./DatePickers";
import ComboBox from "./Autocomplete";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function MenuTab() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", maxHeight: "100vh", height: "auto" }}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          display: "flex",
          justifyContent: "center",
          fontFamily: "avenir",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            sx={{
              fontSize: 14,
              fontWeight: "bolder",
              fontFamily: "avenir",
              textTransform: "none",
            }}
            label="Hotêl + Billets "
            {...a11yProps(0)}
          />
          <Tab
            sx={{
              fontSize: 14,
              fontWeight: "bolder",
              fontFamily: "avenir",
              textTransform: "none",
            }}
            label="Billets"
            {...a11yProps(1)}
          />
        </Tabs>
      </Box>
      <TabPanel
        className="flex flex-col md:justify-start"
        value={value}
        index={0}
      >
        <div className="mb-3 ml-5">
          <span className="text-[12px] flex text-[rgb(37, 48, 80)] font-avenir">
            Sélectionnez vos dates
          </span>
        </div>
        <div className="flex gap-5 items-center md:flex-row md:items-center ">
          <DatePickers />

          <ComboBox label="test" year="1995" />
          <ComboBox label="test" year="1995" />
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
    </Box>
  );
}
