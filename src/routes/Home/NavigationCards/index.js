import { Button, Typography, Box, Collapse, Card, Slide } from "@mui/material";
import React, { useState } from "react";
import "./style.css";

function NavigationCards({ title, image, subTitle }) {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient( rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6) ) ,url('${image}')`,
      }}
      className="nav-card-container"
    >
      <div>
        <Box my={3} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
          
        <Typography  maxWidth="80%" sx={{
              my : 2
          }} color="whitesmoke" align="center" variant="body2" component="p">
            {subTitle}
          </Typography>
          <Button sx={{
              borderRadius : "100px"
          }} variant="contained">{title}</Button>
         
        </Box>
      </div>
    </div>
  );
}

export default NavigationCards;
