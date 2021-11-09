import React from "react";
import { Box , Container, Typography} from "@mui/material";
import { aboutData } from "data/aboutData";
import "./style.css"

export const ROUTE_ABOUT = "/about";


export default function About() {
  return (
    <Container maxWidth="lg">
      <Box marginTop="64px">
      <img className="poster-falcon" src={aboutData.aboutFalcon.image} alt="falcon poster" />

      <Box mt={5}>
        <Typography
          component="div"
          variant="h4"
          fontWeight="bold"
          align="center"
        >
          {aboutData.aboutFalcon.title}
        </Typography>
      </Box>
      <Box mt={4} mb={10}>
        <Typography variant="subtitle1" align="center">
          {aboutData.aboutFalcon.desc}
        </Typography>
      </Box>
    </Box>
    </Container>
  );
}
