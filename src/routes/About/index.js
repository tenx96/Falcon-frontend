import React from "react";
import { Box, Container, Typography } from "@mui/material";
import "./style.css";
import { useSelector } from "react-redux";
import HomePageLoader from "components/loaders/HomePageLoader";

export const ROUTE_ABOUT = "/about";

export default function About() {
  const about = useSelector((state) => state.home.about);
  const isLoaded = useSelector((state) => state.home.isLoaded);

  return isLoaded ? (
    <Container maxWidth="lg">
      <Box marginTop="64px">
        <img
          className="poster-falcon"
          src={about.aboutFalcon.image}
          alt="falcon poster"
        />

        <Box mt={5}>
          <Typography
            component="div"
            variant="h4"
            fontWeight="bold"
            align="center"
          >
            {about.aboutFalcon.title}
          </Typography>
        </Box>
        <Box mt={4} mb={10}>
          <Typography variant="subtitle1" align="center">
            {about.aboutFalcon.desc}
          </Typography>
        </Box>
      </Box>
    </Container>
  ) : (
    <HomePageLoader />
  );
}
