import { Button, Typography, Box, Collapse, Card, Slide } from "@mui/material";
import React, { useState } from "react";
import "./style.css";

function NavigationCards({ title, image, subTitle, icon }) {
  return (
    // <div
    //   style={{
    //     backgroundImage: `linear-gradient( rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6) ) ,url('${image}')`,
    //   }}
    //   className="nav-card-container"
    // >
    //   <div>
    //     <Box my={3} display="flex" flexDirection="column" justifyContent="center" alignItems="center">

    //     <Typography  maxWidth="80%" sx={{
    //           my : 2
    //       }} color="whitesmoke" align="center" variant="body2" component="p">
    //         {subTitle}
    //       </Typography>
    //       <Button sx={{
    //           borderRadius : "100px"
    //       }} variant="contained">{title}</Button>

    //     </Box>
    //   </div>
    // </div>
    <div class="text-center">
      <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/unity/unity.png"
        alt="something" />
      <h3>Game Developer</h3>
      <p>Unity Engine / Pygame</p>
      <Button sx={{borderRadius:'100px'}} variant='contained' startIcon={icon}>{title}</Button>
    </div>
  );
}

export default NavigationCards
