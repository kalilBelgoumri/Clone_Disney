/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { BiWalk } from "react-icons/bi";
import { FaBusAlt } from "react-icons/fa";

export default function CardMainSix({
  className,
  image,
  typo1,
  button,
  typo,
  pieton,
  navette,
}) {
  return (
    <Card sx={{ width: 300, borderRadius: 3 }}>
      <img id="test" src={image} alt="test" />
      <CardContent>
        <h1> {typo1} </h1>
        <div className="flex flex-col items-start gap-3 py-5 pl-5">
          <div className="flex w-48 rounded-md border-2 border-gray-500 py-1 ">
            <div className="pr-3">
              <BiWalk />
            </div>
            <span className="font-sans text-xs font-normal">{pieton}</span>
          </div>
          <div className="flex w-48 rounded-md border-2 border-gray-500 py-1 ">
            <div className="pr-3">
              <FaBusAlt />
            </div>
            <span className="font-sans text-xs font-normal"> {navette} </span>
          </div>
          <Typography variant="body2" color="text.secondary">
            {typo}
          </Typography>
        </div>
      </CardContent>
      <div className="flex justify-center">
        <CardActions>{button}</CardActions>
      </div>
    </Card>
  );
}
