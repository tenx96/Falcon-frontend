import { Grid, Typography } from "@mui/material";
import React from "react";
import SponsorCard from "./SponsorCard";
import "./sponsors.css";

import sponsor1 from "assets/sponsors/sponsor-1.jpg"
import sponsor2 from "assets/sponsors/sponsor-2.png"
import sponsor3 from "assets/sponsors/sponsor-3.jpeg"



const sponsorsList = [
      sponsor1,
      sponsor2,
      sponsor3
]


function Sponsors() {
  return (
    <div>
      <Grid container sx={{display:'flex',justifyContent:'center'}} mt={10} >
        <Grid item xs={12}>
          <Typography
            textAlign="center"
            variant="h3"
            gutterBottom
            component="div"
            fontWeight="bold"
          >
            Meet our sponsors
          </Typography>
        </Grid>
        {sponsorsList.map((item,index) => (
          <Grid
            key={index}
            item
            mt={3}
            container
            justifyContent="center"
            alignItems="center"
            sm={4}
            md={2}
            xs={6}
          >
            <SponsorCard image={item}/>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Sponsors;
