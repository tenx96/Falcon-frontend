import "./footer.css";

import React from "react";
import { Grid,Typography ,Box} from "@mui/material";
import FooterSocial from "./social";
import About from "./About";
function Footer() {
  return (
    <div className="footer-content">
      <Grid p={4} container height={200} width="100vw">
        <Grid item xs={6} md={4}>
            <FooterSocial/>
        </Grid>

        <Grid item xs={6} md={4}>
        <Box mt={4}>
        <Typography color="white" textAlign="center" variant="body2" gutterBottom>
          Falcon Festival 2021, by Blue Hills Society, Dima Hasao, Assam India
        </Typography>
      </Box>
        </Grid>
        <Grid item xs={6} md={4}>
            <About/>
        </Grid>
        <Grid item xs={12}>     <Typography color="white" textAlign="center" variant="caption" gutterBottom component="p">
        Copyright © 2021 Falcon Festival
        </Typography></Grid>
      </Grid>
    </div>
  );
}

export default Footer;
