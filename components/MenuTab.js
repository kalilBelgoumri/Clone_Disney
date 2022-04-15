import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import DatePickers from "./DatePickers";
import ComboBox from "./Autocomplete";
import datas from "../data/Datas";
import { useId } from "react";
import CardAutocomplete from "./CardAutocomplete";
import { useRouter } from "next/router";
function TabPanel({ children, value, index, ...other }) {
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
  const router = useRouter();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const hotel = useId();

  return (
    <>
      <Box
        sx={{
          width: "100%",
          maxHeight: "100vh",
          height: "auto",
          display: "flex",
          flexDirection: "column",
        }}
      >
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
          <div className="flex-col mb-5 flex justify-around relative">
            <span className="absolute text-[12px] left-[26px] flex text-[rgb(37, 48, 80)] font-avenir">
              Sélectionnez vos dates
            </span>
            <span className="absolute text-[12px] left-[426px] flex text-[rgb(37, 48, 80)] font-avenir">
              Hôtels et Resorts
            </span>
            <span className="absolute right-[294px] text-[12px] flex text-[rgb(37, 48, 80)] font-avenir">
              Chambres et visiteurs
            </span>
          </div>
          <div className="flex gap-5 items-center md:flex-row md:items-center ">
            <DatePickers />

            <ComboBox
              options={datas.map((item) => item.hotel)}
              label="Tous les hôtels"
            />
            <ComboBox options={datas.map((item) => item.hotel)} label="test" />
            <button
              id="btnR"
              className="rounded-full text-white font-avenir px-8 py-2 text-sm cursor-pointer  border focus:bg-blue-500"
              type="submit"
            >
              Réserver
            </button>
          </div>
          <div className="flex justify-center mt-12 text-xs">
            <p>Vous cherchez la date idéale ?</p>

            <p
              className="cursor-pointer text-xs text-blue-700 hover:border-b-2 hover:border-blue-700"
              onClick={() => router.push("/")}
            >
              Comparez les prix
            </p>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
      </Box>
    </>
  );
}

// This also gets called at build time
export async function getStaticProps() {
  const res = await fetch(`../datas`);
  const datas = await res.json();

  // Pass post data to the page via props
  return { props: { datas } };
}

console.log(datas);
