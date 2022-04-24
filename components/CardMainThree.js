/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Image from "next/image";

export default function CardMainThree({
  className,
  image,
  typo1,
  button,
  typo,
}) {
  return (
    <Card sx={{ width: 300, borderRadius: 3 }}>
      <img id="test" src={image} alt="test" />
      <CardContent>
        <h1> {typo1} </h1>
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
