import { Grid, Typography } from "@mui/material";
import React from "react";
import SponsorCard from "./SponsorCard";
import "./sponsors.css";



const sponsorsList = [
    "https://www.pngitem.com/pimgs/m/249-2491766_sports-brand-logo-png-transparent-png.png",
    "https://www.nicepng.com/png/detail/28-283120_logos-of-different-brands.png",
    "https://www.freepnglogos.com/uploads/new-balance-png-logo/womens-stylish-shoes-new-balance-png-logo-1.png",
    "https://www.nicepng.com/png/detail/28-283120_logos-of-different-brands.png",
    "https://www.freepnglogos.com/uploads/new-balance-png-logo/womens-stylish-shoes-new-balance-png-logo-1.png",
    "https://www.pinclipart.com/picdir/middle/106-1066002_sports-brands-logos-png-www-pixshark-com-images.png",
    "https://www.pngitem.com/pimgs/m/249-2491766_sports-brand-logo-png-transparent-png.png",
    "https://www.pinclipart.com/picdir/middle/106-1066002_sports-brands-logos-png-www-pixshark-com-images.png",
    "https://www.freepnglogos.com/uploads/new-balance-png-logo/womens-stylish-shoes-new-balance-png-logo-1.png",
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
