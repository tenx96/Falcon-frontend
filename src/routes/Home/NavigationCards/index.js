import { Button, Typography } from "@mui/material";
import React from "react";
import "./style.css";

function NavigationCards({ title, image, subTitle, icon }) {
  return (
    <div class="text-center">
      <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/unity/unity.png"
        alt="something" />
      <Typography maxWidth="80%" sx={{
        my: 2
      }} color="whitesmoke" align="center" variant="body2" component="p">
        {subTitle}
      </Typography>
      <Button sx={{ borderRadius: '100px' }} variant='contained' startIcon={icon}>{title}</Button>
    </div>
  );
}

export default NavigationCards
