import React from "react";
import CardMainThree from "../CardMainThree";
import { TextField } from "@mui/material/TextField";

function MainHeight() {
  return (
    <div>
      <h3 className="text-center text-[24px] font-extrabold text-[#202249]">
        Découvrez notre gamme de billets
      </h3>
      <div className="mt-10 flex justify-center">
        <CardMainThree
          image="/mainHeigth/1.jpg"
          typo1="Quel billet est fait pour vous ? "
          typo="Billet liberté 1 jour, billet daté 1 à 4 jours, ou billet daté 1 jour avec navette, à vous de choisir !
        "
        />
      </div>
    </div>
  );
}

export default MainHeight;
