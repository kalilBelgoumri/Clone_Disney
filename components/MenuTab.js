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
import { Container } from "@mui/material";
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
          <div className="relative mb-5 flex flex-col justify-around">
            <div className="text-[rgb(37, 48, 80)] absolute  left-[30px] flex font-avenir text-[12px] sm:left-[133px] md:left-[137px] lg:left-[40px]">
              Sélectionnez vos dates
            </div>
            <div className="text-[rgb(37, 48, 80)] absolute left-[30px] top-[80px] flex  font-avenir text-[12px] sm:left-[133px] md:left-[137px] lg:left-[392px] lg:top-0">
              Hôtels et Resorts
            </div>
            <div className="text-[rgb(37, 48, 80)] absolute top-[163px] right-[188px] flex font-avenir text-[12px] sm:right-[293px] md:right-[288px] lg:top-0 lg:right-[496px]">
              Chambres et visiteurs
            </div>
          </div>
          <div className="flex flex-col items-center gap-10  md:items-center xl:flex-row ">
            <DatePickers />

            <ComboBox
              options={datas.map((item) => item.hotel)}
              label="Tous les hôtels"
            />
            <ComboBox options={datas.map((item) => item.hotel)} label="test" />
            <button
              id="btnR"
              className="cursor-pointer rounded-full border px-8 py-2 font-avenir text-sm  text-white focus:bg-blue-500"
              type="submit"
            >
              Réserver
            </button>
          </div>

          <div className="mt-12 flex justify-center text-xs">
            <p>Vous cherchez la date idéale ?</p>

            <p
              className="cursor-pointer overflow-y-hidden text-xs text-blue-700 hover:border-b-2 hover:border-blue-700"
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
