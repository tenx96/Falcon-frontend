import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import About from "./About";
import "./footer.css";
import FooterSocial from "./social";


function Footer() {

  const contacts = useSelector(state => state.home.contact)
  const isLoaded = useSelector(state => state.home.isLoaded)

  return (
    <div className="footer-content">
      <Grid p={4} container width="100vw">
        <Grid item xs={12} md={4}>
          <FooterSocial />
        </Grid>

        <Grid item xs={12} md={4}>
          <Box mt={4}>
            <Typography
              color="white"
              textAlign="center"
              variant="body2"
              gutterBottom
            >
              Falcon Festival 2021 Powered by NORTH CACHAR HILLS AUTONOMOUS
              COUNCIL organised by Falcon Festival Celebration committee in
              Collaboration with Blue Hills Society
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <About />
        </Grid>
        <Grid item xs={12}>
          <Box
            sx={{
              py: [2, 3, 4],
            }}
            width="100%"
            alignItems="center"
            display="flex"
            flexDirection="column"
          >
            <Box
              display="flex"
              justifyContent="start"
              alignItems="center"
              flexDirection="column"
            >
              {contacts.map((item, i) => (
                <Typography variant="caption">{`${item.label} : ${item.contact}`}</Typography>
              ))}
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12}>
          {" "}
          <Typography
            color="white"
            textAlign="center"
            variant="caption"
            gutterBottom
            component="p"
          >
            Copyright © 2021 Falcon Festival
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default Footer;
