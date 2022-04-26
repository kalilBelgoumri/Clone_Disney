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

export default function CardMainThree({
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
        <div className="flex w-48 rounded-md border-2 border-gray-500 py-1 ">
          <BiWalk />{" "}
          <span className="font-sans text-xs font-normal">{pieton}</span>
        </div>

        <p> {navette} </p>

        <Typography variant="body2" color="text.secondary">
          {typo}
        </Typography>
      </CardContent>
      <div className="flex justify-center">
        <CardActions>{button}</CardActions>
      </div>
    </Card>
  );
}
