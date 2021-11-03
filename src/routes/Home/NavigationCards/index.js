import { Button } from "@mui/material";
import React from "react";
import "./style.css";

function NavigationCards({ title, image, subTitle, icon }) {
  return (
    <div class="text-center">
      <img src={image} width="200px"
        alt="something" />
      <p className="mt-3">{subTitle}</p>
      <Button sx={{ borderRadius: '100px' }} variant='contained' startIcon={icon}>{title}</Button>
    </div>
  );
}

export default NavigationCards
